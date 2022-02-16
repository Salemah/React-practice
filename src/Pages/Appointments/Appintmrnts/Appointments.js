import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Appointmentsheader from '../AppointmentsHeader/Appointmentsheader';
const Appointments = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <Appointmentsheader date={date} setDate={setDate}></Appointmentsheader>
        </div>
    );
};

export default Appointments;