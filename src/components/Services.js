import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import animationDev from '../assets/json/dev.json';
import animationDesign from '../assets/json/design.json';
import animationMarketing from '../assets/json/marketing.json';
import LottieAnimation from './LottieAnimation';
import { useTranslation } from 'react-i18next';

const Services = () => {

    const { t } = useTranslation();

    return (
        <Box sx={{
            py: '12vh',
            textAlign: 'center'
        }}>
            <Container>
                <Typography variant='h2' sx={{ color: 'primary.main' }}>
                    {t('services.title')}
                </Typography>
                <Box>
                    <Grid container marginTop={4} spacing={2}>
                        {/* Trois colonnes pour les écrans larges */}
                        <Grid item xs={12} sm={4}>
                            {/* Contenu de la première colonne */}

                            <div className='animation'>
                                <LottieAnimation animationData={animationMarketing} />
                            </div>
                            <h4>{t('services.service.1')}</h4>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            {/* Contenu de la deuxième colonne */}

                            <div className='animation'>
                                <LottieAnimation animationData={animationDesign} />
                            </div>
                            <h4>{t('services.service.2')}</h4>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            {/* Contenu de la troisième colonne */}

                            <div className='animation'>
                                <LottieAnimation animationData={animationDev} />
                            </div>
                            <h4>{t('services.service.3')}</h4>
                        </Grid>
                    </Grid>

                </Box >
            </Container >
        </Box >
    );
};

export default Services;