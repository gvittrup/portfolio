import React from 'react'
import { motion } from 'framer-motion'

// Components
import ImageCard from '../../components/Image'

// Assets
import scene1 from '../../assets/images/MobileXR/scene1.png'
import scene2 from '../../assets/images/MobileXR/scene2.png'
import ui from '../../assets/images/MobileXR/ui.png'
import phone from '../../assets/images/MobileXR/phone.png'
import cpuUI from '../../assets/images/MobileXR/cpu_ui.png'
import cpu from '../../assets/images/MobileXR/cpu.png'

const MobileXR = () => {
    return (
        <div className='relative w-full h-full flex flex-col justify-center items-center bg-gray-700'>
            <div name='container' className='grid place-items-center w-full md:w-1/2 px-5 my-20'>
                <div name='header' className='flex flex-row items-center gap-8'>
                        <h1 className='text-5xl md:text-7xl font-mokeText uppercase text-white inline-block bg-clip-text'>
                            MOBILE XR
                        </h1>
                </div>
                <div name='divider' className='w-full h-0.5 my-3 rounded-full bg-gradient-to-r from-sky-100 to-gray-400'></div>
                <div name='description' className='flex justify-self-center w-11/12'>
                    <p className='text-justify text-base md:text-xl text-stone-100'>
                    Interactive and engaging experiences designed in Unity to utilize augmented and virtual reality on a mobile device.
                    </p>
                </div>
                <div name='subgrid' className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-8 place-items-center'>
                    <ImageCard image={scene1} />
                    <ImageCard image={scene2} />
                </div>
                <iframe className='relative z-0 my-5 w-full h-[56.5vw] max-h-480 border-4 border-slate-400 rounded-3xl drop-shadow-2xl' src="https://youtube.com/embed/XvI3MEx4WOQ?si=r-2TuLmaYn8-XZcF&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" autoPlay referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div name='subgrid' className='grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center'>
                    <ImageCard image={ui} />
                    <ImageCard image={phone} />
                </div>
                <iframe className='relative my-5 w-full h-[56.5vw] max-h-480 border-4 border-slate-400 rounded-3xl drop-shadow-2xl' src="https://www.youtube.com/embed/t_WPdDG60fc?si=AunAv1jkBgxiz17R&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" autoPlay referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div name='subgrid' className='grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center'>
                    <ImageCard image={cpuUI} />
                    <ImageCard image={cpu} />
                </div>
                <iframe className='relative my-5 w-full h-[56.5vw] max-h-480 border-4 border-slate-400 rounded-3xl drop-shadow-2xl' src="https://www.youtube.com/embed/oCwFrVBds-8?si=pkj7VXYTLlgntHL2&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" autoPlay referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default MobileXR