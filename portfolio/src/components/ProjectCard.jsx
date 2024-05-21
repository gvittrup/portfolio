import React, { useContext  } from 'react'
import { motion } from 'framer-motion'
import { ProjectContext } from '../context/ProjectContext'

const ProjectCard = ({ project }) => {

    const { setActiveProject } = useContext(ProjectContext);

    return (
        <>
            <motion.button id={project.id} className='flex flex-col justify-center w-full min-w-96 min-h-64 lg:min-h-80 bg-black/30 rounded-3xl border-white hover:border-pink-400 hover:animate-pulse border-2 hover:border-4 drop-shadow-2xl'
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
                    <div name='header' className='flex mt-2 items-center justify-between w-full'>
                        <div name='title' className='flex mx-5 text-white text-2xl xl:text-4xl uppercase font-bold'>
                            {project.title}
                        </div>
                        <div name='skills' className='flex mx-5 text-white text-base xl:text-xl uppercase font-thin'>
                            {project.skills}
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div name='divider' className='flex justify-center w-full h-1 mx-5 my-3 bg-zinc-100 rounded-full'></div>
                    </div>
                    <div name='description' className='flex justify-center'>
                        <p className='text-white text-left text-xl xl:text-2xl font-normal mx-5 px-5 mb-2'>
                            {project.description}
                        </p>
                    </div>                
            </motion.button>
        </>
    )
}

export default ProjectCard