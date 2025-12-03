'use client';
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
        </div>
    );
}

export default Page;