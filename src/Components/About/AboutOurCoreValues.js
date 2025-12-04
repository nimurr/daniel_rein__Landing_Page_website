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
            <div className='text-center mb-10'>
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
                    <h2 className='my-2 text-2xl font-semibold text-primary'>Client-First Approach</h2>
                    <span className='mt-3 text-gray-500'>Your business goals are our priority. We design every solution with your specific needs and growth in mind.</span>

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
                    <img className='w-12' src="/Images/about/icons/1.png" alt="" />
                    <h2 className='my-2 text-2xl font-semibold text-primary'>Automation Excellence</h2> 
                    <span className='mt-3 text-gray-500'>We believe in the power of intelligent automation to transform your operations and boost productivity.</span>

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
                    <img className='w-12' src="/Images/about/icons/2.png" alt="" />
                    <h2 className='my-2 text-2xl font-semibold text-primary'>Security & Reliability</h2> 
                    <span className='mt-3 text-gray-500'>Your data and operations are protected with enterprise-grade security and 99.9% uptime guarantee.</span>

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
                    <img className='w-12' src="/Images/about/icons/3.png" alt="" />
                    <h2 className='my-2 text-2xl font-semibold text-primary'>Innovation</h2>
                    <span className='mt-3 text-gray-500'>We stay ahead of technology trends to bring you cutting-edge solutions that give you a competitive edge.</span>
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
                    <img className='w-12' src="/Images/about/icons/4.png" alt="" />
                    <h2 className='my-2 text-2xl font-semibold text-primary'>Partnership</h2> 
                    <span className='mt-3 text-gray-500'>We're not just a service provider - we're your technology partner, invested in your long-term success.</span>
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
                   <img className='w-12' src="/Images/about/icons/5.png" alt="" />
                    <h2 className='my-2 text-2xl font-semibold text-primary'>Passion</h2> 
                    <span className='mt-3 text-gray-500'>We're passionate about what we do and genuinely care about helping your business thrive.</span>
                </motion.div>
            </div>
        </section>
    );
}

export default AboutOurCoreValues;
