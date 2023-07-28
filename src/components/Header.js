import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Container, Link, Typography } from '@mui/material';
import { colors } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    header: {
        height: '100vh',
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
                    <div>
                        <Typography variant='p' sx={{
                            fontSize: {
                                xs: '2rem', // Font size for xs (extra small) screens
                                sm: '2.5rem', // Font size for sm (small) screens
                                md: '3rem', // Font size for md (medium) screens
                                lg: '3.5rem', // Font size for lg (large) screens
                            },
                            lineHeight: '1',
                            fontWeight: "bold"
                        }}>
                            Climb to Success with Elevated Communication.
                        </Typography>
                        <br />
                        <Box marginTop={4} marginBottom={5}>
                            <Typography variant='p'>
                                Your digital success is in good hands! As digital communication experts,
                                we offer top-notch solutions in community management, impactful graphic
                                design, and strategic digital marketing to enhance your online presence.
                                Entrust us with your vision, and together, let's reach new heights!
                            </Typography>
                        </Box>
                        <Link href={'#contact'} >
                            <Button sx={{
                                backgroundColor: "#fff",
                                color: "#1d5e85",
                                fontSize: {
                                    xs: '1rem', // Font size for xs (extra small) screens
                                    sm: '1.5rem', // Font size for sm (small) screens
                                    md: '2rem', // Font size for md (medium) screens
                                    lg: '2rem', // Font size for lg (large) screens
                                },
                                fontWeight: 'bold',
                                ':hover': {
                                    color: '#fff'
                                }
                            }}
                                variant="contained" size="large">
                                Contact us
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </Box >
    );
};

export default Header;
