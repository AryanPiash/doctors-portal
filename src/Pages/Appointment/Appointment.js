import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailavleAppointments from './AvailavleAppointments';

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
        </div>
    );
};

export default Appointment;