import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap'
import SplitText from '@gregoire.ciles/split-text' 
import { motion, useScroll, useTransform } from 'framer-motion'

const Landing = () => {

    useEffect(() => {
    const titles = gsap.utils.toArray('.intro-title')
    const tl = gsap.timeline( { repeat: -1, repeatDelay: 0});
    
    titles.forEach(title => { 
        const splitTitle = new SplitText(title);

            tl
                .from(splitTitle.chars, {
                    y: 80,
                    opacity: 0,
                    rotateX: -90,
                    stagger: 0.02
                }, "<")

                .to(splitTitle.chars, {
                    y: -80,
                    opacity: 0,
                    rotateX: 90,
                    stagger: 0.02
                }, "<5")
        })
    }, [])  
    

    return (
            <div style={{y: scrollY}} name='landingPage' className='absolute flex flex-col justify-center items-center w-screen h-screen uppercase font-bold text-3xl lg:text-6xl xl:text-8xl z-10'>
                <p style={{ lineHeight: 0 }} className='intro-title text-indigo-200 uppercase overflow-y'>Gunnar Vittrup</p>
                <p style={{ lineHeight: 0 }} className='intro-title text-zinc-100 uppercase overflow-y'>Full-stack Developer</p>
                <p style={{ lineHeight: 0 }} className='intro-title text-zinc-100 uppercase overflow-y'>Content Creator</p>
            </div>

    )
}

export default Landing;