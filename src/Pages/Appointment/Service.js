import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl text-secondary text-center">{name}</h2>
                <p className='text-xs uppercase font-semibold'>{slots.length > 0
                ?<span>{slots[0]}</span>
                :<span>Try Another Day</span>
                }</p>
                <p className='text-xs uppercase font-semibold'>{slots.length} {slots.length > 0 ? 'Spaces' : 'Space'} Available</p>

                <div className="card-actions justify-center mt-4">
                    <label disabled={slots.length === 0}
                    onClick={() => setTreatment(service)}
                     htmlFor="booking-modal" className="btn btn-secondary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                    
                </div>
            </div>
        </div>
    );
};

export default Service;