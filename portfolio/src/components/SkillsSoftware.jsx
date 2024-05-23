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
            key: 'adobe',
            software: <SiAdobe className={cname} />,
            skill: 'Adobe Suite',
        },
        {
            key: 'blender',
            software: <SiBlender className={cname} />,
            skill: 'Blender'
        },
        {
           key: 'unity',
            software: <FaUnity className={cname} />,
            skill: 'Unity',
        },
        {   
            key: 'unrealengine',
            software: <SiUnrealengine className={cname} />,
            skill: 'Unreal Engine'
        },
        {
            key: 'visualstudio',
            software: <SiVisualstudio className={cname} />,
            skill: 'Visual Studio',
        },
        { 
            key: 'xcode',  
            software: <SiXcode className={cname} />,
            skill: 'Xcode'
        }            
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
                softwares.map((software, index) => {
                    return <SkillsCard key={software.key} icon={software.software} skill={software.skill} delay={index * 0.2} />
                })
            }
        </motion.div>
    )
}

export default SkillsSoftware;