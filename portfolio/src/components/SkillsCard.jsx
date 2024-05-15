import React from 'react';
import { motion } from 'framer-motion'

const SkillsCard = ({ icon, skill, delay }) => {
    console.log('delay: ', delay)
    return(
        <>
            <motion.div className='transition ease-in-out duration-500 flex justify-center items-center w-24 h-24 bg-transparent border-4 border-white rounded-xl hover:animate-pulse hover:scale-110'
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1                
                }}
                transition={{ duration: 1, delay: delay }}
                >
                {icon}
            </motion.div>
        </>
    )
}

export default SkillsCard;