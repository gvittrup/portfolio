import React, { forwardRef } from 'react';

// Components
import NavDown from '../components/NavDown'

const Landing = ({ next }) => {

    return (
        <>
            <div name='landingPage' className='flex justify-center items-center w-screen h-screen bg-slate-500 uppercase text-white font-bold text-6xl -z-10 absolute bg-fixed'>
                Gunnar Vittrup
            </div>
        </>

    )
}

export default Landing;