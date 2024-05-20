import React from 'react';
import { motion } from 'framer-motion'

const SkillsCard = ({ icon, skill, delay }) => {
    return(
        <>
            <motion.div className='flex justify-center items-center min-w-24 min-h-24 bg-transparent border-4 border-white rounded-xl hover:animate-pulse hover:scale-110'
                initial={{
                    opacity: 0,
                    x: -75
                }}
                whileInView={{
                    opacity: 1,
                    x: 0             
                }}
                transition={{ duration: 1, delay: delay }}
                >
                {icon}
            </motion.div>
        </>
    )
}

export default SkillsCard;