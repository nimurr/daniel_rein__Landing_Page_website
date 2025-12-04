import AboutHero from '@/Components/About/AboutHero';
import AboutOurCoreValues from '@/Components/About/AboutOurCoreValues';
import AboutPredicteds from '@/Components/About/AboutPredicteds';
import Header from '@/Components/Common/Header';
import React from 'react';

const Page = () => {
    return (
        <div>
            <AboutHero />
            <AboutPredicteds />
            <AboutOurCoreValues />
        </div>
    );
}

export default Page;
