import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            img: fluoride,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            _id: 2,
            img: cavity,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            _id: 3,
            img: whitening,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
    ]

    return (
        <div className='py-20 px-12'>
            <div className='text-center'>
                <h3 className='text-secondary font-bold uppercase text-xl'>Our Services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8'>
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

export default Services;