import React from 'react';
import { motion } from 'framer-motion'

// Components
import SkillsCard from './SkillsCard';

// Assets
import { FaChevronRight, FaJava, FaPython } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';

const SkillsLanguages = () => {
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
            <SkillsCard icon={<FaJava className='flex justify-center items-center w-full h-full mx-5 my-5 text-white' />} skill={'Java'} />
            <SkillsCard icon={<RiJavascriptFill className='flex justify-center items-center w-full h-full mx-5 my-5 text-white' />} skill={'JavaScript'} />
            <SkillsCard icon={<FaPython className='flex justify-center items-center w-full h-full mx-5 my-5 text-white' />} skill={'Java'} />
        </motion.div>
    )
}

export default SkillsLanguages;