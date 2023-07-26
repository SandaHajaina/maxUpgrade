import React from 'react';
import { TextField, Button, Box, useMediaQuery, useTheme, Container, Typography } from '@mui/material';

const Newsletter = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ajoutez ici la logique pour traiter l'inscription à la newsletter
        // Par exemple, vous pouvez envoyer les données à un serveur ou afficher un message de succès.
    };

    return (
        <Box py={12}>
            <Container>
                <Typography variant='h2' textAlign={'center'} paddingBottom={3} color={"#185a7d"}>Subscribe to Our Newsletter</Typography>
                <Box px={isMobile ? 2 : 10} textAlign="center">
                    <form onSubmit={handleSubmit}>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent={isMobile ? 'center' : 'flex-start'}
                            minHeight="48px" // Hauteur minimale pour aligner l'input et le bouton
                        >
                            <TextField
                                type="email"
                                label="Enter your email"
                                variant="outlined"
                                color="secondary"
                                fullWidth

                                sx={{
                                    flexGrow: 1,
                                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#185a7d', // Change border color when focused
                                    },
                                    '& .MuiInputLabel-outlined.Mui-focused': {
                                        color: '#185a7d', // Change label color when focused
                                    },
                                }}
                                InputLabelProps={{
                                    style: {
                                        color: '#000', // Set initial label color
                                    },
                                }}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                sx={{
                                    backgroundColor: '#1d5e85',
                                    ml: 2,
                                    color: '#fff', // Couleur du texte du bouton
                                    '&:hover': {
                                        backgroundColor: '#1d5e85', // Couleur de fond du bouton au survol
                                    },
                                }}
                            >
                                Subscribe
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Container>
        </Box>
    );
};

export default Newsletter;






