import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Assets
import MRFP from '../../assets/images/Mokelumne/MRFP.png'

const Mokelumne = () => {
    return (
        <div name='container' className='grid place-content-center w-full h-full bg-stone-300'>
            <div name='header' className='flex flex-row items-center my-20 gap-8'>
                <img src={MRFP} className='w-16 h-16 md:w-24 md:h-24'></img>
                <p className='text-5xl md:text-7xl font-mokeText uppercase text-stone-100'>Mokelumne rfp</p>
            </div>
        </div>
    )
}

export default Mokelumne