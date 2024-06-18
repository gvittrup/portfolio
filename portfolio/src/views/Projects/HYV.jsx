import React from 'react'

// Components
import ImageCard from '../../components/Image'

// Assets
import cheering from '../../assets/images/HYV/cheering.png'
import game1 from '../../assets/images/HYV/game1.png'
import game2 from '../../assets/images/HYV/game2.png'
import instructions from '../../assets/images/HYV/instructions.png'
import menu from '../../assets/images/HYV/menu.png'
import scene from '../../assets/images/HYV/scene.png'

const HYV = () => {
    return (
        <div className='relative w-full h-full flex flex-col justify-center items-center bg-violet-900'>
            <div name='container' className='grid place-items-center w-full md:w-1/2 px-5 my-20'>
                <div name='header' className='flex flex-row items-center gap-8'>
                        <h1 className='text-5xl md:text-7xl font-mokeText uppercase text-white inline-block bg-clip-text'>
                            HYV
                        </h1>
                </div>
                <div name='divider' className='w-full h-0.5 my-3 rounded-full bg-gradient-to-r from-yellow-200 to-violet-500'></div>
                <div name='description' className='flex justify-self-center w-11/12'>
                    <p className='text-justify text-base md:text-xl text-stone-100'>
                    HYV introduces the next level of entertainment by providing enhanced interactive virtual reality experiences, connecting users with their favorite content creators, music artists, and more.
                    </p>
                </div>
                <iframe className='my-5 w-full h-[56.5vw] max-h-480 border-4 border-yellow-200 rounded-3xl drop-shadow-2xl' src="https://www.youtube.com/embed/cN8tDfrcsAw?si=YPLzyRYghfTtkJzH&amp;controls=0&amp;autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" autoPlay referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div name='subgrid' className='grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center'>
                    <ImageCard image={menu} />
                    <ImageCard image={instructions} />
                    <ImageCard image={game1} />
                    <ImageCard image={game2} />
                    <ImageCard image={cheering} />
                    <ImageCard image={scene} />
                </div>
            </div>
        </div>
    )
}

export default HYV