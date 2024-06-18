import React from 'react'
import { Link } from 'react-router-dom'

// Assets
import styles from "../../styles/bubble.module.css";
import { FaGithub } from 'react-icons/fa';

const Aquasaurious = () => {
    return (
        <div className='relative w-full h-screen flex flex-col justify-center items-center bg-sky-900'>
            <div name='container' className='grid place-items-center w-full md:w-1/2 px-5'>
                <div name='header' className='flex flex-row items-center mt-20 gap-8'>
                        <h1 className='text-5xl md:text-7xl font-aquasauriousTextThin uppercase text-transparent bg-gradient-to-r from-cyan-100 to-sky-300 inline-block bg-clip-text'>
                            {"aquasaurious".split("").map((char, idx) => (
                                <span className={styles.hoverText} key={idx}>
                                    {char}
                                </span>
                            ))}
                        </h1>
                </div>
                <div name='divider' className='w-full h-0.5 my-3 rounded-full bg-gradient-to-r from-cyan-100 to-sky-300'></div>
                <div name='description' className='flex justify-self-center w-11/12'>
                    <p className='text-justify text-base md:text-xl text-sky-100'>
                        Aquasaurious was originally a game created as a highschool project utilizing JavaScript. Since,
                        it has been reworked in Unity and C# with intent to deploy on the App Store in Q4 2024. 
                    </p>
                </div>
                <iframe className='my-5 w-full h-[56.5vw] max-h-480 border-4 border-sky-200 rounded-3xl drop-shadow-2xl' src="https://www.youtube.com/embed/QFH_YoFFCXw?si=FDdbrf5fZp4in1fM&amp;controls=0&amp;autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" autoPlay referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div name='links' className='relative grid place-items-center w-full gap-2 md:gap-8 my-5'>
                <a className='sticky transition ease-in-out duration-500 w-12 h-12 rounded-full hover:bg-sky-300 hover:scale-110 drop-shadow-md hover:drop-shadow-xl hover:-translate-y-1' href='https://github.com/gvittrup/Aquasaurious'><FaGithub className='w-full h-full px-2 py-2 text-sky-300 hover:text-sky-100' /></a>
            </div>
        </div>

    )
}

export default Aquasaurious