import React from 'react';

// Components
import SkillsLanguages from '../components/SkillsLanguages';
import SkillsFrameworks from '../components/SkillsFrameworks';
import SkillsSoftware from '../components/SkillsSoftware';

const Skills = () => {
    return (
        <>
            <div className='flex flex-col justify-center w-full h-full mt-12'>
                <section name='languages'> 
                    <div className='flex justify-start mx-24 uppercase text-white underline decoration-sky-400 text-4xl'>Languages</div>
                    <SkillsLanguages />
                </section>
                <section name='frameworks'> 
                    <div className='flex justify-start mx-24 uppercase underline decoration-pink-400  text-white text-4xl'>Frameworks</div>
                    <SkillsFrameworks />
                </section>
                <section name='software'> 
                    <div className='flex justify-start mx-24 uppercase underline decoration-indigo-400  text-white text-4xl'>Software</div>
                    <SkillsSoftware />
                </section>
            </div>
        </>
    )
}

export default Skills;