import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

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

    return (
        <Box sx={{
            py: '12vh',
            textAlign: 'center'
        }}>
            <Container>
                <Typography variant='h2' sx={{ color: 'primary.main' }}>
                    Our solid team
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
                                    <Typography variant='h6' color={"#000"}>Marketing digital | BPO</Typography>
                                    <Typography className={classes.description} variant='p' color={"#000"}>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel temporibus totam ex sapiente incidunt corporis maiores vero rerum nam quasi!
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel temporibus totam ex sapiente incidunt corporis maiores vero rerum nam quasi!
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
                                    <Typography variant='h6' color={"#000"}>Marketing digital | BPO</Typography>
                                    <Typography className={classes.description} variant='p' color={"#000"}>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel temporibus totam ex sapiente incidunt corporis maiores vero rerum nam quasi!
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel temporibus totam ex sapiente incidunt corporis maiores vero rerum nam quasi!
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
                                    <Typography variant='h6' color={"#000"}>Graphic-designer</Typography>
                                    <Typography className={classes.description} variant='p' color={"#000"}>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel temporibus totam ex sapiente incidunt corporis maiores vero rerum nam quasi!
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel temporibus totam ex sapiente incidunt corporis maiores vero rerum nam quasi!
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
                                    <Typography variant='h6' color={"#000"}>Web developer</Typography>
                                    <Typography className={classes.description} variant='p' color={"#000"}>
                                        En tant que responsable de projet informatique chez Max upgrade,
                                        il est en mesure de fournir un leadership technique et un soutien à
                                        toute l'équipe pour s'assurer que les projets sont réalisés de manière
                                        efficace et efficiente. Sa polyvalence et sa capacité à s'adapter à tout
                                        type de projet font de lui un atout précieux pour l'équipe Max upgrade.
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