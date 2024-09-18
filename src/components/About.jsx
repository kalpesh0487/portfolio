import React from 'react'
import { FaRegClipboard } from 'react-icons/fa6';

function About() {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    }).catch((err) => {
      console.error('Failed to copy: ', err);
    });
  };
  return (
    <div className='w-full border-t-2 border-black'>
    
      <div className='w-full h-[60vw] md:h-[35vw] bg-black mt-15'>
        <h2 className='pt-20 flex justify-center items-center text-4xl text-white border-white'>
            <div className='text-center masked font-semibold text-5xl md:text-7xl ml-10'>Get in Touch</div>
        </h2>
        <div className="flex justify-center items-center py-2">
        <p className='text-white mr-2'>
          +91 93265 45595
        </p>
        <FaRegClipboard 
          className="text-white cursor-pointer mr-2"
          onClick={() => copyToClipboard('+91 93265 45595')}
        />
      </div>
      <div className="flex justify-center items-center py-4">
        <p className='text-white mr-2'>
          desaikalpesh2003@gmail.com
        </p>
        <FaRegClipboard 
          className="text-white cursor-pointer mr-2"
          onClick={() => copyToClipboard('desaikalpesh2003@gmail.com')}
        />
      </div>
      </div>
    </div>
  );
}


export default About

