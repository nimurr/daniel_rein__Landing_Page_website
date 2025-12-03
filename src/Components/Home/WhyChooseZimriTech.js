import React from 'react';

const WhyChooseZimriTech = () => {
    return (
        <div className='container mx-auto'>
            <div className='text-center py-10'>
                <h2 className='text-5xl mb-3 text-primary font-semibold'>Why Choose ZimriTech</h2>
                <p>Our proven 4-step process ensures your AI transformation is seamless and
                    successful.</p>
            </div>
            <div className='relative w-full'>
                <img className='mx-auto w-full' src="/Images/WhyChooseZimriTech/Lines.png" alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-20 mb-5'>
                <div className='w-auto mt-20 space-y-20'>
                    <div className='flex items-start gap-5'>
                        <img src="/Images/WhyChooseZimriTech/aa.png" alt="" />
                        <div>
                            <h2 className='text-3xl font-semibold text-primary mb-2'>Proven Experience</h2>
                            <p>Years of expertise in AI implementation
                                across diverse industries.</p>
                        </div>
                        <img className='textMoveAnimate' src="/Images/WhyChooseZimriTech/1.png" alt="" />
                    </div>
                    <div className='flex items-start gap-5'>
                        <img src="/Images/WhyChooseZimriTech/bb.png" alt="" />
                        <div>
                            <h2 className='text-3xl font-semibold text-primary mb-2'>Scalability</h2>
                            <p>AI solutions that grow with your
                                business and adapt to changing
                                demands.</p>
                        </div>
                        <img className='textMoveAnimate' src="/Images/WhyChooseZimriTech/2.png" alt="" />
                    </div>
                </div>
                <div className='robotImageUse  '>
                    <img className='lg:w-2/3 animation_image  mx-auto -mt-10' src="/Images/WhyChooseZimriTech/robot.png" alt="" />
                </div>
                <div className='w-auto lg:mt-20 space-y-20'>
                    <div className='flex items-start gap-5'>
                        <img src="/Images/WhyChooseZimriTech/cc.png" alt="" />
                        <div>
                            <h2 className='text-3xl font-semibold text-primary mb-2'>Custom Solutions</h2>
                            <p>Tailored AI solutions designed
                                specifically for your business needs.</p>
                        </div>
                        <img className='textMoveAnimate' src="/Images/WhyChooseZimriTech/3.png" alt="" />
                    </div>
                    <div className='flex items-start gap-5'>
                        <img src="/Images/WhyChooseZimriTech/dd.png" alt="" />
                        <div>
                            <h2 className='text-3xl font-semibold text-primary mb-2'>24/7 Support</h2>
                            <p>Round-the-clock monitoring and
                                support for all your AI implementations.</p>
                        </div>
                        <img className='textMoveAnimate' src="/Images/WhyChooseZimriTech/4.png" alt="" />
                    </div>
                </div>
            </div>


        </div>
    );
}

export default WhyChooseZimriTech;
