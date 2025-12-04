import React from 'react';
import { WiStars } from 'react-icons/wi';

const AboutWhyChooseUs = () => {
    return (
        <div className='container mx-auto rounded-3xl my-10 lg:my-20 min-h-[80vh] w-full bg-[url("/Images/about/section_bd1.png")] bg-no-repeat bg-center bg-cover flex items-center justify-center'>
            <div className='space-y-4 clear-start w-4/5 text-center py-10 lg:py-5'>
                <div className='pb-3'>
                    <h3 className='text-5xl font-bold text-primary'>Why Choose ZimriTech?</h3>
                    <p className='my-5'>We're not just another tech company. We're your dedicated automation partners, committed to your success every step of the way.</p>
                </div>
                <div className='bg-[url("/Images/OurMission/bg-2.png")] min-h-12 flex items-center justify-center px-2 bg-no-repeat bg-center bg-cover'>
                    Personalized automation solutions tailored to your business
                </div>
                <div className='bg-[url("/Images/OurMission/bg-2.png")] min-h-12 flex items-center justify-center px-2 bg-no-repeat bg-center bg-cover'>
                    Dedicated support team that understands your industry
                </div>
                <div className='bg-[url("/Images/OurMission/bg-2.png")] min-h-12 flex items-center justify-center px-2 bg-no-repeat bg-center bg-cover'>
                    Proven track record of successful implementations
                </div>
                <div className='bg-[url("/Images/OurMission/bg-2.png")] min-h-12 flex items-center justify-center px-2 bg-no-repeat bg-center bg-cover'>
                    Continuous optimization and improvement
                </div>
                <div className='bg-[url("/Images/OurMission/bg-2.png")] min-h-12 flex items-center justify-center px-2 bg-no-repeat bg-center bg-cover'>
                    Transparent pricing with no hidden costs
                </div>
                <div className='bg-[url("/Images/OurMission/bg-2.png")] min-h-12 flex items-center justify-center px-2 bg-no-repeat bg-center bg-cover'>
                    24/7 monitoring and maintenance
                </div>
                <div className='flex items-center justify-center pt-5 flex-wrap gap-5'>
                    <button className='sm:py-3  flex items-center gap-2 justify-center px-8 rounded-full border bg-primary border-primary text-white'><WiStars className='text-2xl' /> Get Started <img src="/Images/Home/rignt-arrow.png" alt="" /></button>
                    <button className='sm:py-5 py-2 px-8 rounded-full border flex items-center gap-3 justify-center border-primary text-primary'>Learn More
                        <img src="/Images/Home/right-arrow-colored.png" alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AboutWhyChooseUs;
