import { useState, useRef } from 'react'
import './App.css'

import { FaChevronDown } from 'react-icons/fa';

// Components
import Spacer from './components/Spacer'
import NavDown from './components/NavDown'

// Views
import LandingPage from './views/LandingPage'


// Transition Images
import layer1 from './assets/backgrounds/layer1.svg'
import layer2 from './assets/backgrounds/layer2.svg'
import layer3 from './assets/backgrounds/layer3.svg'

function App() {
  const landingRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const activeProjectRef = useRef(null);

  return (
    <>
      <div name='container' className='w-screen h-screen snap-mandatory snap-y overflow-scroll -z-50'>
        <section id='heroSection' ref={landingRef} className='flex flex-col justify-center items-center w-screen h-screen snap-center  text-black text-4xl -z-25'>
          <LandingPage />
          <NavDown section='landing' next='about me' ref={aboutRef}/>
        </section>

        <Spacer image={layer1} />

        <section id='aboutMe' ref={aboutRef} className='flex flex-col justify-center items-center w-screen h-screen snap-center bg-slate-200 text-black text-4xl'>
          <div className='flex justify-center items-center w-full h-full'>2</div>
          <NavDown section='about' next='skills' ref={skillsRef}/>
        </section>
        
        <Spacer image={layer2} />
        
        <section id='skills' ref={skillsRef} className='flex flex-col justify-center items-center w-screen h-screen snap-center bg-slate-800 text-black text-4xl'>
          <div className='flex justify-center items-center w-full h-full'>3</div>
          <NavDown section='skills' next='projects' ref={projectsRef}/>
        </section>
        
        <Spacer image={layer3} />
        
        <section id='projects' ref={projectsRef} className='flex flex-col justify-center items-center w-screen h-screen snap-center bg-slate-200 text-black text-4xl'>
          <div className='flex justify-center items-center w-full h-full'>4</div>
        </section>
        
        <section id='activeProject' ref={activeProjectRef} className='flex flex-col justify-center items-center w-screen h-screen snap-center bg-green-300 text-black text-4xl'>
          <div className='flex justify-center items-center w-full h-full'>5</div>
          <NavDown section='activeProject' next='home' ref={landingRef}/>
        </section>
      </div>
    </>
  )
}

export default App
