import React from 'react';

const BusinessBenefits = () => {
    return (
        <section id='benefits' className='container mx-auto lg:my-20 my-10'>
            <div className='text-center py-10'>
                <h2 className='text-5xl mb-3 text-primary font-semibold'>Business Benefits</h2>
                <p>Transform your business operations with AI-powered solutions that deliver measurable
                    results.</p>
            </div>
            <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-5'>
                <div className='border-2 border-primary p-5 rounded-lg'>
                    <img className=' w-12' src="/Images/BusinessBenefits/1.png" alt="" />
                    <h2 className='my-2 text-2xl font-semibold text-primary'>Save Time</h2>
                    <p>Up to 40 hours saved per week</p>
                    <span className='mt-3 text-gray-500'>Automate repetitive tasks and free up your team to focus on strategic initiatives.</span>
                    <img className='my-5 w-full' src="/Images/BusinessBenefits/Line1.png" alt="" />
                    <ul className='space-y-3'>
                        <li className='flex items-center gap-3'><img className='w-5' src="/Images/BusinessBenefits/star.png" alt="" />Automated customer support</li>
                        <li className='flex items-center gap-3'><img className='w-5' src="/Images/BusinessBenefits/star.png" alt="" />Streamlined data processing</li>
                        <li className='flex items-center gap-3'><img className='w-5' src="/Images/BusinessBenefits/star.png" alt="" />Intelligent task scheduling</li>
                        <li className='flex items-center gap-3'><img className='w-5' src="/Images/BusinessBenefits/star.png" alt="" />Reduced manual work</li>
                    </ul>
                </div>
                <div className='border-2 border-primary p-5 rounded-lg'>
                    <img className=' w-12' src="/Images/BusinessBenefits/2.png" alt="" />
                    <h2 className='my-2 text-2xl font-semibold text-primary'>Reduce Costs</h2>
                    <p>Average 60% cost reduction</p>
                    <span className='mt-3 text-gray-500'>Lower operational costs through intelligent automation and optimized processes.</span>
                    <img className='my-5 w-full' src="/Images/BusinessBenefits/Line1.png" alt="" />
                    <ul className='space-y-3'>
                        <li className='flex items-center gap-3'><img className='w-5' src="/Images/BusinessBenefits/star.png" alt="" />Reduced labor costs</li>
                        <li className='flex items-center gap-3'><img className='w-5' src="/Images/BusinessBenefits/star.png" alt="" />Lower error rates</li>
                        <li className='flex items-center gap-3'><img className='w-5' src="/Images/BusinessBenefits/star.png" alt="" />Optimized resource usage</li>
                        <li className='flex items-center gap-3'><img className='w-5' src="/Images/BusinessBenefits/star.png" alt="" />Efficient process management</li>
                    </ul>
                </div>
                <div className='border-2 border-primary p-5 rounded-lg'>
                    <img className=' w-12' src="/Images/BusinessBenefits/3.png" alt="" />
                    <h2 className='my-2 text-2xl font-semibold text-primary'>Scale Faster</h2>
                    <p>10x faster scaling capability</p>
                    <span className='mt-3 text-gray-500'>Grow your business without proportional increases in operational overhead.</span>
                    <img className='my-5 w-full' src="/Images/BusinessBenefits/Line1.png" alt="" />
                    <ul className='space-y-3'>
                        <li className='flex items-center gap-3'><img className='w-5' src="/Images/BusinessBenefits/star.png" alt="" />Automated scaling solutions</li>
                        <li className='flex items-center gap-3'><img className='w-5' src="/Images/BusinessBenefits/star.png" alt="" />Intelligent capacity planning</li>
                        <li className='flex items-center gap-3'><img className='w-5' src="/Images/BusinessBenefits/star.png" alt="" />Seamless growth management</li>
                        <li className='flex items-center gap-3'><img className='w-5' src="/Images/BusinessBenefits/star.png" alt="" />Adaptive system architecture</li>
                    </ul>
                </div>
                <div className='border-2 border-primary p-5 rounded-lg'>
                    <img className=' w-12' src="/Images/BusinessBenefits/4.png" alt="" />
                    <h2 className='my-2 text-2xl font-semibold text-primary'>Data Transparency</h2>
                    <p>100% visibility into operations</p>
                    <span className='mt-3 text-gray-500'>Real-time insights and analytics through custom dashboards for complete visibility.</span>
                    <img className='my-5 w-full' src="/Images/BusinessBenefits/Line1.png" alt="" />
                    <ul className='space-y-3'>
                        <li className='flex items-center gap-3'><img className='w-5' src="/Images/BusinessBenefits/star.png" alt="" />Real-time performance metrics</li>
                        <li className='flex items-center gap-3'><img className='w-5' src="/Images/BusinessBenefits/star.png" alt="" />Custom analytics dashboards</li>
                        <li className='flex items-center gap-3'><img className='w-5' src="/Images/BusinessBenefits/star.png" alt="" />Predictive insights</li>
                        <li className='flex items-center gap-3'><img className='w-5' src="/Images/BusinessBenefits/star.png" alt="" />Comprehensive reporting</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default BusinessBenefits;
