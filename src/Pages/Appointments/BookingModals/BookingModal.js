import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Alert, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({booking,setBookingSuccess,date,openBooking,handleBookingClose}) => {
  const { name, time } = booking; 
  const [bookingInfo, setBookingInfo] = React.useState('');
  const handleOnChange = e => {
    const feild = e.target.name;
    const value = e.target.value;
    const newaptdata = {...bookingInfo};
    newaptdata[feild]  = value;
    setBookingInfo(newaptdata);
   console.log(newaptdata);

   
}
const handleBookingSubmit = e => {
  e.preventDefault();
  alert("success");
  handleBookingClose()
  ;
}
  return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBooking}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue="name"
                            size="small"
                            name="patientName"
                            onBlur={handleOnChange}
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="email"
                            defaultValue="{user?.email}"
                            size="small"
                            onBlur={handleOnChange}
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="phone"
                            defaultValue="Phone Number"
                            size="small"
                            onBlur={handleOnChange}
                        />
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                        />
                        <Button type="submit" variant="contained">Submit</Button>
                    </form>
          </Box>
        </Fade>
      </Modal>
    );
};

export default BookingModal;