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
            key: 'csharp', 
            language: <SiCsharp className={cname} />,
            skill: 'C#',
        },
        {
            key: 'css',
            language: <FaCss3Alt className={cname} />,
            skill: 'CSS',
        },
        {
            key: 'html',
            language: <FaHtml5 className={cname} />,
            skill: 'HTML',
        },
        {
            key: 'java',
            language: <FaJava className={cname} />,
            skill: 'Java',
        },
        {   
            key: 'javascript',
            language: <RiJavascriptFill className={cname} />,
            skill: 'JavaScript'
        },
        {
            key: 'python',
            language: <FaPython className={cname} />,
            skill: 'Python',
        },
    ]

    return(
        <motion.div className='flex flex-row flex-wrap justify-center items-center gap-5 mx-8 md:mx-auto'
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{ duration: 1 }}
            >
            {
                languages.map((language, index) => {
                    return <SkillsCard key={language.key} icon={language.language} skill={language.skill} delay={index * 0.2} fromDirection={'left'} />
                })
            }
        </motion.div>
    )
}

export default SkillsLanguages;