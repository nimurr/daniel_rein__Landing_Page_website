import React from 'react';

const OurMission = () => {
    return (
        <div className='container mx-auto rounded-3xl my-10 lg:my-20 min-h-[60vh] w-full bg-[url("/Images/OurMission/OurMission.png")] bg-no-repeat bg-center bg-cover flex items-center justify-center'>
            <div className='space-y-4 clear-start w-4/5 text-center'>
                <h3 className='text-5xl font-bold text-primary'>Our Mission</h3>
                <div className='bg-[url("/Images/OurMission/bg-1.png")] min-h-14 flex items-center justify-center px-2 bg-no-repeat bg-center bg-cover'>
                    Transform your business operations with AI-powered solutions that deliver measurableresults.
                </div>
                <div className='bg-[url("/Images/OurMission/bg-2.png")] min-h-14 flex items-center justify-center px-2 bg-no-repeat bg-center bg-cover'>
                    Our platform harnesses the power of AI to streamline processes and optimize outcomes
                </div>
            </div>
        </div>
    );
}

export default OurMission;
