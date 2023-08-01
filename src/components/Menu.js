import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { Menu as MenuIcon, Close as CloseIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';

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
    const [isLoading, setIsLoading] = useState(false);

    const toggleDrawer = (isOpen) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(isOpen);
    };

    // language transalation i18n
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        setIsLoading(true);
        i18n.changeLanguage(selectedLanguage);
    };

    const menuItems = [
        { text: t('header.menu.1'), href: '#services' },
        { text: t('header.menu.2'), href: '#team' },
        { text: t('header.menu.3'), href: '#contact' },
        { text: t('header.menu.4'), href: '#blog' }
    ];

    return (
        <>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <div className={classes.title}>
                        <img className={`${classes.logo} ${classes.__logo__header}`} src="logo.png" alt="Logo" />
                    </div>

                    {/* Sélecteur de langue */}
                    <Box sx={{
                        display: {
                            xs: 'block',
                            md: 'none'
                        },
                        marginRight: 2
                    }}>
                        <select onChange={handleLanguageChange}>
                            <option value="en">En</option>
                            <option value="fr">Fr</option>
                        </select>
                    </Box>
                    <div className={classes.menuContainer}>
                        <List component="nav">
                            {menuItems.map((text) => (
                                <ListItem button>
                                    <Link href={text.href} color='#fff' underline='none'>
                                        <ListItemText primary={text.text} />
                                    </Link>
                                </ListItem>
                            ))}

                            {/* Sélecteur de langue */}
                            <select onChange={handleLanguageChange}>
                                <option value="en">En</option>
                                <option value="fr">Fr</option>
                            </select>

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



