import React from 'react';
import {Typography, Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core'
import useStyles from '../Styles/CartItemStyles'

const CartItem = ({item}) => {
  const classes = useStyles()
  return (
    <Card>
      <CardMedia
        image={item.media.source}
        className={classes.media}
        alt={item.name}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4"></Typography>
        <Typography variant="h5"></Typography>
        <CardActions className={classes.cardActions}>
          <div className={classes.buttons} ></div>
        </CardActions>
      </CardContent>
    </Card>
  );
}
 
export default CartItem;