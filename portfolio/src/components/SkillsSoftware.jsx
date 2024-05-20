import React from 'react';
import { motion } from 'framer-motion'

// Components
import SkillsCard from './SkillsCard';

// Assets
import { FaChevronRight, FaUnity } from 'react-icons/fa';
import { SiAdobe, SiBlender, SiUnrealengine, SiXcode, SiVisualstudio } from 'react-icons/si';

const SkillsSoftware = () => {
    const cname = 'flex justify-center items-center w-full h-full mx-5 my-5 text-white'
    const softwares = [
        {
            software: <SiAdobe className={cname} />,
            skill: 'Adobe Suite',
        },
        {
            software: <SiBlender className={cname} />,
            skill: 'Blender'
        },
        {
           
            software: <FaUnity className={cname} />,
            skill: 'Unity',
        },
        {   
            software: <SiUnrealengine className={cname} />,
            skill: 'Unreal Engine'
        },
        {
            
            software: <SiVisualstudio className={cname} />,
            skill: 'Visual Studio',
        },
        {   
            software: <SiXcode className={cname} />,
            skill: 'Xcode'
        }            
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
                softwares.map((software, index) => {
                    return <SkillsCard icon={software.software} skill={software.skill} delay={index * 0.2} />
                })
            }
        </motion.div>
    )
}

export default SkillsSoftware;