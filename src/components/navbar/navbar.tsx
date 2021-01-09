import React, { FC } from 'react';
import SideDrawer from "../side-drawer/side-drawer";
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container,
  Hidden
} from "@material-ui/core";

import RedditIcon from '@material-ui/icons/Reddit';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `black`
  }
});

const navLinks = [
  { title: `Home`, path: `/` },
  { title: `Shop`, path: `/shop` },
  { title: `Auth`, path: `/auth` },
]


const Navbar: FC = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" color='default'>
      <Toolbar>
        <Container className={classes.navDisplayFlex}>
          <Link href='/'>
            <IconButton edge="start" color="inherit" aria-label="home">
              <RedditIcon />
            </IconButton>
          </Link>
          <Hidden smDown>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {navLinks.map(({ title, path }) => (
                <Link href={path}>
                  <a key={title} className={classes.linkText} >
                    <ListItem button>
                      <ListItemText primary={title} />
                    </ListItem>
                  </a>
                </Link>
              ))}
            </List>
          </Hidden>
          <Hidden mdUp>
            <SideDrawer navLinks={navLinks} />
          </Hidden>

        </Container>
      </Toolbar>
    </AppBar>
  )
}
export default Navbar;

