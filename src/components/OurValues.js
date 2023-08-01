import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const OurValues = () => {

    const { t } = useTranslation();

    return (
        <Box sx={{
            py: '12vh'
        }}>
            <Container>
                <Typography

                    variant='h1' fontSize={{
                        xs: '1.5rem',
                        sm: '2rem',
                        md: '3rem',
                        lg: '3rem'
                    }} sx={{ color: 'primary.main' }}>
                    {t('value.title')}
                </Typography>
                <Box sx={{
                    border: '4px double #1d5e85', p: { xs: 2, md: 10 }, marginTop: 3,
                    display: 'flex',
                    flexDirection: {
                        xs: 'column', // Pour les petits écrans (mobiles), affichez les éléments en colonne
                        md: 'row', // Pour les écrans plus larges, affichez les éléments côte à côte
                    }
                }}>
                    <Box sx={{
                        flex: {
                            xs: '0 0 auto', // Pour les petits écrans, le contenu ne se développe pas pour remplir l'espace disponible
                            md: '1 0 auto', // Pour les écrans plus larges, le contenu se développe pour remplir l'espace disponible
                        },
                        textAlign: 'center'
                    }}>
                        <svg class="img-fluid" width="90%" height="153" viewBox="0 0 299 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M169.662 26.314C163.589 21.2118 155.817 18.5877 147.895 18.9667C147.842 18.9693 147.788 18.9706 147.734 18.9706C139.417 18.9706 131.113 21.8272 124.946 26.6958C118.811 31.5391 114.921 38.2438 114.921 46.0711C114.921 53.9035 118.796 60.6066 124.918 65.4459C131.073 70.3108 139.376 73.1679 147.734 73.1679C157.534 73.1679 167.341 76.4513 174.759 82.2657C182.212 88.1078 187.368 96.6227 187.368 106.93C187.368 117.235 182.213 125.768 174.763 131.629C167.368 137.448 157.595 140.752 147.818 140.77C138.231 141.226 128.824 138.048 121.479 131.863C114.114 125.661 109.37 116.897 108.203 107.338C107.977 105.49 109.292 103.808 111.14 103.582C112.989 103.357 114.67 104.672 114.896 106.521C115.856 114.388 119.761 121.6 125.822 126.704C131.883 131.808 139.652 134.424 147.567 134.031C147.623 134.028 147.679 134.026 147.734 134.026C156.099 134.026 164.422 131.185 170.594 126.329C176.733 121.499 180.625 114.798 180.625 106.93C180.625 99.0631 176.735 92.3832 170.599 87.5739C164.428 82.7369 156.104 79.9121 147.734 79.9121C137.923 79.9121 128.133 76.5827 120.738 70.7372C113.31 64.8661 108.178 56.3348 108.178 46.0711C108.178 35.8025 113.334 27.2709 120.768 21.4019C128.15 15.5741 137.906 12.2447 147.654 12.2265C157.243 11.7879 166.648 14.9733 173.999 21.1502C181.371 27.3447 186.135 36.0951 187.341 45.6488C187.574 47.4965 186.266 49.1834 184.418 49.4167C182.571 49.6499 180.884 48.3412 180.651 46.4935C179.658 38.6235 175.733 31.4158 169.662 26.314Z" fill="url(#paint0_linear_11_247)"></path>
                            <path d="M147.734 4V15.6" stroke="#009FD4" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M147.734 137.4V149" stroke="#009FD4" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M4 114.356L96.627 89.9963" stroke="#009FD4" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M195.053 64.012L287.602 39.5747" stroke="#009FD4" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M240.69 20.4878L290.318 38.3183L259.778 80.3199" stroke="url(#paint1_linear_11_247)" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round"></path>
                            <defs>
                                <linearGradient id="paint0_linear_11_247" x1="108.177" y1="12.1865" x2="223.026" y2="82.8945" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.178333" stop-color="#009FD4"></stop>
                                    <stop offset="1" stop-color="#46B756"></stop>
                                </linearGradient>
                                <linearGradient id="paint1_linear_11_247" x1="240.69" y1="20.4878" x2="307.829" y2="42.4721" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.178333" stop-color="#009FD4"></stop>
                                    <stop offset="1" stop-color="#46B756"></stop>
                                </linearGradient>
                            </defs>
                        </svg>

                    </Box>
                    <Box sx={{
                        paddingLeft: {
                            xs: 0,
                            md: 8
                        },
                        paddingTop: {
                            xs: 3,
                            md: 0
                        },
                        textAlign: {
                            xs: 'center',
                            md: 'left'
                        }
                    }}>
                        <Typography variant='p' fontWeight={'bold'} textAlign={{
                            xs: 'center !important',
                            md: 'left !important'
                        }}>
                            {t('value.description')}
                        </Typography>
                    </Box>
                </Box>
            </Container >
        </Box >
    );
};

export default OurValues;