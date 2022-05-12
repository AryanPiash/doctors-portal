import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';


const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            img: people1,
            name: 'Winson Herry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 2,
            img: people2,
            name: 'Zulfiker Dwon',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 3,
            img: people3,
            name: 'Lisa Martinez',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
    ]
    return (
        <div className='my-12'>
            <div className='flex justify-between items-center px-8'>
                <div>
                    <h3 className='text-secondary text-xl font-semibold'>Testimonial</h3>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote}alt="" />
                </div>
            </div>
                 {/* Reviews */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-8 pt-20'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
            
        </div>
    );
};

export default Testimonial;