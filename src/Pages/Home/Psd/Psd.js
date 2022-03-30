import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import aus from '../../../images/aus.jpg';
import bg from '../../../images/appointment-bg.png'
import { Card, CardActionArea, CardContent, CardMedia, Container, Divider, InputBase, Paper, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';


const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',

}

const Psd = () => {
    return (
        <>
            <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#C3CBD3', fontSize: 20, textAlign: 'left', paddingLeft: '16px' }}>
                            travelly
                        </Typography>
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={2}>

                    <Grid item xs={12} md={12} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        marginTop: '90px',
                        marginBottom: '130px'
                    }}>
                        <Box>

                            <Typography variant="h4" style={{ color: 'white', marginBottom: '16px' }}>
                                Where Will You Go Next?
                            </Typography>

                            <Paper style={{ display: 'flex', alignItems: 'center', width: 300, marginLeft: '35px' }}>
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Search" />

                                <Button type="submit" sx={{ backgroundColor: '#ED6442', p: '5px', borderRadius: '1px 3px 3px 1px', color: 'black' }}>Go</Button>





                            </Paper>






                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box style={{ marginTop: '50px', backgroundColor: '#E8E5E4', paddingTop: '15px ', paddingBottom: '50px' }}>
                <Container>
                    <Box style={{ textAlign: 'left', margin: '20px 0' }}>
                        <Typography variant="h6" component="div" sx={{ fontSize: 18, fontWeight: 'bold' }}>
                            Top Destination
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ fontSize: 13, color: 'gray' }}>
                            some of Top Destination  for you
                        </Typography>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={3}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={aus}
                                        alt="green iguana"
                                    />
                                    <CardContent sx={{ textAlign: 'left' }}>
                                        <Typography variant="h6" component="div">
                                            Amazing Australia
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere eos aliquid sint natus obcaecati enim? Voluptatum illum voluptate iste ducimus reiciendis obcaecati, harum necessitatibus hic porro eum?
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>

                            </Card>

                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={aus}
                                        alt="green iguana"
                                    />
                                    <CardContent sx={{ textAlign: 'left' }}>
                                        <Typography variant="h6" component="div">
                                            Amazing Australia
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere eos aliquid sint natus obcaecati enim? Voluptatum illum voluptate iste ducimus reiciendis obcaecati, harum necessitatibus hic porro eum?
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>

                            </Card>

                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={aus}
                                        alt="green iguana"
                                    />
                                    <CardContent sx={{ textAlign: 'left' }}>
                                        <Typography variant="h6" component="div">
                                            Amazing Australia
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere eos aliquid sint natus obcaecati enim? Voluptatum illum voluptate iste ducimus reiciendis obcaecati, harum necessitatibus hic porro eum?
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>

                            </Card>

                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={aus}
                                        alt="green iguana"
                                    />
                                    <CardContent sx={{ textAlign: 'left' }}>
                                        <Typography variant="h6" component="div">
                                            Amazing Australia
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere eos aliquid sint natus obcaecati enim? Voluptatum illum voluptate iste ducimus reiciendis obcaecati, harum necessitatibus hic porro eum?
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>

                            </Card>

                        </Grid>


                    </Grid>
                </Container>

            </Box>
            <Box>
                <Container >
                    <Typography sx={{ fontSize: '25px', textAlign: 'left', my: 2 }}>Before You Leave</Typography>
                    <Grid container spacing={2} style={{ padding: '10px' }} >

                        <Grid item xs={6} md={4} sx={{ textAlign: 'left', }}>
                            <Typography style={{ fontSize: '20px', color: 'black', fontWeight: 'bold', my: 2 }}>
                                Visa
                            </Typography>
                            <Typography variant="body2" style={{ fontSize: 13, color: 'gray' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={4} sx={{ textAlign: 'left', p: 5 }}>
                            <Typography style={{ fontSize: '20px', color: 'black', fontWeight: 'bold', my: 2 }}>
                                Visa
                            </Typography>
                            <Typography variant="body2" style={{ fontSize: 13, color: 'gray' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={4} sx={{ textAlign: 'left', p: 5 }}>
                            <Typography style={{ fontSize: '20px', color: 'black', fontWeight: 'bold', my: 2 }}>
                                Visa
                            </Typography>
                            <Typography variant="body2" style={{ fontSize: 13, color: 'gray' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.
                            </Typography>
                        </Grid>



                    </Grid>
                </Container>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                
                <Grid container spacing={2}>

                    <Grid item xs={12} md={12} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        marginTop: '90px',
                        marginBottom: '130px'
                    }}>
                        <Box>

                            <Typography variant="h4" style={{ color: 'black', marginBottom: '14px' }}>
                               Get Hottest Offer To Your Inbox
                            </Typography>

                            <Paper style={{ display: 'flex', alignItems: 'center', width: 300, marginLeft: '55px',backgroundColor:'#EAD3D2 ' }}>
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Search" />

                                <Button type="submit" sx={{ backgroundColor: '#5B89FC ', p: '5px', borderRadius: '1px 3px 3px 1px', color: 'black' }}>Subscribe</Button>





                            </Paper>






                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>

    );
};

export default Psd;