import React, { useState } from 'react';

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
                className='absolute animate-bounce left-0 -top-20 xl:w-60 w-20'
                src="/Images/howItWork/Visual.png"
                alt="Design"
            />
            <div className='bg-[#f1f0f3] p-10 container mx-auto rounded-3xl'>
                <div className='text-center py-10'>
                    <h2 className='text-5xl mb-3 text-primary font-semibold'>How It Works</h2>
                    <p>Our proven 4-step process ensures your AI transformation is seamless and successful.</p>
                </div>

                <div className='bg-white p-8 rounded-2xl shadow-md'>
                    <h3 className='text-3xl font-semibold mb-3'>{steps[currentStep].title}</h3>
                    <p className='mb-5'>{steps[currentStep].description}</p>

                    {/* Step content or form */}
                    {currentStep < steps.length - 1 ? (
                        <ul className='list-disc pl-5 mb-5'>
                            {steps[currentStep].points.map((point, index) => (
                                <li key={index}>{point}</li>
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
                            <button
                                type='submit'
                                className='px-6 py-2 rounded-lg bg-primary text-white'
                            >
                                Submit
                            </button>
                        </form>
                    )}

                    {/* Progress bar */}
                    <div className='w-full bg-gray-200 rounded-full h-2 my-5'>
                        <div
                            className='bg-primary h-2 rounded-full'
                            style={{ width: `${progressPercentage}%` }}
                        ></div>
                    </div>

                    {/* Navigation buttons */}
                    {currentStep < steps.length - 1 && (
                        <div className='flex justify-between'>
                            <button
                                onClick={prevStep}
                                disabled={currentStep === 0}
                                className={`px-6 py-2 rounded-lg ${currentStep === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary text-white'}`}
                            >
                                Previous
                            </button>
                            <button
                                onClick={nextStep}
                                className='px-6 py-2 rounded-lg bg-primary text-white'
                            >
                                {steps[currentStep].buttonText}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Howitworks;
