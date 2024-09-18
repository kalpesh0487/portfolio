import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
const Catchy = () => {
  const textRef = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
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
          end: "bottom 75%", // End animation when the bottom of the element hits the top of the viewport
          scrub: true, // Smooth scrolling effect // Optional: Show markers to visualize the start and end points
        }
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(textRef2.current, 
      { opacity: 0, y: 100 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 6, 
        scrollTrigger: {
          trigger: textRef2.current,
          start: "top 90%", // Start animation when the top of the element hits 50% of the viewport height
          end: "bottom 90%", // End animation when the bottom of the element hits the top of the viewport
          scrub: true, // Smooth scrolling effect // Optional: Show markers to visualize the start and end points
        }
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(textRef3.current, 
      { opacity: 0, y: 100 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 6, 
        scrollTrigger: {
          trigger: textRef3.current,
          start: "top 60%", // Start animation when the top of the element hits 50% of the viewport height
          end: "bottom 45%", // End animation when the bottom of the element hits the top of the viewport
          scrub: true, // Smooth scrolling effect // Optional: Show markers to visualize the start and end points
          
        }
      }
    );
  }, []);
  return (
    <div className='h-auto py-40 w-full font-semibold text-5xl md:text-8xl bg-black  text-slate-200 flex flex-col gap-6 p-10 justify-center items-center'>
        <div className='mt-10 capitalize '>
            <div className='tracking-tighter'><span className='masked'>Excited</span><span ref={textRef3} className='tracking-tighter'> to contribute</span></div>
            <div ref={textRef} className='tracking-tighter'>and grow with an</div>
            <div ref={textRef2} className='tracking-tighter'>innovative organization.</div>
        </div>
    </div>
  )
}

export default Catchy