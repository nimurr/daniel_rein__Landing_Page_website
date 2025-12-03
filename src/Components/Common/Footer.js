import React from 'react';

const Footer = () => {
    return (
        <div className="container mx-auto rounded-3xl bg-gradient-to-b from-[#0d3b66] to-[#1971c3] text-white py-10 lg:py-20 text-lg mt-5">
            <div className="grid md:grid-cols-2 xl:grid-cols-4 items-start container mx-auto gap-20 px-10 lg:px-20">
                {/* Company Info Section */}
                <div className="w-full  lg:mb-0">
                    <h3 className="text-2xl font-semibold">ZimriTech</h3>
                    <p className="mt-2 text-gray-300">The only automation platform powered by advanced AI. We help businesses automate, accelerate, and scale with intelligent solutions.</p>
                    <div className="mt-4 text-sm text-gray-300">
                        <p>Melbourne, Victoria, Australia</p>
                        <p className="mt-2">Support@zimritech.com.au</p>
                    </div>
                </div>

                {/* Services Links Section */}
                <div className="w-full  lg:mb-0">
                    <h4 className="text-xl font-semibold">Services</h4>
                    <ul className="mt-4 text-sm text-gray-300 space-y-3">
                        <li><a href="#" className="hover:underline hover:text-white">AI Chatbots</a></li>
                        <li><a href="#" className="hover:underline hover:text-white">AI Receptionists</a></li>
                        <li><a href="#" className="hover:underline hover:text-white">Workflow Automations</a></li>
                        <li><a href="#" className="hover:underline hover:text-white">Custom Dashboards</a></li>
                    </ul>
                </div>

                {/* Company Links Section */}
                <div className="w-full  lg:mb-0">
                    <h4 className="text-xl font-semibold">Company</h4>
                    <ul className="mt-4 text-sm text-gray-300 space-y-3">
                        <li><a href="#" className="hover:underline hover:text-white">About Us</a></li>
                        <li><a href="#" className="hover:underline hover:text-white">Contact</a></li>
                    </ul>
                </div>

                {/* Resources Links Section */}
                <div className="w-full lg:mb-0">
                    <h4 className="text-xl font-semibold">Resources</h4>
                    <ul className="mt-4 text-sm text-gray-300 space-y-3">
                        <li><a href="#" className="hover:underline hover:text-white">Support</a></li>
                    </ul>
                </div>
            </div>
            <hr className='my-10' />

            {/* Stay Updated Section */}
            <div className="text-center mt-10">
                <h5 className="text-2xl font-semibold">Stay Updated</h5>
                <p className="my-5 text-sm text-gray-300">Get the latest AI insights, case studies, and product updates delivered to your inbox.</p>
                <div className="flex justify-center flex-wrap gap-1">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="py-2 px-4 rounded-full border-none focus:outline-none"
                    />
                    <button className="py-2 px-6 bg-primary text-white rounded-full">Services</button>
                </div>
            </div>
            <hr className='my-10' />

            {/* Footer Links Section */}
            <div className="mt-10 text-gray-300 flex invert-0 lg:gap-20 gap-5 flex-wrap justify-center">
                <p>&copy; 2025 ZimriTech Ltd. All rights reserved.</p>
                <div className=" space-x-4">
                    <a href="#" className="text-sm hover:underline hover:text-white">Terms of Service</a>
                    <a href="#" className="text-sm hover:underline hover:text-white">Cookie Policy</a>
                    <a href="#" className="text-sm hover:underline hover:text-white">Privacy Policy</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;