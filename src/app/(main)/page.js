'use client';
import Hero from '@/Components/Home/Hero';
import WhatWeOffer from '@/Components/Home/WhatWeOffer';
import React from 'react';
const Page = () => {

    return (
        <div className='container mx-auto '>
            <Hero />
            <WhatWeOffer />
        </div>
    );
}

export default Page;