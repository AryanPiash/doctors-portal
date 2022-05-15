import React from 'react';

const Service = ({ service }) => {
    const { name, slots } = service;

    return (
        <div class="card bg-base-100 shadow-xl">
            <div class="card-body text-center">
                <h2 class="text-xl text-secondary text-center">{name}</h2>
                <p className='text-xs uppercase font-semibold'>{slots.length > 0
                ?<span>{slots[0]}</span>
                :<span>Try Another Day</span>
                }</p>
                <p className='text-xs uppercase font-semibold'>{slots.length} {slots.length > 0 ? 'Spaces' : 'Space'} Available</p>

                <div class="card-actions justify-center mt-4">
                    <button disabled={slots.length === 0} className="btn btn-secondary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;