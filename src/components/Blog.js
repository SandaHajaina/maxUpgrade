import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container, Grid } from '@mui/material';

const Blog = () => {
    return (
        <Box sx={{ py: '12vh' }}>
            <Container>
                <Typography variant='h2' sx={{
                    color: 'primary.main',
                    textAlign: 'center',
                    paddingBottom: '30px'
                }}>
                    Recent articles</Typography>
                <Grid container sx={{
                    textAlign: '-webkit-center'
                }} spacing={2}>
                    {/* Trois colonnes pour les écrans larges */}
                    <Grid item xs={12} md={4}>
                        {/* Contenu de la première colonne */}
                        <Card sx={{ maxWidth: 345, textAlign: 'left' }}>
                            <CardMedia
                                sx={{ height: 240 }}
                                image="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        {/* Contenu de la deuxième colonne */}
                        <Card sx={{ maxWidth: 345, textAlign: 'left' }}>
                            <CardMedia
                                sx={{ height: 240 }}
                                image="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        {/* Contenu de la troisième colonne */}
                        <Card sx={{ maxWidth: 345, textAlign: 'left' }}>
                            <CardMedia
                                sx={{ height: 240 }}
                                image="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Blog;