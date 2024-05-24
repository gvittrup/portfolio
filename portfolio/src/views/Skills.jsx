import React from 'react';

// Components
import SkillsLanguages from '../components/SkillsLanguages';
import SkillsTools from '../components/SkillsTools';
import SkillsSoftware from '../components/SkillsSoftware';

const Skills = () => {
    return (
        <div className='relative grid flex-1 place-content-center max-w-full h-full'>
            <section name='languages'> 
                <div className='flex justify-center mx-24 mb-2 md:mb-6 uppercase text-white underline decoration-sky-400 text-2xl md:text-4xl font-bold'>Languages</div>
                <SkillsLanguages />
            </section>
            <section name='tools'> 
                <div className='flex justify-center mx-24 my-4 md:my-8 uppercase underline decoration-pink-400  text-white text-2xl md:text-4xl font-bold'>Tools</div>
                <SkillsTools />
            </section>
            <section name='software'> 
                <div className='flex justify-center mx-24 my-4 md:my-8 uppercase underline decoration-indigo-400  text-white text-2xl md:text-4xl font-bold'>Software</div>
                <SkillsSoftware />
            </section>
        </div>
    )
}

export default Skills;