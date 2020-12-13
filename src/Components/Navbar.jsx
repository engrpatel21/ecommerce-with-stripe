import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Grid,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../assets/commerce.png";
import useStyles from "../Styles/NavbarStyles";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  const cartButton = (
    <div className={classes.button}>
      <IconButton
        color="inherit"
        component={Link}
        to="/cart"
        aria-label="Show Cart items"
      >
        <Badge badgeContent={totalItems} color="secondary">
          <ShoppingCart />
        </Badge>
      </IconButton>
    </div>
  );

  return (
    <AppBar position="fixed" className={classes.appbar} color="inherit">
      <Toolbar>
        <Grid container alignItems="center">
          <img
            src={logo}
            alt={"commerce.js"}
            height="25px"
            className={classes.image}
          />
          <Typography
            component="span"
            variant="h6"
            component={Link}
            to="/"
            className={classes.title}
          >
            Commerce.js
          </Typography>

          <div className={classes.grow} />
          {location.pathname === "/" && cartButton}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
