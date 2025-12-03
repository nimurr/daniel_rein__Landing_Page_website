import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const Contactus = () => {
    return (
        <section id='contact' className='container mx-auto grid lg:grid-cols-2 gap-10 lg:my-20 my-10'>
            <div>
                <h2 className='text-primary text-[100px] leading-[1.1] font-bold'>Let’s get <br />
                    in touch</h2>
                <h3 className='text-2xl font-semibold my-5'>Contact Information</h3>
                <p className=''>We're here to help you succeed with AI. Reach out to us through any of these
                    channels, and we'll get back to you promptly.</p>
                <span className='py-2 px-4 bg-primary rounded text-white block my-3 '>Don't be afraid to say hello with us</span>
                <div className='mt-10'>
                    <h3 className='text-2xl font-semibold text-primary mb-3'>Email</h3>
                    <span className='flex items-center font-medium gap-3 text-primary'><MdEmail className='text-xl text-primary' /> Support@zimritech.com.au</span>
                    <p className='text-gray-500 mt-2 text-sm'>We respond within 24 hours</p>
                </div>
                <hr className='my-5' />
                <div className=''>
                    <h3 className='text-2xl font-semibold text-primary mb-3'>Office</h3>
                    <span className='flex items-center font-medium gap-3 text-primary'><FaLocationDot className='text-xl text-primary' /> Melbourne, Victoria, Australia</span>
                    <p className='text-gray-500 mt-2 text-sm'>Remote consultations available</p>
                </div>
                <hr className='my-5' />
                <div className=''>
                    <h3 className='text-2xl font-semibold text-primary mb-3'>Response Time</h3>
                    <span className='flex items-center font-medium gap-3 text-primary'><FaLocationDot className='text-xl text-primary' /> 24 hours</span>
                    <p className='text-gray-500 mt-2 text-sm'>Average response time</p>
                </div>

            </div>
            <div>
                <form className='space-y-8 bg-[#f2f2f7] p-10 rounded-2xl' action="">
                    <h2 className='text-2xl font-semibold'>Send us a message</h2>
                    <input className='w-full outline-none  border-b-2 border-gray-400 p-3 mb-3' type="text" placeholder='Name' />
                    <input className='w-full outline-none  border-b-2 border-gray-400 p-3 mb-3' type="email" placeholder='Email' />
                    <input className='w-full outline-none  border-b-2 border-gray-400 p-3 mb-3' type="number" placeholder='Phone Number' />
                    <input className='w-full outline-none  border-b-2 border-gray-400 p-3 mb-3' type="text" placeholder='Company Name' />
                    <textarea className='w-full outline-none  border-b-2 border-gray-400 p-3 mb-3' placeholder='Tell us about your project and AI needs...'></textarea>
                    <button className='bg-primary w-full rounded-lg outline-none  text-white py-3 px-5'>Send Message</button>

                </form>
            </div>
        </section>
    );
}

export default Contactus;
