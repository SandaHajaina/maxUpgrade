import React, { useState } from 'react';
import { TextField, Button, Container, Stack, Box, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Contact = () => {

    const { t } = useTranslation();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const placeholderStyle = {
        // Ajoutez ici les styles CSS que vous souhaitez appliquer au placeholder
        color: 'white'
    };

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('email', email);
        formData.append('message', message);
        formData.append('phoneNumber', phoneNumber);

        //send form data to the backend api
        try {
            const response = await axios.post('http://localhost/max_upgrade/api.php', formData);

            // La requête a réussi, vous pouvez accéder à la réponse ici
            console.log('Réponse du serveur :', response.data);

            setIsSuccess(true); // Définir l'état de succès à true après l'envoi réussi du formulaire
        } catch (error) {
            // En cas d'erreur, vous pouvez afficher le message d'erreur ici
            console.error('Erreur lors de l\'envoi des données.', error);
        }
    }

    return (
        <Box sx={{ py: '12vh' }}>
            <Container>
                <Box
                    sx={{
                        bgcolor: '#185a7d',
                        borderRadius: '10px',
                        py: {
                            xs: 6, // Padding for extra small screen (xs)
                            md: 10, // Padding for medium screen (md)
                        },
                        px: {
                            xs: 6, // Padding for extra small screen (xs)
                            md: 10, // Padding for medium screen (md)
                        },
                    }}
                >
                    <Typography variant='h2' color={'#fff'} textAlign={'center'} paddingBottom={6}>{t('contact.title')}</Typography>
                    <form onSubmit={handleSubmit} action="">
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    type="text"
                                    variant="outlined"
                                    color="secondary"
                                    label={t('contact.firstname')}
                                    onChange={e => setFirstName(e.target.value)}
                                    value={firstName}
                                    fullWidth
                                    required
                                    InputLabelProps={{
                                        style: placeholderStyle,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    type="text"
                                    variant="outlined"
                                    color="secondary"
                                    label={t('contact.lastname')}
                                    onChange={e => setLastName(e.target.value)}
                                    value={lastName}
                                    fullWidth
                                    InputLabelProps={{
                                        style: placeholderStyle,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    type="email"
                                    variant="outlined"
                                    color="secondary"
                                    label={t('contact.email')}
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                    fullWidth
                                    required
                                    InputLabelProps={{
                                        style: placeholderStyle,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    type="number"
                                    variant="outlined"
                                    color="secondary"
                                    label={t('contact.phone')}
                                    onChange={e => setPhoneNumber(e.target.value)}
                                    fullWidth
                                    required
                                    InputLabelProps={{
                                        style: placeholderStyle,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label={t('contact.message')}
                                    multiline
                                    variant="outlined"
                                    color="secondary"
                                    onChange={e => setMessage(e.target.value)}
                                    fullWidth
                                    rows={3}
                                    InputLabelProps={{
                                        style: placeholderStyle,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ textAlign: 'center' }}>
                                <Button sx={{ width: '50%' }} variant="outlined" color="secondary" type="submit">
                                    {t('contact.button')}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                    {isSuccess && (
                        <Typography variant="body1" color="#fff" textAlign="center">
                            Le message a été envoyé avec succès!
                        </Typography>
                    )}
                </Box>
            </Container >
        </Box >
    )
};

export default Contact;