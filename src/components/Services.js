import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import animationDev from '../assets/json/dev.json';
import animationDesign from '../assets/json/design.json';
import animationMarketing from '../assets/json/marketing.json';
import LottieAnimation from './LottieAnimation';

const Services = () => {
    return (
        <Box sx={{
            py: '12vh',
            textAlign: 'center'
        }}>
            <Container>
                <Typography variant='h2' sx={{ color: 'primary.main' }}>
                    What We Do ?
                </Typography>
                <Box>
                    <Grid container spacing={2}>
                        {/* Trois colonnes pour les écrans larges */}
                        <Grid item xs={12} sm={4}>
                            {/* Contenu de la première colonne */}
                            <h4>Digital Marketing</h4>
                            <Box sx={{
                                width: '300px',
                                display: 'contents'
                            }}>
                                <LottieAnimation animationData={animationMarketing} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            {/* Contenu de la deuxième colonne */}
                            <h4>Graphic design</h4>
                            <Box sx={{
                                width: '300px',
                                display: 'contents'
                            }}>
                                <LottieAnimation animationData={animationDesign} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            {/* Contenu de la troisième colonne */}
                            <h4>Web Developpement</h4>
                            <Box sx={{
                                width: '300px',
                                display: 'contents'
                            }}>
                                <LottieAnimation animationData={animationDev} />
                            </Box>
                        </Grid>
                    </Grid>

                </Box >
            </Container >
        </Box >
    );
};

export default Services;