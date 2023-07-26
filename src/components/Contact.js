import React, { useState } from 'react';
import { TextField, Button, Container, Stack, Box, Grid, Typography } from '@mui/material';

const Contact = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [message, setMessage] = useState('')

    const placeholderStyle = {
        // Ajoutez ici les styles CSS que vous souhaitez appliquer au placeholder
        color: 'white'
    };

    function handleSubmit(event) {
        event.preventDefault();
        console.log(firstName, lastName, email, message, phoneNumber)
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
                    <Typography variant='h2' color={'#fff'} textAlign={'center'} paddingBottom={6}>Contact us</Typography>
                    <form onSubmit={handleSubmit} action="">
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    type="text"
                                    variant="outlined"
                                    color="secondary"
                                    label="First Name"
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
                                    label="Last Name"
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
                                    label="Email"
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
                                    label="Phone number"
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
                                    label="Message"
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
                                    Send
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Container >
        </Box >
    )
};

export default Contact;