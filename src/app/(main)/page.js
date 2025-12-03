'use client';
import BusinessBenefits from '@/Components/Home/BusinessBenefits';
import Hero from '@/Components/Home/Hero';
import Howitworks from '@/Components/Home/Howitworks';
import OurMission from '@/Components/Home/OurMission';
import Predicteds from '@/Components/Home/Predicteds';
import WhatWeOffer from '@/Components/Home/WhatWeOffer';
import WhyChooseZimriTech from '@/Components/Home/WhyChooseZimriTech';
import React from 'react';
const Page = () => {

    return (
        <div className=''>
            <Hero />
            <WhatWeOffer />
            <Howitworks />
            <WhyChooseZimriTech />
            <Predicteds />
            <OurMission />
            <BusinessBenefits />
        </div>
    );
}

export default Page;