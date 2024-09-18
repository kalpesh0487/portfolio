import React, { useRef, useEffect } from 'react';
import profilePic from "../assets/meagain.jpg";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(textRef.current, 
      { opacity: 0, y: 100 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 6, 
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%", // Start animation when the top of the element hits 50% of the viewport height
          end: "bottom 95%", // End animation when the bottom of the element hits the top of the viewport
          scrub: true, // Smooth scrolling effect // Optional: Show markers to visualize the start and end points
        }
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(buttonRef.current, 
      { opacity: 0, y: 30 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 6, 
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%", // Start animation when the top of the element hits 50% of the viewport height
          end: "bottom 95%", // End animation when the bottom of the element hits the top of the viewport
          scrub: true, // Smooth scrolling effect// Optional: Show markers to visualize the start and end points
        }
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(imageRef.current, 
      { opacity: 1, scale: 1 }, 
      { 
        opacity: 0.8, 
        scale: 1.3, 
        duration: 4, 
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 70%", // Start animation when the top of the element hits 50% of the viewport height
          end: "bottom 45%", // End animation when the bottom of the element hits the top of the viewport
          scrub: true, // Smooth scrolling effect // Optional: Show markers to visualize the start and end points
        }
      }
    );
  }, []);

  return (
    <div className='flex flex-wrap bg-black'>
      <div className='w-full mt-10 lg:w-1/2'>
        <div className='flex justify-center p-4 lg:p-8'>
          <div className='relative overflow-hidden w-96 h-96 rounded-3xl shadow-lg'>
            <img 
              ref={imageRef}
              src={profilePic} 
              alt='Kalpesh Desai' 
              className='w-full h-full object-cover cursor-pointer transition-all duration-700 ease-in-out bg-gradient-to-r from-[#1456CE] to-[#D51E61] bg-opacity-40 bg-blend-overlay hover:bg-opacity-0'
            />
          </div>
        </div>
      </div>
      <div className='w-full lg:w-1/2'>
        <div className='p-4 flex flex-col items-center lg:items-center mt-5 md:mt-10'>
          <h2 className='pb-2 text-4xl tracking-tighter lg:text-7xl text-slate-200 font-["Helvetica_Now_Display"] font-semibold'>
            <span className='masked'>Kalpesh Desai</span>
          </h2>
          <span className='text-slate-200 bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent'>
            Web Developer
          </span>
          <p 
            ref={textRef} 
            className='text-center my-2 max-w-lg py-6 text-xl leading-relaxed text-slate-200'>
            I’m a web developer with a passion for crafting engaging and user-friendly applications. Currently, I’m working on a live library website and a chatbot, blending technical skills with a focus on client goals. I’m committed to continuous growth and innovation, seeking opportunities to make a meaningful impact in a dynamic environment.
          </p>
          <a 
            ref={buttonRef} 
            href="/resume.pdf" 
            download="Kalpesh_Desai_Resume.pdf" 
            className='text-center bg-gradient-to-r from-stone-300 to-stone-600 text-black px-6 py-3 rounded-full text-xl font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:from-slate-300 hover:to-slate-600'>
            Download My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
