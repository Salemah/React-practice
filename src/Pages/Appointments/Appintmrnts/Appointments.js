import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Appointmentsheader from '../AppointmentsHeader/Appointmentsheader';
import Avaialbeapartments from '../AVailabeAppointments/Avaialbeapartments';
const Appointments = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <Appointmentsheader date={date} setDate={setDate}></Appointmentsheader>
            <Avaialbeapartments date={date}></Avaialbeapartments>
        </div>
    );
};

export default Appointments;