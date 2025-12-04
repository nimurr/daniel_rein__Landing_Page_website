'use client'
import React from 'react';
import { motion } from 'framer-motion';

const AboutOurCoreValues = () => {
    // Define the motion variants for the items
    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section className='container mx-auto lg:my-20 my-10'>
            <div className='text-center py-10'>
                {/* Title and Description Animation on Scroll */}
                <motion.h2
                    className='text-5xl mb-3 text-primary font-semibold'
                    initial="hidden"
                    whileInView="visible"
                    variants={itemVariants}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    Our Core Values
                </motion.h2>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    variants={itemVariants}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    These principles guide everything we do and ensure we deliver exceptional value to our clients.
                </motion.p>
            </div>

            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-5'>
                {/* Benefit 1 */}
                <motion.div
                    className='relative duration-500 hover:shadow-[0px_0px_15px_#0e3b58] border-primary p-5 rounded-lg'
                    initial="hidden"
                    whileInView="visible"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <div className="moving-border"></div>
                    <img className='w-12' src="/Images/BusinessBenefits/1.png" alt="" />
                    <h2 className='my-2 text-2xl font-semibold text-primary'>Save Time</h2>
                    <p>Up to 40 hours saved per week</p>
                    <span className='mt-3 text-gray-500'>Automate repetitive tasks and free up your team to focus on strategic initiatives.</span>

                </motion.div>

                {/* Benefit 2 */}
                <motion.div
                    className='relative duration-500 hover:shadow-[0px_0px_15px_#0e3b58] border-primary p-5 rounded-lg'
                    initial="hidden"
                    whileInView="visible"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <div className="moving-border"></div>
                    <img className='w-12' src="/Images/BusinessBenefits/2.png" alt="" />
                    <h2 className='my-2 text-2xl font-semibold text-primary'>Reduce Costs</h2>
                    <p>Average 60% cost reduction</p>
                    <span className='mt-3 text-gray-500'>Lower operational costs through intelligent automation and optimized processes.</span>

                </motion.div>

                {/* Benefit 3 */}
                <motion.div
                    className='relative duration-500 hover:shadow-[0px_0px_15px_#0e3b58] border-primary p-5 rounded-lg'
                    initial="hidden"
                    whileInView="visible"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <div className="moving-border"></div>
                    <img className='w-12' src="/Images/BusinessBenefits/3.png" alt="" />
                    <h2 className='my-2 text-2xl font-semibold text-primary'>Scale Faster</h2>
                    <p>10x faster scaling capability</p>
                    <span className='mt-3 text-gray-500'>Grow your business without proportional increases in operational overhead.</span>

                </motion.div>

                {/* Benefit 4 */}
                <motion.div
                    className='relative duration-500 hover:shadow-[0px_0px_15px_#0e3b58] border-primary p-5 rounded-lg'
                    initial="hidden"
                    whileInView="visible"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <div className="moving-border"></div>
                    <img className='w-12' src="/Images/BusinessBenefits/4.png" alt="" />
                    <h2 className='my-2 text-2xl font-semibold text-primary'>Data Transparency</h2>
                    <p>100% visibility into operations</p>
                    <span className='mt-3 text-gray-500'>Real-time insights and analytics through custom dashboards for complete visibility.</span>
                </motion.div>
                <motion.div
                    className='relative duration-500 hover:shadow-[0px_0px_15px_#0e3b58] border-primary p-5 rounded-lg'
                    initial="hidden"
                    whileInView="visible"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <div className="moving-border"></div>
                    <img className='w-12' src="/Images/BusinessBenefits/4.png" alt="" />
                    <h2 className='my-2 text-2xl font-semibold text-primary'>Data Transparency</h2>
                    <p>100% visibility into operations</p>
                    <span className='mt-3 text-gray-500'>Real-time insights and analytics through custom dashboards for complete visibility.</span>
                </motion.div>
                <motion.div
                    className='relative duration-500 hover:shadow-[0px_0px_15px_#0e3b58] border-primary p-5 rounded-lg'
                    initial="hidden"
                    whileInView="visible"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <div className="moving-border"></div>
                    <img className='w-12' src="/Images/BusinessBenefits/4.png" alt="" />
                    <h2 className='my-2 text-2xl font-semibold text-primary'>Data Transparency</h2>
                    <p>100% visibility into operations</p>
                    <span className='mt-3 text-gray-500'>Real-time insights and analytics through custom dashboards for complete visibility.</span>
                </motion.div>
            </div>
        </section>
    );
}

export default AboutOurCoreValues;
