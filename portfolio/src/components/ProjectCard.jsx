import React, { useContext  } from 'react'
import { motion } from 'framer-motion'
import { ProjectContext } from '../context/ProjectContext'

import { FaChevronDown } from 'react-icons/fa'

const ProjectCard = ({ project }) => {

    const { setActiveProject } = useContext(ProjectContext);

    return (
        <>
            <motion.button id={project.id} className='flex flex-col items-stretch w-full h-2/3 md:min-w-96 min-h-64 text-white lg:min-h-80 bg-black/30 rounded-3xl border-white hover:border-indigo-200 hover:text-sky-200 hover:animate-pulse border-2 hover:border-4 shadow-2xl group'
                initial={{
                    opacity: 0,
                    y: 75
                }}
                whileInView={{
                    opacity: 1,
                    y: 0             
                }}
                whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.25, type: 'spring' }
                }}
                whileTap={{
                    scale: 0.9,
                    transition: { duration: 0.25, type: 'spring' }
                }}
                transition={{ duration: 1 }}
                onClick={() => setActiveProject(project.id)}
                >
                    <div name='title' className='flex flex-start text-left mx-5 text-lg md:text-2xl xl:text-2xl uppercase font-bold'>
                        {project.title}
                    </div>
                    <div name='skills' className='flex text-left mx-5 text-zinc-100 text-sm md:text-base xl:text-lg uppercase font-light'>
                        {project.skills}
                    </div>
                    <div name='divider' className='flex w-full h-1 my-3 mx-auto bg-zinc-100 rounded-full'></div>
                    <div name='description' className='flex h-full justify-center overflow-auto relative'>
                        <p className='text-white text-left text-sm md:text-xl font-normal mx-1 px-1 md:mx-3 md:px-3 mb-2'>
                            {project.description}
                        </p>
                    </div>
                    <div className='flex w-full h-1/4 justify-center items-center'>
                        <FaChevronDown className='flex w-6 h-full mx-auto mb-3 text-white group-hover:animate-bounce'/>    
                    </div>
            </motion.button>
        </>
    )
}

export default ProjectCard