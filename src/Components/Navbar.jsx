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

const Navbar = ({totalItems}) => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appbar} color="inherit">
      <Toolbar>
        <Grid container alignItems='center'>
          <img
            src={logo}
            alt={"commerce.js"}
            height="25px"
            className={classes.image}
          />
          <Typography component="span" variant='h6' className={classes.title}>Commerce.js</Typography>

          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton color="inherit" aria-label="Show Cart items">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
