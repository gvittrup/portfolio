import React from 'react';
import { motion } from 'framer-motion'

// Components
import SkillsCard from './SkillsCard';

// Assets
import { FaChevronRight, FaJava, FaPython, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import { SiCsharp } from 'react-icons/si';

const SkillsLanguages = () => {
    const cname = 'flex justify-center items-center w-full h-full mx-5 my-5 text-white'
    const languages = [
        {
            language: <SiCsharp className={cname} />,
            skill: 'C#',
        },
        {
            language: <FaCss3Alt className={cname} />,
            skill: 'CSS',
        },
        {
            language: <FaHtml5 className={cname} />,
            skill: 'HTML',
        },
        {
            language: <FaJava className={cname} />,
            skill: 'Java',
        },
        {   
            language: <RiJavascriptFill className={cname} />,
            skill: 'JavaScript'
        },
        {
            language: <FaPython className={cname} />,
            skill: 'Python',
        },
    ]

    return(
        <motion.div className='flex flex-row items-center gap-5 ml-36 my-8'
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{ duration: 1 }}
            >
            <FaChevronRight className='text-white min-w-8 min-h-8' />
            {
                languages.map((language, index) => {
                    return <SkillsCard icon={language.language} skill={language.skill} delay={index * 0.2} />
                })
            }
        </motion.div>
    )
}

export default SkillsLanguages;