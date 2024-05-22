import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const HPDune = () => {
    return (
        <div name='container' className='flex justify-center items-center w-full h-full text-white text-2xl bg-slate-800'>
            <div className='flex flex-col justify-center w-1/2 h-1/2 bg-white/30 rounded-xl shadow-2xl'>
                <p className='uppercase my-10 text-zinc-100 font-bold'>Page is still under development :{'('}</p>
                <p className='uppercase mb-10 text-zinc-100 text-lg font-light'>Last Update: 05/22/2024</p>
            </div>
        </div>
    )
}

export default HPDune