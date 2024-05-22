import React from 'react'
import { motion } from 'framer-motion'

const HYV = () => {
    return (
        <div name='container' className='flex justify-center items-center w-full h-full text-white text-2xl bg-slate-800'>
            <div className='flex flex-col w-1/2 max-w-1/5 min-w-96 h-1/2 bg-white/30 border-4 border-white rounded-xl shadow-2xl'>
                <p className='uppercase mt-10 mx-1 text-zinc-100 font-bold'>Page is still under development :{'('}</p>
                <p className='uppercase mb-10 text-zinc-100 text-lg font-light'>Last Update: 05/22/2024</p>
                <div className='flex justify-center'>
                    <div className='w-full h-1 rounded-xl bg-zinc-100'></div>
                </div>
                <div className='flex justify-center items-center my-5 mx-2'>
                    Navigate to external portfolio site:
                </div>
                <a className='flex justify-center items-center my-5 mx-2' href='https://gunnarvittrup.myportfolio.com/hyv'>
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.25, type: 'spring' }
                        }}
                        whileTap={{
                            scale: 0.9,
                            transition: { duration: 0.25, type: 'spring' }
                        }}
                        transition={{ duration: 1 }}
                        className='flex w-1/2 h-3/4 justify-center items-center text-zinc-100'
                        >
                            HYV
                    </motion.button>
                </a>
            </div>
        </div>
    )
}

export default HYV