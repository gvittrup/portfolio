import React from 'react';
import { motion } from 'framer-motion'

// Components
import SkillsCard from './SkillsCard';

// Assets
import { FaChevronRight, FaUnity } from 'react-icons/fa';
import { SiAdobe, SiBlender, SiUnrealengine, SiXcode, SiVisualstudio } from 'react-icons/si';

const SkillsSoftware = () => {
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
            <SkillsCard icon={<SiAdobe className='flex justify-center items-center w-full h-full mx-5 my-5 text-white' />} skill={'Adobe Suite'} delay={0.2}/>
            <SkillsCard icon={<SiBlender className='flex justify-center items-center w-full h-full mx-5 my-5 text-white' />} skill={'Blender'} delay={0.4} />
            <SkillsCard icon={<FaUnity className='flex justify-center items-center w-full h-full mx-5 my-5 text-white' />} skill={'Unity'} delay={0.6} />
            <SkillsCard icon={<SiUnrealengine className='flex justify-center items-center w-full h-full mx-5 my-5 text-white' />} skill={'Unreal Engine'} delay={0.8} />
            <SkillsCard icon={<SiVisualstudio className='flex justify-center items-center w-full h-full mx-5 my-5 text-white' />} skill={'Visual Studio'} delay={1.0} />
            <SkillsCard icon={<SiXcode className='flex justify-center items-center w-full h-full mx-5 my-5 text-white' />} skill={'Xcode'} delay={1.2} />
        </motion.div>
    )
}

export default SkillsSoftware;