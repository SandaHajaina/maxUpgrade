import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Container, Link, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

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

    const { t } = useTranslation();

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
                            {t('header.slogan')}
                        </Typography>
                        <br />
                        <Box marginTop={4} marginBottom={5}>
                            <Typography variant='p'>
                                {t('header.text')}
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
                                {t('header.button')}
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </Box >
    );
};

export default Header;
