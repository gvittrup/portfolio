import React from 'react';
import { motion } from 'framer-motion'

// Components
import AboutMeCard from '../components/AboutMeCard';

const AboutMe = () => {
    return (
        <>
            <motion.div className='relative grid place-content-center w-full h-full'
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
