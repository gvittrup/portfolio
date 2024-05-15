import React, { useEffect } from 'react';

// Assets
import Picture from '../assets/gunnar.png'

// Components
import SocialMediaBar from './SocialMediaBar';

// Styles
import '../styles/projectCard.css';

const AboutMeCard = () => {

    document.addEventListener("DOMContentLoaded", () => {
        const captures = document.querySelectorAll(".glow-capture")
      
        captures.forEach((capture) => {
          // Clone a child element. For example, we can clone the first child.
          const clonedChild = capture.children[0].cloneNode(true)
          const overlay = capture.querySelector(".glow-overlay")
      
          // Append the cloned child to the overlay.
          overlay.appendChild(clonedChild)
      
          capture.addEventListener("mousemove", (event) => {
            const x = event.pageX - capture.offsetLeft
            const y = event.pageY - capture.offsetTop

            console.log("x: ", x, ", y: ", y)
      
            overlay.style.setProperty("--glow-x", `${x}px`)
            overlay.style.setProperty("--glow-y", `${y}px`)
            overlay.style.setProperty("--glow-opacity", "1")
          })
      
          // Add mouseleave event to remove the glow effect
          capture.addEventListener("mouseleave", () => {
            overlay.style.setProperty("--glow-opacity", "0")
          })
        })
      })

    return (
        <div className='flex justify-center relative glow-capture'>
            <div className='group flex flex-col justify-center items-center w-full h-full min-h-80 bg-black/30 rounded-3xl mx-48 border-4 border-white/5 drop-shadow-xl glow glow:ring-1 glow:border-glow glow:ring-glow glow:bg-glow/[.15]'>
                <div name='picture' className='flex justify-top my-8'>
                    <img src={Picture} alt='Gunnar Vittrup' className='object-cover w-48 h-48 rounded-full border-4 border-white/5 shadow-inner'/>
                </div>
                <div name='Title' className='flex justify-center w-3/4 text-5xl uppercase text-white font-bold'>
                    Welcome :{')'}
                </div>
                <div name='description' className='flex w-3/4 my-5 text-xl text-white'>
                    <p>
                        I'm Gunnar, a{' '}<a className='text-sky-300 font-bold'>full-stack developer</a>. 
                        Outside of coding, I enjoy spending my time outside, hanging out with friends, and creating content. 
                    </p>
                </div>
                <div name='divider' className='w-3/4 h-1 bg-zinc-100 rounded-full'></div>
                <div name='social'>
                    <SocialMediaBar />
                </div>
                <div className='glow-overlay' style={{'--glow-color': '#7c3aed'}}></div>
            </div>
        </div>

    )
}

export default AboutMeCard;