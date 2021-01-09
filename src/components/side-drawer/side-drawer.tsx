import React, { useState, FC } from 'react';
import Link from 'next/link';
import {
    IconButton,
    ListItem,
    List,
    ListItemText,
    Drawer
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { SideDrawerInterface } from '../../interfaces/Sidedrawer';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    list: {
        width: 250,
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `black`,
    },
})


const navLinks = [
    { title: `Home`, path: `/` },
    { title: `Shop`, path: `/shop` },
    { title: `Auth`, path: `/auth` },
]

const SideDrawer = ({ navLinks }: SideDrawerInterface) => {


    const classes = useStyles();



    const [state, setState] = useState({ right: false });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return
        }
        setState({ [anchor]: open })
    }

    const sideDrawerList: FC = (anchor:string) => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List component="nav">
                {navLinks.map(({ title, path }) => (
                    <Link href={path}>
                        <a key={title} className={classes.linkText}>
                            <ListItem button>
                                <ListItemText primary={title} />
                            </ListItem>
                        </a>
                    </Link>
                ))}
            </List>
        </div>
    );

    return (
        <React.Fragment>
            <IconButton
                edge="start"
                aria-label="menu"
                onClick={toggleDrawer("right", true)}
            >
                <Menu />
            </IconButton>
            <Drawer
                anchor="right"
                open={state.right}
                onOpen={toggleDrawer("right", true)}
                onClose={toggleDrawer("right", false)}
            >
                {sideDrawerList("right")}
            </Drawer>
        </React.Fragment>
    )
}
export default SideDrawer;