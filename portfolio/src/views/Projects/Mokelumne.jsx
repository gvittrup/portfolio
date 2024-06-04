import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Assets
import MRFP from '../../assets/images/Mokelumne/MRFP.png'

const Mokelumne = () => {
    return (
        <div name='container' className='relative w-full h-screen flex flex-col justify-center items-center bg-stone-300'>
            <div name='container' className='grid place-items-center w-full md:w-1/2 px-5'>
                <div name='header' className='flex flex-row items-center mt-20 gap-8'>
                    <img src={MRFP} className='w-10 h-10 md:w-16 md:h-16 xl:w-24 xl:h-24'></img>
                    <p className='text-3xl md:text-4xl 2xl:text-7xl font-mokeText uppercase text-stone-100'>Mokelumne ERP</p>
                </div>
                <div name='divider' className='w-full h-0.5 my-3 rounded-full bg-gradient-to-r from-gray-100 to-stone-200'></div>
                <div name='description' className='flex justify-self-center w-11/12'>
                    <p className='text-justify text-base md:text-xl text-stone-100'>
                        Mokelumne ERP was designed for local company Mokelumne River Forest Products. This is an ongoing project
                        where routine maintenance and updates are performed. The project is built with React, Node.js, and MySQL.
                        It's purpose is to retain related records for the company's operations while saving time for both employees
                        and customers though custom functions and components.
                    </p>
                </div>
                <div className='flex justify-center my-10 w-full shadow-innerXL drop-shadow-2xl bg-stone-100/50 border-sky-100 border-2 rounded-3xl'>
                    <iframe className='my-5 w-full h-80 md:w-854 md:h-480' src="https://www.youtube.com/embed/6e2h00Ik_yk?si=SZXMccsTI7E9oPlQ&amp;controls=0&amp;autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" autoPlay referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Mokelumne