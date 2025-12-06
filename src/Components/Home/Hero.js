import React from 'react';
import Header from '../Common/Header';
import { WiStars } from "react-icons/wi";


const Hero = () => {
    return (
        <section id='home' className='container mx-auto bg-gradient-to-l from-[#c7d2dde0] to-[#e4e9ee8f] lg:h-[95vh] h-auto relative overflow-hidden rounded-[50px] mt-5'>
            <Header />
            <img className='absolute lg:block hidden right-0 bottom-20 animatePlusImage animate-pulse w-1/2' src="/Images/Home/animated_sidebarImage.png" alt="" />

            <div className='flex items-start gap-20 lg:gap-32 justify-end h-full flex-col z-10'>
                <div className='lg:p-10 p-5 '>
                    <h1 className='text-primary text-3xl lg:text-6xl font-semibold'>Transform Your Business <br />
                        with Intelligent AI Automation</h1>
                    <p className='text-gray-500 my-5 text-sm'>ZimriTech builds custom AI chatbots, receptionists, and workflow automations to <br />
                        save you time and scale your business.</p>
                    <div className='flex items-center flex-wrap gap-5'>
                        <button className='sm:py-3  flex items-center gap-2 justify-center px-8 rounded-full border bg-primary border-primary text-white'><WiStars className='text-2xl' /> Get Started <img src="/Images/Home/rignt-arrow.png" alt="" /></button>
                        <button className='sm:py-5 py-2 px-8 rounded-full border flex items-center gap-3 justify-center border-primary text-primary'>Learn More
                            <img src="/Images/Home/right-arrow-colored.png" alt="" />
                        </button>
                    </div>
                </div>
                <div className='bg-[#0e3b588f] rounded-[40px] backdrop-blur-sm lg:min-h-72 w-full'>
                    <img className='absolute animate-pulse lg:block hidden left-0 top-0 w-72' src="/Images/Home/lighting-effect.png" alt="" />
                    <img className='absolute animate-pulse lg:block hidden right-0 top-0 w-72' src="/Images/Home/lighting-effect.png" alt="" />
                    <div className='flex items-center text-white gap-5 p-8 flex-wrap justify-around'>
                        <div className='text-center min-w-52'>
                            <h2 className='text-4xl font-semibold'>50+</h2>
                            <p className='my-1'>AI Solutions Deployed</p>
                            <img className='w-12 mx-auto' src="/Images/Home/icons/icons-1.png" alt="" />
                        </div>
                        <div className='text-center min-w-52'>
                            <h2 className='text-4xl font-semibold'>85%</h2>
                            <p className='my-1'>Time Saved</p>
                            <img className='w-12 mx-auto' src="/Images/Home/icons/icons-1.png" alt="" />
                        </div>
                        <div className='text-center min-w-52'>
                            <h2 className='text-4xl font-semibold'>24/7</h2>
                            <p className='my-1'>AI Support</p>
                            <img className='w-12 mx-auto' src="/Images/Home/icons/icons-1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
