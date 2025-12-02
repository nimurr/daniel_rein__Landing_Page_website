import React from 'react';

const WhatWeOffer = () => {
    return (
        <section id='services' className='my-10 lg:my-20 relative overflow-hidden'>
            <img
                className='absolute animate-rotate-clockwise -right-20 top-0 xl:w-48 w-10 bottom-0'
                src="/Images/WhatWeOffer/Union.png"
                alt=""
            />

            <div className='container mx-auto'>
                <div className='text-center py-10'>
                    <h2 className='text-5xl mb-3 text-primary font-semibold'>What We Offer</h2>
                    <p>Comprehensive AI solutions designed to transform your business operations and drive growth.</p>
                </div>
                <div className='flex justify-between flex-wrap gap-5'>
                    <div className='border-2 duration-500 hover:shadow-[0px_0px_20px_#0e3b58] w-full xl:w-[60%] border-r-4 border-primary p-5 rounded-3xl'>
                        <div className='flex items-start justify-between'>
                            <div>
                                <h2 className='text-2xl text-primary mb-2 font-semibold'>AI Chatbots</h2>
                                <p>Intelligent conversational agents that handle customer inquiries 24/7 with natural language processing</p>
                            </div>
                            <div className='text-5xl text-primary font-semibold'>
                                01
                            </div>
                        </div>
                        <div className='flex items-end justify-between flex-wrap'>
                            <div className='ml-5 mt-5 space-y-3'>
                                <li>Process Optimization</li>
                                <li>Task Automation</li>
                                <li>Data Processing</li>
                                <li>Custom Workflows</li>
                            </div>
                            <div>
                                <button className='py-3 duration-500 group hover:bg-primary hover:text-white px-8 rounded-full border flex items-center gap-3 justify-center border-primary h-12 text-primary font-semibold'>Learn More
                                    <img className='group-hover:hidden' src="/Images/Home/right-arrow-colored.png" alt="" />
                                    <img className='group-hover:block hidden w-10' src="/Images/Home/rignt-arrow.png" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='border-2 duration-500 hover:shadow-[0px_0px_20px_#0e3b58] w-full xl:w-[38%] border-r-4 border-primary p-5 rounded-3xl'>
                        <div className='flex items-start justify-between'>
                            <div>
                                <h2 className='text-2xl text-primary mb-2 font-semibold'>AI Chatbots</h2>
                                <p>Virtual receptionists that manage calls, schedule appointments, and provide instant responses.</p>
                            </div>
                            <div className='text-5xl text-primary font-semibold'>
                                02
                            </div>
                        </div>
                        <div className='flex items-end justify-between flex-wrap'>
                            <div className='ml-5 mt-5 space-y-3'>
                                <li>Call Management</li>
                                <li>Appointment Scheduling</li>
                                <li>Call Routing</li>
                                <li>Voice Recognition</li>
                            </div>
                            <div>
                                <button className='py-3 duration-500 group hover:bg-primary hover:text-white px-8 rounded-full border flex items-center gap-3 justify-center border-primary h-12 text-primary font-semibold'>Learn More
                                    <img className='group-hover:hidden' src="/Images/Home/right-arrow-colored.png" alt="" />
                                    <img className='group-hover:block hidden w-10' src="/Images/Home/rignt-arrow.png" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='border-2 duration-500 hover:shadow-[0px_0px_20px_#0e3b58] w-full xl:w-[38%] border-r-4 border-primary p-5 rounded-3xl'>
                        <div className='flex items-start justify-between'>
                            <div>
                                <h2 className='text-2xl text-primary mb-2 font-semibold'>Workflow Automations</h2>
                                <p>Streamline business processes with intelligent automation that adapts to your needs.</p>
                            </div>
                            <div className='text-5xl text-primary font-semibold'>
                                03
                            </div>
                        </div>
                        <div className='flex items-end justify-between flex-wrap'>
                            <div className='ml-5 mt-5 space-y-3'>
                                <li>Process Optimization</li>
                                <li>Task Automation</li>
                                <li>Data Processing</li>
                                <li>Custom Workflows</li>
                            </div>
                            <div>
                                <button className='py-3 duration-500 group hover:bg-primary hover:text-white px-8 rounded-full border flex items-center gap-3 justify-center border-primary h-12 text-primary font-semibold'>Learn More
                                    <img className='group-hover:hidden' src="/Images/Home/right-arrow-colored.png" alt="" />
                                    <img className='group-hover:block hidden w-10' src="/Images/Home/rignt-arrow.png" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='border-2 duration-500 hover:shadow-[0px_0px_20px_#0e3b58] w-full xl:w-[60%] border-r-4 border-primary p-5 rounded-3xl'>
                        <div className='flex items-start justify-between'>
                            <div>
                                <h2 className='text-2xl text-primary mb-2 font-semibold'>Custom Dashboards</h2>
                                <p>Real-time analytics and monitoring dashboards tailored to track your AI solution performance.</p>
                            </div>
                            <div className='text-5xl text-primary font-semibold'>
                                04
                            </div>
                        </div>
                        <div className='flex items-end justify-between flex-wrap'>
                            <div className='ml-5 mt-5 space-y-3'>
                                <li>Real-time Analytics</li>
                                <li>Performance Metrics</li>
                                <li>Custom Reports</li>
                                <li>Data Visualization</li>
                            </div>
                            <div>
                                <button className='py-3 duration-500 group hover:bg-primary hover:text-white px-8 rounded-full border flex items-center gap-3 justify-center border-primary h-12 text-primary font-semibold'>Learn More
                                    <img className='group-hover:hidden' src="/Images/Home/right-arrow-colored.png" alt="" />
                                    <img className='group-hover:block hidden w-10' src="/Images/Home/rignt-arrow.png" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhatWeOffer;
