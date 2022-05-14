import React from 'react';

const Review = ({ review }) => {
    const { img, name, description, location } = review
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{description}</p>

                <div className="flex items-center mt-4">
                    <div className="avatar">
                        <div className="w-20 rounded-full ring ring-secondary ring-offset-base-100 mr-4">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h5>{name}</h5>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;