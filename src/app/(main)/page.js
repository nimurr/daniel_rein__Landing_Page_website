'use client';
import Hero from '@/Components/Home/Hero';
import Howitworks from '@/Components/Home/Howitworks';
import WhatWeOffer from '@/Components/Home/WhatWeOffer';
import React from 'react';
const Page = () => {

    return (
        <div className=''>
            <Hero />
            <WhatWeOffer />
            <Howitworks />
        </div>
    );
}

export default Page;