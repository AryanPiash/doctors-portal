import React from 'react';
import appointment from '../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <div class="text-center py-12 mb-12 mt-36" style={{background: `url(${appointment})`}}>
            <h4 className='text-secondary'>Contact Us</h4>
            <h2 className='text-white text-2xl'>Stay connected with us</h2>
            <div class="card flex-shrink-0 w-full max-w-sm mx-auto">
                    <div class="card-body">
                        <div class="form-control mb-2">
                            <input type="text" placeholder="Email Address" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <input type="text" placeholder="Subject" class="input input-bordered" />
                        </div>
                        <div class="form-control mt-2">
                            <textarea className='rounded-lg p-3 outline-0 ' name="message" id="" cols="10" rows="4" placeholder='Your Message'></textarea>
                        </div>
                        <div class="mx-auto mt-2">
                            <button class="btn btn-primary px-8 bg-gradient-to-r from-secondary to-primary text-white">Login</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ContactUs;