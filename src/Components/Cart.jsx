import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from '../Styles/CartStyles'
import CartItem from "./CartItem";

const Cart = ({ cart }) => {
  
  const classes = useStyles()


  const EmptyCart = () => (
    <Typography variant='subtitle1' >Your have no items in your shopping cart!{console.log('true')}</Typography>
  )

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
            <Grid item sx={12} sm={4} key={item.id}>
            <CartItem item={item}/>
            </Grid>
          ))}
      </Grid>
      
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: { cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            type="button"
            className={classes.emptyButton}
            size="large"
            variant="contained"
            color="secondary"
          >
            Empty Cart
          </Button>
          <Button
            type="button"
            className={classes.checkoutButton}
            size="large"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
  
  if(!cart) return 'loading..'

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3">
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart/> : <FilledCart/>}
    </Container>
  );
};

export default Cart;
