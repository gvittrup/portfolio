import React from 'react'

// Components
import ImageCard from '../../components/Image'

// Assets
import model from '../../assets/images/Brave/model.png'
import angle1 from '../../assets/images/Brave/angle1.png'
import angle2 from '../../assets/images/Brave/angle2.png'
import squatBefore from '../../assets/images/Brave/squat-before.png'
import squatAfter from '../../assets/images/Brave/squat-after.png'
import swing1 from '../../assets/images/Brave/swing1.jpg'
import swing2 from '../../assets/images/Brave/swing2.jpg'
import swing3 from '../../assets/images/Brave/swing3.jpg'
import bat from '../../assets/images/Brave/bat.png'
import club from '../../assets/images/Brave/club.png'


const Brave = () => {
    return (
        <div className='relative w-full h-full flex flex-col justify-center items-center bg-sky-950'>
            <div name='container' className='grid place-items-center w-full md:w-1/2 px-5 my-20 gap-8'>
                <div name='header' className='flex flex-row items-center gap-8'>
                        <p className='text-5xl md:text-7xl font-aquasauriousTextRegular uppercase text-white inline-block bg-clip-text'>
                            <a className='text-emerald-400'>valor</a> biomechanics
                        </p>
                </div>
                <div name='divider' className='w-full h-0.5 my-3 rounded-full bg-gradient-to-r from-emerald-50 to-emerald-500'></div>
                <div name='description' className='flex justify-self-center w-11/12'>
                    <p className='text-justify text-base md:text-xl text-emerald-50'>
                    Professional work done for Brave Virtual Worlds, where I was a member in the development of the data
                    processing pipeline regarding character movement. Additionally, I was the lead designer for the character model,
                    assets, and scene. This app was developed in Unity, C#, Swift, and Python.
                    </p>
                </div>
                <ImageCard image={model} />
                <h1 className='text-emerald-50 uppercase text-lg'>angle measurement</h1>
                <div className='grid grid-cols-2 place-content-center gap-2'>
                    <ImageCard image={angle1} />
                    <ImageCard image={angle2} />
                </div>
                <h1 className='text-emerald-50 uppercase text-lg'>ground detection</h1>
                <div className='grid grid-cols-2 place-content-center gap-2'>
                    <ImageCard image={squatBefore} />
                    <ImageCard image={squatAfter} />
                </div>
                <h1 className='text-emerald-50 uppercase text-lg'>movement</h1>
                <div className='grid grid-cols-3 place-content-center gap-2'>
                    <ImageCard image={swing1} />
                    <ImageCard image={swing2} />
                    <ImageCard image={swing3} />
                </div>
                <h1 className='text-emerald-50 uppercase text-lg'>other models</h1>
                <div className='grid grid-cols-2 place-content-center gap-2'>
                    <ImageCard image={bat} />
                    <ImageCard image={club} />
                </div>
            </div>
        </div>
    )
}

export default Brave