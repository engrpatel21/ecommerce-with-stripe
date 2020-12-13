import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./ProductCard";
import useStyles from "../Styles/ProductsStyles";


const Products = ({products, onAddToCart}) => {
  const classes = useStyles();
  const product = products.map((product) => (
    <Grid item key={product.id} es={12} sm={6} md={4} lg={3}>
      <Product {...product} onAddToCart={ onAddToCart }/>
    </Grid>
  ));

  return (
    <div className={classes.content}>
      <div className={classes.toolbar}/>
        <Grid container justify="center" spacing={4}>
          {product}
        </Grid>
    </div>
  );
};

export default Products;
