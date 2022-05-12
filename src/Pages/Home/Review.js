import React from 'react';

const Review = ({ review }) => {
    const { img, name, description, location } = review
    return (
        <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
                <p>{description}</p>

                <div class="flex items-center mt-4">
                    <div class="avatar">
                        <div class="w-20 rounded-full ring ring-secondary ring-offset-base-100 mr-4">
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