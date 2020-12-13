import React, {useState, useEffect} from "react";
import Products from "./Components/Products";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import {commerce} from './lib/commerce'

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(null);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProducts(data)
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve()
    console.log(cart)
    setCart(cart)
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item.cart)
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])

  return (
    <div>
      <Navbar totalItems={cart ? cart.total_items : 0 }/>
      <Products products={products} onAddToCart={handleAddToCart}/>
      <Cart cart={cart}/>
    </div>
  );
};

export default App;
