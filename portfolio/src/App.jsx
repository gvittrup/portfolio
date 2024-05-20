import { useState, useRef } from 'react'
import './App.css'

// Context
import { ProjectContext } from './context/ActiveProject'

// Components
import Spacer from './components/Spacer'
import NavDown from './components/NavDown'

// Views
import Landing from './views/Landing'
import AboutMe from './views/AboutMe'
import Skills from './views/Skills'
import Projects from './views/Projects'

// Transition Images
import layer1 from './assets/backgrounds/layer1.svg'
import layer2 from './assets/backgrounds/layer2.svg'
import layer3 from './assets/backgrounds/layer3.svg'
import Project from 'surge/lib/middleware/project'

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
          <Landing />
          <NavDown section='landing' next='about me' ref={aboutRef}/>
        </section>

        <Spacer image={layer1} />

        <section id='aboutMe' ref={aboutRef} className='flex flex-col justify-center items-center w-screen h-screen snap-center bg-slate-200 text-black text-4xl'>
          <AboutMe />
          <NavDown section='about' next='skills' ref={skillsRef}/>
        </section>
        
        <Spacer image={layer2} />
        
        <section id='skills' ref={skillsRef} className='flex flex-col w-screen h-screen snap-center bg-slate-800 text-black text-4xl'>
          <Skills />
          <NavDown section='skills' next='projects' ref={projectsRef}/>
        </section>
        
        <Spacer image={layer3} />
        
        <section id='projects' ref={projectsRef} className='flex flex-col justify-center items-center w-screen snap-start bg-slate-200 text-black text-4xl'>
          <Projects />
          <NavDown section='skills' next='projects' ref={projectsRef}/>
        </section>
        
        {/* <ProjectContext>

        </ProjectContext> */}
      </div>
    </>
  )
}

export default App
