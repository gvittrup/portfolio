import React from 'react';
import { motion } from 'framer-motion'

// Components
import AboutMeCard from '../components/AboutMeCard';

const AboutMe = () => {
    return (
        <>
            <motion.div className='flex justify-center items-center w-full h-full my-24'
                initial={{
                    opacity: 0,
                    y: 75
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                transition={{ duration: 1 }}
                >

                <AboutMeCard />
            </motion.div>
        </>
    )
}

export default AboutMe;
