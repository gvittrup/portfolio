import React from 'react';
import { PDFDocument } from 'pdf-lib';

// Icons
import {
    FaLinkedin,
    FaYoutube,
    FaGithub,
    FaFilePdf,
  } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const SocialMediaBar = () => {

    const printResume = async () => {
        const aws = import.meta.env.VITE_RESUME_URL;
        const bytes = await fetch(aws).then((res) => res.arrayBuffer());
        const pdf = await PDFDocument.load(bytes);
        const download = await pdf.save();
        const blob = new Blob([download], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `GunnarVittrup-Resume.pdf`;
        link.click();
      };

    return(
        <>
            <div className='flex flex-row justify-center w-full gap-2 md:gap-8 my-5'>
                <a className='transition ease-in-out duration-500 w-12 h-12 rounded-full hover:bg-violet-400 hover:text-red-500 hover:scale-110 drop-shadow-md hover:drop-shadow-xl hover:-translate-y-1' onClick={() => printResume()}><FaFilePdf className='w-full h-full px-2 py-2 text-violet-400 hover:text-white'/></a>
                <a className='transition ease-in-out duration-500 w-12 h-12 rounded-full hover:bg-violet-400 hover:text-red-500 hover:scale-110 drop-shadow-md hover:drop-shadow-xl hover:-translate-y-1' href='https://www.linkedin.com/in/gvittrup/'><FaLinkedin className='w-full h-full px-2 py-2 text-violet-400 hover:text-white' /></a>
                <a className='transition ease-in-out duration-500 w-12 h-12 rounded-full hover:bg-violet-400 hover:text-red-500 hover:scale-110 drop-shadow-md hover:drop-shadow-xl hover:-translate-y-1' href='https://github.com/gvittrup'><FaGithub className='w-full h-full px-2 py-2 text-violet-400 hover:text-white' /></a>
                <a className='transition ease-in-out duration-500 w-12 h-12 rounded-full hover:bg-violet-400 hover:text-red-500 hover:scale-110 drop-shadow-md hover:drop-shadow-xl hover:-translate-y-1' href='https://www.instagram.com/gunnar.vittrup/'><AiFillInstagram className='w-full h-full px-2 py-2 text-violet-400 hover:text-white' /></a>
                <a className='transition ease-in-out duration-500 w-12 h-12 rounded-full hover:bg-violet-400 hover:text-red-500 hover:scale-110 drop-shadow-md hover:drop-shadow-xl hover:-translate-y-1' href='https://www.youtube.com/channel/UCjslMHkIk-woewCF6EJ84pQ'><FaYoutube className='w-full h-full px-2 py-2 text-violet-400 hover:text-white' /></a>
            </div>
        </>   
    )
}

export default SocialMediaBar;