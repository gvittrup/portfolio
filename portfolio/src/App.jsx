import { useContext, useRef, useEffect } from 'react'
import './App.css'

// Context
import { Project } from './context/ProjectContext'
import useProject from './hooks/useProject'

// Components
import Spacer from './components/Spacer'
import NavDown from './components/NavDown'

// Views
import Landing from './views/Landing'
import AboutMe from './views/AboutMe'
import Skills from './views/Skills'
import AllProjects from './views/AllProjects'
import ActiveProjectHandler from './handlers/ActiveProjectHandler'

// Transition Images
import layer1 from './assets/backgrounds/layer1.svg'
import layer2 from './assets/backgrounds/layer2.svg'
import layer3 from './assets/backgrounds/layer3.svg'

function App() {
  const landingRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const { project } = useProject();

  useEffect(() => {
    landingRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [landingRef])

  return (
    <Project >
      <div name='container' className='w-screen h-screen snap-mandatory snap-y overflow-scroll overscroll-x-none overflow-x-hidden -z-50'>
        <section id='heroSection' ref={landingRef} className='flex flex-col justify-center items-center w-screen h-screen snap-center -z-25'>
          <Landing />
          <NavDown section='landing' next='about me' ref={aboutRef}/>
        </section>

        <Spacer image={layer1} />

        <section id='aboutMe' ref={aboutRef} className='flex flex-col justify-center items-center w-screen h-screen snap-center bg-slate-200'>
          <AboutMe />
          <NavDown section='about' next='skills' ref={skillsRef}/>
        </section>
        
        <Spacer image={layer2} />
        
        <section id='skills' ref={skillsRef} className='flex flex-col w-screen h-screen snap-center bg-slate-800'>
          <Skills />
          <NavDown section='skills' next='projects' ref={projectsRef}/>
        </section>
        
        <Spacer image={layer3} />
        
        <section id='projects' ref={projectsRef} className='flex flex-col justify-center items-center w-screen snap-start bg-slate-200'>
          <AllProjects />
        </section>
        
        <ActiveProjectHandler ref={landingRef}/>

      </div>
    </Project>
  )
}

export default App
