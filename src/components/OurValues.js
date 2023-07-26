import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const OurValues = () => {
    return (
        <Box sx={{
            py: '12vh',
            textAlign: 'center'
        }}>
            <Container>
                <Typography variant='h1' sx={{ color: 'primary.main' }}>
                    This is how we're different
                </Typography>
                <Box sx={{ border: '4px double #1d5e85', p: 4, height: '50vh', marginTop: 3 }}>

                </Box>
            </Container >
        </Box >
    );
};

export default OurValues;