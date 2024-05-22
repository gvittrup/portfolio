import React, { useContext, useEffect, useRef, forwardRef } from 'react'

// Hooks
import { ProjectContext } from '../context/ProjectContext'

// Components
import Spacer from '../components/Spacer'
import NavDown from '../components/NavDown'

// Projects
import Mokelumne from '../views/Projects/Mokelumne';
import Aquasaurious from '../views/Projects/Aquasaurious';
import HYV from '../views/Projects/HYV';
import HPDune from '../views/Projects/HPDune';
import Brave from '../views/Projects/Brave';
import MobileXR from '../views/Projects/MobileXR';

// Transition Images
import layer1 from '../assets/backgrounds/layer1.svg'
import layer2 from '../assets/backgrounds/layer2.svg'
import layer3 from '../assets/backgrounds/layer3.svg'

const ActiveProjectHandler = forwardRef(( {}, ref ) => {

    const projectMap = new Map([
        ['mokelumne', <Mokelumne />],
        ['aquasaurious', <Aquasaurious />],
        ['hyv', <HYV />],
        ['hp-dune', <HPDune />],
        ['brave', <Brave />],
        ['mobile-xr', <MobileXR />]
    
    ])

    const spacerMap = new Map([
        ['mokelumne', layer2],
        ['aquasaurious', layer2],
        ['hyv', layer2],
        ['hp-dune', layer2],
        ['brave', layer2],
        ['mobile-xr', layer2]
    ])

    // Context
    const { getActiveProject } = useContext(ProjectContext);
    const project = getActiveProject();

    // Refs
    const activeProjectRef = useRef(null);
    const homeRef = useRef(ref);

    useEffect(() => {
        activeProjectRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [project])

    return (
        project ? (
            <>
                <Spacer image={spacerMap.get(project)} />
                <section id='activeProject' ref={activeProjectRef} className='flex flex-col justify-center items-center w-screen h-screen snap-center'>
                    {projectMap.get(project)}
                    {/* <NavDown section='activeProject' next='home' ref={homeRef} /> */}
                </section>
            </>
        ) : (
            <></>
        )
    )
})

export default ActiveProjectHandler