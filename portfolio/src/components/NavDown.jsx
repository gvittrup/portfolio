import React, { forwardRef, } from 'react';
import { motion } from 'framer-motion'

// Assets
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const NavDown = forwardRef(( {section, next}, ref ) => {

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 75
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            transition={{ duration: 1 }}
            className='relative grid place-items-center w-full'
        >
        {        
            section === 'landing' ? (
                <div className='flex-col justify-end items-center hidden md:flex w-screen h-screen pb-10'>
                    <button className='w-1/2 bg-transparent' onClick={() => ref.current?.scrollIntoView({ behavior: 'smooth' })}>
                        <div className='flex justify-center mb-4 text-3xl lowercase text-zinc-100 drop-shadow-xl'>
                            {next}
                        </div>
                        <div className='flex justify-center'>
                            <FaChevronDown className='flex justify-center text-2xl text-zinc-100 drop-shadow-xl animate-bounce'/>
                        </div>
                    </button>
                </div>
            ) : (
                <div className='relative hidden md:grid md:display-visible bottom-5 w-full h-full place-items-center'>
                    <button className='w-1/2 bg-transparent' onClick={() => ref.current?.scrollIntoView({ behavior: 'smooth' })}>
                        <div className='flex justify-center mb-4 text-3xl lowercase text-zinc-100 drop-shadow-xl'>
                            {next}
                        </div>
                        <div className='flex items-center justify-center'>
                            <FaChevronDown className='flex justify-center text-2xl text-zinc-100 drop-shadow-xl animate-bounce'/>
                        </div>
                    </button>
                </div>
            )
        }
    </motion.div>      
    )
})

export default NavDown;