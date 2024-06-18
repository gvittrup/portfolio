import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const HPDune = () => {
    return (
        <div className='relative w-full h-full flex flex-col justify-center items-center bg-teal-950'>
        <div name='container' className='grid place-items-center w-full md:w-1/2 px-5 my-20'>
            <div name='header' className='flex flex-row items-center gap-8'>
                    <p className='text-5xl md:text-7xl uppercase text-teal-100 font-hpDuneText'>
                        HP{' '}
                        <a className='text-5xl md:text-7xl uppercase text-emerald-500 bg-clip-text'>
                        DUNE
                        </a>
                    </p>
            </div>
            <div name='divider' className='w-full h-0.5 my-3 rounded-full bg-gradient-to-r from-teal-100 to-emerald-500'></div>
            <div name='description' className='flex justify-self-center w-11/12'>
                <p className='text-justify text-base md:text-xl text-stone-100'>
                    Tool built to parse large directories of JSON files with the intention of persisting and visualizing key firmware metrics for product performance and insight. 
                </p>
            </div>
            <iframe className='my-5 w-full h-[56.5vw] max-h-480 border-4 border-emerald-400 rounded-3xl drop-shadow-2xl' src="https://www.youtube.com/embed/737o0cuuU4U?si=i8bexRtfOqGQq7X7&amp;controls=0&amp;autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" autoPlay referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div name='subgrid' className='grid grid-cols-2 gap-2 place-items-center'>

            </div>
        </div>
    </div>
    )
}

export default HPDune