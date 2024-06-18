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
import aquasaurious from '../assets/backgrounds/aquasaurious.svg'
import mokelumne from '../assets/backgrounds/mokelumne.svg'
import hyv from '../assets/backgrounds/hyv.svg'
import brave from '../assets/backgrounds/brave.svg'
import mobileXR from '../assets/backgrounds/mobile-xr.svg'
import hpDune from '../assets/backgrounds/hp-dune.svg'

const ActiveProjectHandler = forwardRef(( {}, ref ) => {

    const projects = new Map([
        ['mokelumne', {component: <Mokelumne />, layer: mokelumne}],
        ['aquasaurious', {component: <Aquasaurious />, layer: aquasaurious}],
        ['hyv', {component: <HYV />, layer: hyv}],
        ['hp-dune', {component: <HPDune />, layer: hpDune}],
        ['brave', {component: <Brave />, layer: brave}],
        ['mobile-xr', {component: <MobileXR />, layer: mobileXR}]
    
    ])

    // Context
    const { getActiveProject } = useContext(ProjectContext);
    const project = getActiveProject();

    // Refs
    const activeProjectRef = useRef(null);

    useEffect(() => {
        activeProjectRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [project])

    return (
        project ? (
            <div className='relative'>
                <Spacer image={projects.get(project).layer} />
                <section id='activeProject' ref={activeProjectRef} className='relative flex flex-col justify-center items-center w-screen h-full snap-start'>
                    {projects.get(project).component}
                </section>
            </div>
        ) : (
            <></>
        )
    )
})

export default ActiveProjectHandler