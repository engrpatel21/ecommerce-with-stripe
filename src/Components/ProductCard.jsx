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



const ProductCard = ({name, description, media, price, onAddToCart}) => {

  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media}  image={media.source} title={name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: description}} variant="body2" color="textSecondary"/>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add To Cart" onClick={onAddToCart}>
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
