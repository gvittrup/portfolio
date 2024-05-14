import React, { forwardRef } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const NavDown = forwardRef(( {section, next}, ref ) => {
    return (
        section === 'landing' ? (
            <div className='flex flex-col justify-end items-center w-screen h-screen mb-10'>
                <button className='w-1/4 bg-transparent' onClick={() => ref.current?.scrollIntoView({ behavior: 'smooth' })}>
                    <div className='mb-4 text-3xl lowercase text-zinc-100 drop-shadow-xl'>
                        {next}
                    </div>
                    <div className='flex justify-center'>
                        <FaChevronDown className='flex justify-center text-2xl text-zinc-100 drop-shadow-xl animate-bounce'/>
                    </div>
                </button>
            </div>
        ) : ( section === 'activeProject' ? (
            <div className='flex flex-col justify-end items-center w-screen mb-10'>
                <button className='w-1/4 bg-transparent' onClick={() => ref.current?.scrollIntoView({ behavior: 'smooth' })}>
                    <div className='mb-4 text-3xl lowercase text-zinc-100 drop-shadow-xl'>
                        {next}
                    </div>
                    <div className='flex justify-center'>
                        <FaChevronUp className='flex justify-center text-2xl text-zinc-100 drop-shadow-xl animate-bounce'/>
                    </div>
                </button>
            </div>
        ) : (
            <div className='flex flex-col justify-end items-center w-screen mb-10'>
                <button className='w-1/4 bg-transparent' onClick={() => ref.current?.scrollIntoView({ behavior: 'smooth' })}>
                    <div className='mb-4 text-3xl lowercase text-zinc-100 drop-shadow-xl'>
                        {next}
                    </div>
                    <div className='flex items-center justify-center'>
                        <FaChevronDown className='flex justify-center text-2xl text-zinc-100 drop-shadow-xl animate-bounce'/>
                    </div>
                </button>
            </div>
        )
    )
    )
})

export default NavDown;