import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@mui/material';
import { colors } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    header: {
        height: '60vh', // Hauteur à 40vh en tenant compte de la hauteur de l'AppBar (64px)
        display: 'flex',
        alignItems: 'center',
        color: '#ffffff',
        fontSize: '1.5rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
        },
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <Box sx={{ bgcolor: '#1d5e85' }}>
            <Container>
                <div className={classes.header}>
                    <Typography variant='p' sx={{ fontSize: "4rem", fontWeight: "bold" }} >
                        Climb to Success with Elevated Communication.
                    </Typography>
                </div>
            </Container>
        </Box >
    );
};

export default Header;
