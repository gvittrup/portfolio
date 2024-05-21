import React, { useState, createContext, useEffect } from 'react';

const ProjectContext = createContext({});

const Project = (props) => {
    const [project, setProject] = useState();

    const getActiveProject = () => {
        return project;
    }

    const setActiveProject = (project) => {
        setProject(project);
    }

    return (
        <ProjectContext.Provider value={{ getActiveProject, setActiveProject }}>
            {props.children}
        </ProjectContext.Provider>
    )

}

export { Project, ProjectContext }