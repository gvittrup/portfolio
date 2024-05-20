import React from 'react';
import { motion } from 'framer-motion'

// Components
import SkillsCard from './SkillsCard';

// Assets
import { FaChevronRight, FaReact, FaAws, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { DiMysql, DiMongodb } from 'react-icons/di';

const SkillsFrameworks = () => {
    const cname = 'flex justify-center items-center w-full h-full mx-5 my-5 text-white'
    const tools = [
        {
            tool: <FaAws className={cname} />,
            skill: 'AWS',
        },
        {   
            tool: <FaGitAlt className={cname} />,
            skill: 'Git'
        },
        {   
            tool: <DiMysql className={cname} />,
            skill: 'MySQL'
        },
        {   
            tool: <DiMongodb className={cname} />,
            skill: 'MongoDB'
        },
        {   
            tool: <FaNodeJs className={cname} />,
            skill: 'Node.js'
        },
        {   
            tool: <FaReact className={cname} />,
            skill: 'React'
        },  
    ]

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
            <FaChevronRight className='text-white min-w-8 min-h-8' />
            {
                tools.map((tool, index) => {
                    return <SkillsCard icon={tool.tool} skill={tool.skill} delay={index * 0.2} />
                })
            }
        </motion.div>
    )
}

export default SkillsFrameworks;