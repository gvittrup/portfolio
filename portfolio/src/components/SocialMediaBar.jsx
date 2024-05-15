import React from 'react';

import {
    FaInstagram,
    FaLinkedin,
    FaYoutube,
    FaGithub,
    FaFilePdf,
  } from 'react-icons/fa';

const SocialMediaBar = () => {
    return(
        <>
            <div className='flex flex-row gap-8 my-5 mx-5'>
                <a className='transition ease-in-out duration-500 text-white hover:text-red-500 hover:scale-110 drop-shadow-md hover:drop-shadow-xl hover:-translate-y-1'><FaFilePdf /></a>
                <a className='transition ease-in-out duration-500 text-white hover:text-blue-700 hover:scale-110 drop-shadow-md hover:drop-shadow-xl hover:-translate-y-1' href='https://www.linkedin.com/in/gvittrup/'><FaLinkedin /></a>
                <a className='transition ease-in-out duration-500 text-white hover:text-purple-800 hover:scale-110 drop-shadow-md hover:drop-shadow-xl hover:-translate-y-1' href='https://github.com/gvittrup'><FaGithub /></a>
                <a className='transition ease-in-out duration-500 text-white hover:text-rose-500 hover:scale-110 drop-shadow-md hover:drop-shadow-xl hover:-translate-y-1' href='https://www.instagram.com/gunnar.vittrup/'><FaInstagram /></a>
                <a className='transition ease-in-out duration-500 text-white hover:text-red-500 hover:scale-110 drop-shadow-md hover:drop-shadow-xl hover:-translate-y-1' href='https://www.youtube.com/channel/UCjslMHkIk-woewCF6EJ84pQ'><FaYoutube /></a>
            </div>
        </>   
    )
}

export default SocialMediaBar;