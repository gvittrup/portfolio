import React, { useRef } from 'react';
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
  } from "framer-motion";

// Assets
import Picture from '../assets/gunnar.png'

// Components
import SocialMediaBar from './SocialMediaBar';

const ROTATION_RANGE = 15;
const HALF_ROTATION_RANGE = 15 / 2;

const AboutMeCard = () => {

    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
  
    const xSpring = useSpring(x);
    const ySpring = useSpring(y);
  
    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };    

    return (
        <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
            transformStyle: "preserve-3d",
            transform,
        }}
        className="relative w-96 md:w-128 h-128 mx-12 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
        >
            <div
            style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
            }}
            className="absolute inset-4 grid place-content-center rounded-xl bg-indigo-200/75 shadow-xl"
            >
                <img src={Picture} style={{ transform: 'translateZ(50px)' }} alt='Gunnar Vittrup' 
                    className='flex justify-self-center object-cover w-40 lg:w-48 h-40 lg:h-48 rounded-full border-2 border-indigo-100 shadow-xl' />
                <p name='title' style={{ transform: 'translateZ(75px)' }} 
                    className='flex justify-center w-full my-5 text-3xl md:text-5xl uppercase text-zinc-100 font-bold'>
                    Welcome :{')'}
                </p>
                <div name='description' style={{ transform: 'translateZ(50px)' }} className='w-full text-base md:text-xl px-6 text-white'>
                    <a className='text-violet-400 hover:text-zinc-100 font-bold'>full-stack developer</a> 
                    <p>
                        friends - outdoors - tech 
                    </p>
                </div>
                <div name='divider' style={{ transform: 'translateZ(25px)' }} className='flex justify-self-center w-full h-1 my-3 bg-zinc-100 rounded-full'></div>
                <div name='social' style={{ transform: 'translateZ(50px)' }} className='flex justify-self-center w-3/4'>
                    <SocialMediaBar />
                </div>
            </div>
        </motion.div>
    )
}

export default AboutMeCard;