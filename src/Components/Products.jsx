import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./ProductCard";

const productsArr = [
  {
    id: 1,
    name: "shoes",
    description: "running shoes",
    price: "$5",
    image: "https://picsum.photos/200",
  },
  {
    id: 2,
    name: "macbook",
    description: "apple macbooks",
    price: "$10",
    image: "https://picsum.photos/200",
  },
];

const Products = () => {
  const product = productsArr.map((product) => (
    <Grid item key={product.id} es={12} sm={6} md={4} lg={3}>
      <Product {...product} />
    </Grid>
  ));

  return (
    <Grid container justify="center" spacing={4}>
      {product}
    </Grid>
  );
};

export default Products;
