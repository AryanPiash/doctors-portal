import React from 'react';
import appointment from '../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <div className="text-center py-12 mb-12 mt-36" style={{background: `url(${appointment})`}}>
            <h4 className='text-secondary'>Contact Us</h4>
            <h2 className='text-white text-2xl'>Stay connected with us</h2>
            <div className="card flex-shrink-0 w-full max-w-sm mx-auto">
                    <div className="card-body">
                        <div className="form-control mb-2">
                            <input type="text" placeholder="Email Address" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Subject" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-2">
                            <textarea className='rounded-lg p-3 outline-0 ' name="message" id="" cols="10" rows="4" placeholder='Your Message'></textarea>
                        </div>
                        <div className="mx-auto mt-2">
                            <button className="btn btn-primary px-8 bg-gradient-to-r from-secondary to-primary text-white">Login</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ContactUs;