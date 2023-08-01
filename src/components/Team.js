import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: '#1d5e85',
    },
    avatar: {
        width: '100%',
    },
    cardTeam: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px'
    },
    name: {
        paddingTop: '20px',
        fontSize: '1.5rem',
        fontWeight: '600'
    },
    description: {
        width: '300px',
    }
}));

const Team = () => {
    const classes = useStyles();

    const { t } = useTranslation();

    return (
        <Box sx={{
            py: '12vh',
            textAlign: 'center'
        }}>
            <Container>
                <Typography variant='h2' sx={{ color: 'primary.main' }}>
                    {t('team.title')}
                </Typography>
                <div>
                    <Box sx={{
                        flexGrow: 1,
                        py: 6
                    }}>
                        <Grid container>
                            <Grid xs={12} md={6}>
                                <Box className={classes.cardTeam}>
                                    <Box sx={{
                                        backgroundColor: '#185a7d',
                                        width: '300px',
                                        height: '300px',
                                        overflow: 'hidden',
                                        borderRadius: '10px'
                                    }}>
                                        <img className={classes.avatar} src="./team/eloi.png" alt="Eloi" />
                                    </Box>
                                    <Typography className={classes.name} variant='p' color={"#185a7d"}>Eloi</Typography>
                                    <Typography variant='h6' color={"#000"}>{t('team.eloi.role')}</Typography>
                                    <Typography className={classes.description} variant='p' color={"#000"}>
                                        {t('team.eloi.description')}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid xs={12} md={6}>
                                <Box className={classes.cardTeam}>
                                    <Box sx={{
                                        backgroundColor: '#185a7d',
                                        width: '300px',
                                        height: '300px',
                                        overflow: 'hidden',
                                        borderRadius: '10px'
                                    }}>
                                        <img className={classes.avatar} src="./team/sitraka.png" alt="Sitraka" />
                                    </Box>
                                    <Typography className={classes.name} variant='p' color={"#185a7d"}>Sitraka</Typography>
                                    <Typography variant='h6' color={"#000"}>{t('team.sitraka.role')}</Typography>
                                    <Typography className={classes.description} variant='p' color={"#000"}>
                                        {t('team.sitraka.description')}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ marginTop: 6 }}>
                            <Grid xs={12} md={6}>
                                <Box className={classes.cardTeam}>
                                    <Box sx={{
                                        backgroundColor: '#185a7d',
                                        width: '300px',
                                        height: '300px',
                                        overflow: 'hidden',
                                        borderRadius: '10px'
                                    }}>
                                        <img className={classes.avatar} src="./team/petit_tsilavina.png" alt="Tsilavina" />
                                    </Box>
                                    <Typography className={classes.name} variant='p' color={"#185a7d"}>Tsilavina</Typography>
                                    <Typography variant='h6' color={"#000"}>{t('team.tsilavina.role')}</Typography>
                                    <Typography className={classes.description} variant='p' color={"#000"}>
                                        {t('team.tsilavina.description')}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid xs={12} md={6}>
                                <Box className={classes.cardTeam}>
                                    <Box sx={{
                                        backgroundColor: '#185a7d',
                                        width: '300px',
                                        height: '300px',
                                        overflow: 'hidden',
                                        borderRadius: '10px'
                                    }}>
                                        <img className={classes.avatar} src="./team/sanda.png" alt="Sanda" />
                                    </Box>
                                    <Typography className={classes.name} variant='p' color={"#185a7d"}>Sanda</Typography>
                                    <Typography variant='h6' color={"#000"}>{t('team.sanda.role')}</Typography>
                                    <Typography className={classes.description} variant='p' color={"#000"}>
                                        {t('team.sanda.description')}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </Container >
        </Box >
    );
};

export default Team;