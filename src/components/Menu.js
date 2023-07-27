import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { Menu as MenuIcon, Close as CloseIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Link } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: '#1d5e85',
        //position: 'relative'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    title: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        maxWidth: 'auto',
        height: '12vh',
        marginRight: '10px',
    },
    __logo__header: {
        display: 'flex'
    },
    menuContainer: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
        // Ajouter les propriétés CSS ici
        '& > nav': {
            display: 'flex',
            whiteSpace: 'nowrap',
        },
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
            marginTop: '14px', // Pour dégager l'espace de l'AppBar sur les grands écrans
        },
    },
    closeButton: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '8px',
    },
}));

const Menu = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const toggleDrawer = (isOpen) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(isOpen);
    };

    //const menuItems = ['Services', 'Team', 'Contact', 'Blog'];

    const menuItems = [
        { text: 'Services', href: '#services' },
        { text: 'Team', href: '#team' },
        { text: 'Contact', href: '#contact' },
        { text: 'Blog', href: '#blog' }
    ];

    return (
        <>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <div className={classes.title}>
                        <img className={`${classes.logo} ${classes.__logo__header}`} src="logo.png" alt="Logo" />
                    </div>
                    <div className={classes.menuContainer}>
                        <List component="nav">
                            {menuItems.map((text) => (
                                <ListItem button>
                                    <Link href={text.href} color='#fff' underline='none'>
                                        <ListItemText primary={text.text} />
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </div>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        className={classes.menuButton}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)} variant="persistent">
                <div className={classes.closeButton}>
                    <IconButton onClick={toggleDrawer(false)}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <List className={classes.drawer}>
                    {menuItems.map((text) => (
                        <Link href={text.href} color='#1d5e85' underline='none'>
                            <ListItem button>
                                <ListItemText primary={text.text} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Drawer>

        </>
    );
};

export default Menu;



