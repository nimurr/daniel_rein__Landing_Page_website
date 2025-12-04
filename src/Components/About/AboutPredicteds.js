import React from 'react';

const AboutPredicteds = () => {
    return (
        <div className='container mx-auto'>
            <div className='bg-[#0e3b588f] rounded-[40px] backdrop-blur-sm  w-full'>
                <img className='absolute animate-pulse lg:block hidden left-0 top-10 w-60' src="/Images/Home/lighting-effect.png" alt="" />
                <img className='absolute animate-pulse lg:block hidden right-0 top-10 w-60' src="/Images/Home/lighting-effect.png" alt="" />
                <div className='flex items-center text-white gap-5 p-8 flex-wrap justify-around'>
                    <div className='text-center min-w-52'>
                        <h2 className='text-4xl font-semibold'>50+</h2>
                        <p className='my-1'>Successful AI Deployments</p>
                        <img className='w-12 mx-auto' src="/Images/Home/icons/icons-1.png" alt="" />
                    </div>
                    <div className='text-center min-w-52'>
                        <h2 className='text-4xl font-semibold'>85%</h2>
                        <p className='my-1'>Client Satisfaction Rate</p>
                        <img className='w-12 mx-auto' src="/Images/Home/icons/icons-1.png" alt="" />
                    </div>
                    <div className='text-center min-w-52'>
                        <h2 className='text-4xl font-semibold'>24/7</h2>
                        <p className='my-1'>Support & Monitoring</p>
                        <img className='w-12 mx-auto' src="/Images/Home/icons/icons-1.png" alt="" />
                    </div>
                    <div className='text-center min-w-52'>
                        <h2 className='text-4xl font-semibold'>24/7</h2>
                        <p className='my-1'>Support & Monitoring</p>
                        <img className='w-12 mx-auto' src="/Images/Home/icons/icons-1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPredicteds;
