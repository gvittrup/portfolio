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

const ActiveProjectHandler = forwardRef(( {}, ref ) => {

    const projects = new Map([
        ['mokelumne', {component: <Mokelumne />, layer: mokelumne}],
        ['aquasaurious', {component: <Aquasaurious />, layer: aquasaurious}],
        ['hyv', {component: <HYV />, layer: aquasaurious}],
        ['hp-dune', {component: <HPDune />, layer: aquasaurious}],
        ['brave', {component: <Brave />, layer: aquasaurious}],
        ['mobile-xr', {component: <MobileXR />, layer: aquasaurious}]
    
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
            <div>
                <Spacer image={projects.get(project).layer} />
                <section id='activeProject' ref={activeProjectRef} className='flex flex-col justify-center items-center w-screen snap-center'>
                    {projects.get(project).component}
                </section>
            </div>
        ) : (
            <></>
        )
    )
})

export default ActiveProjectHandler