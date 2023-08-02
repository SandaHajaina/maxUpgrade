import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    footer: {
        color: '#fff',
        backgroundColor: '#1d5e85',
        padding: theme.spacing(6),
        textAlign: "center", // Alignement du contenu au centre
    },
    logo_footer: {
        width: 100,
        height: 'auto',
        //display: 'inline !important',
        marginRight: theme.spacing(1),
    },
    __logo__footer: {
        display: 'inline !important'
    }
}));

export default function Footer() {

    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <Box
            component="footer"
            className={classes.footer}
        >
            <Container maxWidth="xlg">
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                        {/* Ici, vous pouvez insérer votre logo à la place du texte "About Us" */}
                        <img className={`${classes.logo_footer} ${classes.__logo__footer}`} src="logo.png" alt="Logo" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" color="secondary.main" gutterBottom>
                            Contact
                        </Typography>
                        <Typography variant="body2" color="secondary.main">
                            {t('footer.email')}: welcome@maxupgrade.com
                        </Typography>
                        <Typography variant="body2" color="secondary.main">
                            {t('footer.phone')}: +261 341 234 567
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" color="secondary.main" gutterBottom>
                            {t('footer.follow')}
                        </Typography>
                        <Link href="https://www.facebook.com/profile.php?id=100095018467898" target="_blank" color="inherit">
                            <Facebook />
                        </Link>
                        <Link
                            href="https://www.instagram.com/maxupgrade2/"
                            target="_blank"
                            color="inherit"
                            sx={{ pl: 1, pr: 1 }}
                        >
                            <Instagram />
                        </Link>
                        <Link href="https://www.linkedin.com/company/97848598/admin/feed/posts/" target="_blank" color="inherit">
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
