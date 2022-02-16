import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Calender from '../../Shared/Calender/Calender';
import chair from '../../../images/chair.png';
import { Container } from '@mui/material';
const Appointmentsheader = ({date,setDate}) => {
    return (
<Container>
<Box sx={{ flexGrow: 1,my:4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Calender date={date} setDate={setDate} ></Calender>
        </Grid>
        <Grid item xs={12} md={6}>
        <img src={chair} style={{ width: '100%' }} alt="" />
        </Grid>
        
      </Grid>
    </Box>
</Container>
    );
};

export default Appointmentsheader;