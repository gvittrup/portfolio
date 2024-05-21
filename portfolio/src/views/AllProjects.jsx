import React from 'react'

// Components
import ProjectCard from '../components/ProjectCard'

const AllProjects = () => {

    const projects = [
        {
            title: 'Mokelumne ERP System',
            id: 'mokelumne',
            description: 'Full-stack project designing, deploying, and maintaining a responsive web app for local Boise company Mokelumne River Forest Products.',
            skills: 'Node.js, React, HTML, Bootstrap, Tailwind, SQL, AWS',
        },
        {
            title: 'Aquasaurious',
            id: 'aquasaurious',
            description: 'Game developed as fun side project with focus of mobile app development and deployment, secure login and persistence, and 3D mathematics.',
            skills: 'C#, Blender, Unity',
        },
        {
            title: 'HYV',
            id: 'hyv',
            description: '',
            skills: 'C++, Blender, Unreal Engine',
        },
        {
            title: 'HP Dune',
            id: 'hp-dune',
            description: 'Senior design project for HP that consisted of creating an API to parse, persist, and visualize firmware metrics.',
            skills: 'Python, Node.js, MongoDB, Grafana, Podman',
        },
        {
            title: 'Brave Virutal Worlds',
            id: 'brave',
            description: '',
            skills: 'C#, Python, Swift, AWS, Unity, Xcode',
        },
        {
            title: 'Mobile XR',
            id: 'mobile-xr',
            description: '',
            skills: 'C#, Unity',
        }
    ]

    return(
        <>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mx-12 lg:mx-36 2xl:mx-48 3xl:mx-96 my-24'>
                {
                    projects.map((project, index) => {
                        return <ProjectCard key={project.id} project={project} />
                    })
                }
            </div>
        </>
    )
}

export default AllProjects