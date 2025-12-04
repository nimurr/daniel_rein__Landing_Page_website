import React from 'react';
import Header from '../Common/Header';

const AboutHero = () => {
    return (
        <div className='container my-10 mx-auto bg-gradient-to-l rounded-3xl from-[#c7d2dde0] to-[#e4e9ee8f] '>
            <Header />
            <div className='grid grid-cols-2  gap-10 p-5'>
                <div>

                    <div className='main_text_animation'>
                        <h2 className='clip-text text-primary text-[100px] leading-[1.1] font-bold'>ABOUT us ZimriTech</h2>
                    </div>

                    <p className='text-gray-700'>We're passionate about transforming businesses through intelligent automation, putting your success at the heart of everything we do.</p>

                    <h3 className='mt-10 text-primary text-2xl font-semibold' >Our Story</h3>
                    <span className='my-4 text-gray-700 block'>Founded with a vision to revolutionize how businesses operate, ZimriTech emerged from a simple belief: technology should serve your business, not the other way around.</span>
                    <span className='my-4 text-gray-700 block'>We started by asking ourselves: "What if every business could have the power of enterprise-level automation without the complexity?" This question became our mission, and today, we're proud to be the automation partner that puts your success first.</span>

                </div>
                <div className=' w-full min-h-[70vh] rounded-3xl bg-[url("/Images/about/robot_about.png")] bg-no-repeat bg-center bg-cover relative'>
                    <img
                        className='absolute animate-rotate-clockwise lg:block hidden -left-20 top-0 xl:w-48 w-10 bottom-0'
                        src="/Images/WhatWeOffer/Union.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutHero;
