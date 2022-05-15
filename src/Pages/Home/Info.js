import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5 px-12    '>
            <InfoCard
                cardTitle='Opening Hours' description='Brooklyn, NY 10036, United States' img={clock} cardBg='bg-gradient-to-r from-secondary to-primary'></InfoCard>
            <InfoCard
                cardTitle='Visit our location' description='Brooklyn, NY 10036, United States' img={marker} cardBg='bg-[#3A4256]'></InfoCard>
            <InfoCard
                cardTitle='Contact us now' description='+000 123 456789' img={phone} cardBg='bg-gradient-to-r from-secondary to-primary'></InfoCard>
        </div>
    );
};

export default Info;