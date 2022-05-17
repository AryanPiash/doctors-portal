import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailavleAppointments from './AvailavleAppointments';
import Footer from '../Shared/Footer'

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner
                date={date}
                setDate={setDate}
            ></AppointmentBanner>
            <AvailavleAppointments
                date={date}
            ></AvailavleAppointments>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;