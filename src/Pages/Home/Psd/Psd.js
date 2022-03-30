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
                {/* <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: '-110px' }}
                        src={} alt="" />doctor
                </Grid> */}
                <Grid item xs={12} md={12} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center'
                }}>
                    <Box>
                        <Typography variant="h6" sx={{ mb: 5 }} style={{ color: '#5CE7ED' }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" style={{ color: 'white' }}>
                            Where Will You Go Next
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facere totam aliquam praesentium vel. Amet veniam odio vero doloremque laborum.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Psd;