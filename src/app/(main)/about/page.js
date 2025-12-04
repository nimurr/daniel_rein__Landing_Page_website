import AboutHero from '@/Components/About/AboutHero';
import AboutOurCoreValues from '@/Components/About/AboutOurCoreValues';
import AboutPredicteds from '@/Components/About/AboutPredicteds';
import AboutWhyChooseUs from '@/Components/About/AboutWhyChooseUs';
import React from 'react';

const Page = () => {
    return (
        <div>
            <AboutHero />
            <AboutPredicteds />
            <AboutOurCoreValues />
            <AboutWhyChooseUs />
        </div>
    );
}

export default Page;
