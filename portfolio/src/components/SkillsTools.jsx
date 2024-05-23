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
            key: 'aws',
            tool: <FaAws className={cname} />,
            skill: 'AWS',
        },
        {   
            key: 'git',
            tool: <FaGitAlt className={cname} />,
            skill: 'Git'
        },
        {   
            key: 'mysql',
            tool: <DiMysql className={cname} />,
            skill: 'MySQL'
        },
        {   
            key: 'mongodb',
            tool: <DiMongodb className={cname} />,
            skill: 'MongoDB'
        },
        {   
            key: 'nodejs',
            tool: <FaNodeJs className={cname} />,
            skill: 'Node.js'
        },
        {   
            key: 'react',
            tool: <FaReact className={cname} />,
            skill: 'React'
        },  
    ]

    return(
        <motion.div className='flex flex-row flex-wrap justify-center items-center gap-5 mx-8 md:mx-auto'
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{ duration: 1 }}
            >
            {
                tools.map((tool, index) => {
                    return <SkillsCard key={tool.key} icon={tool.tool} skill={tool.skill} delay={index * 0.2} fromDirection={'right'} />
                })
            }
        </motion.div>
    )
}

export default SkillsFrameworks;