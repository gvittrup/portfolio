import React from 'react';

// Components
import SkillsLanguages from '../components/SkillsLanguages';
import SkillsTools from '../components/SkillsTools';
import SkillsSoftware from '../components/SkillsSoftware';

const Skills = () => {
    return (
        <>
            <div className='flex flex-col w-full h-3/4 my-10'>
                <section name='languages'> 
                    <div className='flex justify-center mx-24 my-4 md:my-8 uppercase text-white underline decoration-sky-400 text-2xl md:text-4xl font-bold'>Languages</div>
                    <SkillsLanguages />
                </section>
                <section name='Tools'> 
                    <div className='flex justify-center mx-24 my-4 md:my-8 uppercase underline decoration-pink-400  text-white text-2xl md:text-4xl font-bold'>Tools</div>
                    <SkillsTools />
                </section>
                <section name='software'> 
                    <div className='flex justify-center mx-24 my-4 md:my-8 uppercase underline decoration-indigo-400  text-white text-2xl md:text-4xl font-bold'>Software</div>
                    <SkillsSoftware />
                </section>
            </div>
        </>
    )
}

export default Skills;