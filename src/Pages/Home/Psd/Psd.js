import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Divider, InputBase, Paper, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';


const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',

}

const Psd = () => {
    return (
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
                    marginTop:'90px',
                    marginBottom:'130px'
                }}>
                    <Box>

                        <Typography variant="h4" style={{ color: 'white', marginBottom: '16px' }}>
                            Where Will You Go Next?
                        </Typography>

                        <Paper style={{ display: 'flex', alignItems: 'center', width: 300,marginLeft:'35px' }}>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search" />

                            <Button type="submit" sx={{ backgroundColor: '#ED6442', p: '5px', borderRadius: '1px 3px 3px 1px',color:'black' }}>Go</Button>





                        </Paper>






                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Psd;