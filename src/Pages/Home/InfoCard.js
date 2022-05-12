import React from 'react';

const InfoCard = ({cardTitle,description,img,cardBg}) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${cardBg}`}>
            <figure className='pl-4'>
                <img src={img} alt="Album"/>
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;