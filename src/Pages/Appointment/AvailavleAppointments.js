import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvailavleAppointments = ({date}) => {
    const [services, setServices] = useState([])
    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <p className='text-xl text-secondary text-center'>Available Appointments on {format(date,'PP')}</p>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 p-12'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default AvailavleAppointments;