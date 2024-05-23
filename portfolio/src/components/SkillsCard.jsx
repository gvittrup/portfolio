import React from 'react';
import { motion } from 'framer-motion'
import { Tooltip } from 'flowbite-react'

const SkillsCard = ({ icon, skill, delay, fromDirection }) => {

    const x = fromDirection === 'left' ? -100 : 100;

    return(
        <>
            <Tooltip content={skill} className='px-2' animation='duration-500' style='light' arrow={false}>
                <motion.div data-tooltip-target='tooltip-default' className='flex justify-center items-center w-20 h-20 md:w-24 md:h-24 bg-transparent border-4 border-white rounded-xl hover:animate-pulse hover:border-indigo-200'
                    initial={{
                        opacity: 0,
                        x: x
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0            
                    }}
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.25, type: 'spring' }
                    }}
                    whileTap={{
                        scale: 0.9,
                        transition: { duration: 0.25, type: 'spring' }
                    }}
                    transition={{ duration: 0.5, delay: delay, type: 'spring' }}
                    >
                        <div className='flex justify-center items-center w-full h-full'>
                            {icon}
                        </div>
                </motion.div>
            </Tooltip>

        </>
    )
}

export default SkillsCard;