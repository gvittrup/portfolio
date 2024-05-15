import React from 'react';
import { motion } from 'framer-motion'

// Components
import SkillsCard from './SkillsCard';

// Assets
import { FaChevronRight, FaReact } from 'react-icons/fa';

const SkillsFrameworks = () => {
    return(
        <motion.div className='flex flex-row items-center gap-5 ml-36 my-8'
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{ duration: 1 }}
            >
            <FaChevronRight className='text-white' />
            <SkillsCard icon={<FaReact className='flex justify-center items-center w-full h-full mx-5 my-5 text-white' />} skill={'React'} />
        </motion.div>
    )
}

export default SkillsFrameworks;