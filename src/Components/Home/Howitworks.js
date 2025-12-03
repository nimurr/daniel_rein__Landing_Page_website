import React, { useState } from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const steps = [
    {
        title: "Discovery Call",
        description: "We understand your business needs and challenges through a comprehensive consultation.",
        points: [
            "Business process analysis",
            "Current pain point identification",
            "AI opportunity assessment",
            "Timeline and budget discussion"
        ],
        buttonText: "Next"
    },
    {
        title: "AI Strategy & Proposal",
        description: "We create a tailored AI strategy and detailed proposal for your specific needs.",
        points: [
            "Custom AI solution design",
            "Technology stack selection",
            "Implementation roadmap",
            "ROI projections and timeline"
        ],
        buttonText: "Next"
    },
    {
        title: "Build & Automate",
        description: "Our team develops and deploys your AI solutions with ongoing support.",
        points: [
            "AI model development",
            "System integration",
            "Testing and optimization",
            "Training and documentation"
        ],
        buttonText: "Next"
    },
    {
        title: "Get Started",
        description: "Tell us about your project and we'll create a custom AI solution for you.",
        points: [], // No bullet points for the form tab
        buttonText: "Submit"
    }
];

const Howitworks = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        project: ""
    });

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nProject: ${formData.project}`);
        // Here you can add real form submission logic (API call)
    };

    const progressPercentage = ((currentStep + 1) / steps.length) * 100;

    return (
        <section id='howitworks' className='my-10 lg:my-20 relative'>
            <img
                className='absolute animate-bounce left-0 md:-top-20 z-10 -top-10 xl:w-60 w-28'
                src="/Images/howItWork/Visual.png"
                alt="Design"
            />
            
            <div className='bg-[#f1f0f381] sm:p-10 p-5 container mx-auto rounded-3xl relative'>
                {/* Glowing Border Animation */}
                <div className="moving-border"></div>

                <div className='text-center py-10'>
                    <h2 className='text-5xl mb-3 text-primary font-semibold'>How It Works</h2>
                    <p>Our proven 4-step process ensures your AI transformation is seamless and successful.</p>
                </div>

                <div className='bg-white p-8 rounded-2xl shadow-md border-t-2 border-b-2 border-primary relative'>
                    <h3 className='text-3xl text-center font-semibold mb-3 text-primary'>{steps[currentStep].title}</h3>
                    <p className='mb-5 text-center'>{steps[currentStep].description}</p>

                    {/* Step content or form */}
                    {currentStep < steps.length - 1 ? (
                        <ul className='grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5'>
                            {steps[currentStep].points.map((point, index) => (
                                <li className='list-none flex items-center font-semibold text-gray-700 gap-3 border border-primary p-3 rounded-lg' key={index}>
                                    <IoMdCheckmarkCircleOutline className='text-primary text-2xl' />{point}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <form onSubmit={handleSubmit} className='space-y-4'>
                            <div>
                                <label className='block mb-1 font-medium'>Full Name</label>
                                <input
                                    type='text'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder='Enter your full name'
                                    required
                                    className='w-full p-2 border rounded-lg'
                                />
                            </div>
                            <div>
                                <label className='block mb-1 font-medium'>Email Address</label>
                                <input
                                    type='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder='Enter your email address'
                                    required
                                    className='w-full p-2 border rounded-lg'
                                />
                            </div>
                            <div>
                                <label className='block mb-1 font-medium'>Project Details</label>
                                <textarea
                                    name='project'
                                    value={formData.project}
                                    onChange={handleChange}
                                    placeholder='Tell us about your project and AI needs...'
                                    required
                                    className='w-full p-2 border rounded-lg'
                                />
                            </div>
                            <div className='flex items-center gap-3'>
                                <button
                                    onClick={prevStep}
                                    disabled={currentStep === 0}
                                    className={`px-4 py-4 rounded-full ${currentStep === 0 ? 'bg-gray-300 cursor-not-allowed' : 'border border-primary text-white'}`}
                                >
                                    <img className='group-hover:hidden rotate-180' src="/Images/Home/right-arrow-colored.png" alt="" />
                                </button>
                                <button
                                    type='submit'
                                    className='px-6 py-2 rounded-lg bg-primary text-white'
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    )}

                    {/* Progress bar */}
                    <div className='flex items-center justify-end sm:justify-between sm:gap-5 flex-wrap'>
                        <div className='flex md:min-w-[450px] min-w-full gap-3 items-center justify-between my-5 text-3xl font-semibold text-primary'>
                            <h3>0{currentStep + 1}</h3>
                            <div className='w-full bg-gray-200 rounded-full h-2 my-5'>
                                <div
                                    className='bg-primary h-2 rounded-full'
                                    style={{ width: `${progressPercentage}%` }}
                                ></div>
                            </div>
                            <h3>04</h3>
                        </div>

                        {/* Navigation buttons */}
                        {currentStep < steps.length - 1 && (
                            <div className='flex gap-3 justify-between'>
                                <button
                                    onClick={prevStep}
                                    disabled={currentStep === 0}
                                    className={`px-4 py-4 rounded-full ${currentStep === 0 ? 'bg-gray-300 cursor-not-allowed' : 'border border-primary text-white'}`}
                                >
                                    <img className='group-hover:hidden rotate-180' src="/Images/Home/right-arrow-colored.png" alt="" />
                                </button>
                                <button
                                    onClick={nextStep}
                                    className='px-10 py-2 rounded-full bg-primary text-white'
                                >
                                    {steps[currentStep].buttonText}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Howitworks;
