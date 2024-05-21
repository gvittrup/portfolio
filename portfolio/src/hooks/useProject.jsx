import { useContext } from 'react';
import { ProjectContext } from '../context/ProjectContext';

const useProject = () => {
    return useContext(ProjectContext)
}

export default useProject;