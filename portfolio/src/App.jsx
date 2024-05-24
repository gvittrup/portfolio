import { useRef, useEffect } from 'react'
import './App.css'

// Assets
import { TbHome } from 'react-icons/tb'

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
      <div name='container' className='relative w-screen h-full bg-slate-500'>
        <div id='top' className='relative'>
          <a 
            onClick={() => landingRef.current?.scrollIntoView({ behavior: 'smooth' })}
            className = "fixed left-5 top-8 md:left-8 md:top-7 p-2 md:p-4 z-20 transition ease-in-out duration-400 text-indigo-400 hover:text-white drop-shadow-md hover:shadow-innerXL bg-inherit rounded-full text-3xl md:text-4xl hover:cursor-pointer hover:scale-110">
            <TbHome />
          </a>
        </div>

        <div name='sections' className='relative w-screen h-screen snap-mandatory snap-y overflow-scroll overscroll-none'>
          <section id='landing' ref={landingRef} className='relative grid place-content-center w-screen h-screen snap-center'>
            <Landing />
            <NavDown section='landing' next='about me' ref={aboutRef}/>
          </section>

          <Spacer image={layer1} />

          <section id='about' ref={aboutRef} className='relative flex flex-col w-screen h-screen snap-center bg-slate-200 z-10'>
            <AboutMe />
            <NavDown section='about' next='skills' ref={skillsRef}/>
          </section>

          <Spacer image={layer2} />

          <section id='skills' ref={skillsRef} className='relative flex flex-col w-screen h-screen snap-center bg-slate-800 z-10'>
            <Skills />
            <NavDown section='skills' next='projects' ref={projectsRef}/>
          </section>

          <Spacer image={layer3} />

          <section id='projects' ref={projectsRef} className='relative grid place-content-center w-screen snap-start bg-slate-200 z-10'>
            <AllProjects />
          </section>

          <ActiveProjectHandler />

        </div>
      </div>
    </Project>
  )
}

export default App
