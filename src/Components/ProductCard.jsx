import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import useStyles from '../Styles/ProudctCardStyles'



const ProductCard = (props) => {
  const { name, description, price, image } = props
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media}  image={image} title={name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {price}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add To Cart">
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
