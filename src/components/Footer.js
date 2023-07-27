import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    footer: {
        color: '#fff',
        backgroundColor: '#1d5e85',
        padding: theme.spacing(6),
        textAlign: "center", // Alignement du contenu au centre
    },
    aboutUs: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: theme.spacing(2),
    },
    logo: {
        width: 100,
        height: 'auto',
        marginRight: theme.spacing(1),
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <Box
            component="footer"
            className={classes.footer}
            sx={{

            }}
        >
            <Container maxWidth="xlg">
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                        <div className={classes.aboutUs}>
                            {/* Ici, vous pouvez insérer votre logo à la place du texte "About Us" */}
                            <img className={classes.logo} src="logo.png" alt="Logo" />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" color="secondary.main" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography variant="body2" color="secondary.main">
                            Email: welcome@maxupgrade.com
                        </Typography>
                        <Typography variant="body2" color="secondary.main">
                            Phone: +261 341 234 567
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" color="secondary.main" gutterBottom>
                            Follow Us
                        </Typography>
                        <Link href="https://www.facebook.com/" color="inherit">
                            <Facebook />
                        </Link>
                        <Link
                            href="https://www.instagram.com/"
                            color="inherit"
                            sx={{ pl: 1, pr: 1 }}
                        >
                            <Instagram />
                        </Link>
                        <Link href="https://www.twitter.com/" color="inherit">
                            <LinkedIn />
                        </Link>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Typography variant="body2" color="text.secondary" align="center">
                        {"Copyright © "}
                        <Link color="inherit" href="https://www.maxupgrade.com/">
                            Max upgrade
                        </Link>{" "}
                        {new Date().getFullYear()}
                        {"."}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
