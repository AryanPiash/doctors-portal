import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';
import BookingModal from './BookingModal';

const AvailavleAppointments = ({date}) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState({})

    useEffect( () => {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='my-20'>
            <p className='text-xl text-secondary text-center'>Available Appointments on {format(date,'PP')}</p>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 p-12'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal
            key={treatment._id} 
            treatment={treatment} 
            date={date}
            setTreatment={setTreatment}
            ></BookingModal>}
        </div>
    );
};

export default AvailavleAppointments;