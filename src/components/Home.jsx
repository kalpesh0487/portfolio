import { Environment, ScrollControls, Loader, Preload, Html, useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import MacContainer from './MacContainer';

// Loading spinner while assets are being fetched
function Loading() {
  const { progress } = useProgress();
  return <Html center></Html>;
}

const Home = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const welcomeTextRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // GSAP animation for welcome text
    gsap.fromTo(
      welcomeTextRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 2, delay: 1, ease: 'easeOut' }
    );
  }, []);

  return (
    <div className="w-full h-screen relative">
      <div className='absolute flex flex-col items-center text-white top-1/4 left-1/2 -translate-x-1/2 font-["Helvetica_Now_Display"]'>
        <h3 className='masked text-3xl sm:text-3xl md:text-5xl lg:text-7xl font-[700] tracking-tighter text-center'>
          Hello. I'm Kalpesh.
        </h3>
        {/* Conditional rendering for mobile/tablet view */}
        {!isLargeScreen && (
          <div className='mt-4 flex flex-col items-center'>
            {/* SVG Loader */}
            <div className='h-60 w-60 flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 100 100" className="glowing-loader">
                <defs>
                  <radialGradient id="glow" cx="50%" cy="50%" r="55%" fx="50%" fy="50%">
                    <stop offset="0%" stop-color="#D31668" stop-opacity="0.8" />
                    <stop offset="50%" stop-color="#0D72DE" stop-opacity="0.6" />
                    <stop offset="100%" stop-color="#F07D0A" stop-opacity="0" />
                  </radialGradient>
                </defs>
                <g fill="none" strokeWidth="15" stroke="url(#glow)">
                  <circle cx="50" cy="50" r="45" strokeDasharray="9" strokeDashoffset="0">
                    <animate 
                      attributeName="stroke-dashoffset" 
                      from="283" 
                      to="0" 
                      dur="1.5s" 
                      repeatCount="indefinite" 
                    />
                  </circle>
                  <circle cx="50" cy="50" r="35" strokeDasharray="9" strokeDashoffset="0">
                    <animate 
                      attributeName="stroke-dashoffset" 
                      from="219" 
                      to="0" 
                      dur="1.5s" 
                      repeatCount="indefinite" 
                      
                    />
                  </circle>
                  <circle cx="50" cy="50" r="25" strokeDasharray="7" strokeDashoffset="0">
                    <animate 
                      attributeName="stroke-dashoffset" 
                      from="157" 
                      to="0" 
                      dur="1.5s" 
                      repeatCount="indefinite" 
                      begin="1s"
                    />
                  </circle>

                  {/* repeat */}
                  <circle cx="50" cy="50" r="45" strokeDasharray="9" strokeDashoffset="0">
                    <animate 
                      attributeName="stroke-dashoffset" 
                      from="283" 
                      to="0" 
                      dur="1.5s" 
                      repeatCount="indefinite" 
                    />
                  </circle>
                  <circle cx="50" cy="50" r="35" strokeDasharray="" strokeDashoffset="0">
                    <animate 
                      attributeName="stroke-dashoffset" 
                      from="219" 
                      to="0" 
                      dur="1.5s" 
                      repeatCount="indefinite" 
                      
                    />
                  </circle>
                  <circle cx="50" cy="50" r="25" strokeDasharray="7" strokeDashoffset="0">
                    <animate 
                      attributeName="stroke-dashoffset" 
                      from="157" 
                      to="0" 
                      dur="1.5s" 
                      repeatCount="indefinite" 
                      begin="1s"
                    />
                  </circle>
                  <circle cx="50" cy="50" r="45" strokeDasharray="9" strokeDashoffset="0">
                    <animate 
                      attributeName="stroke-dashoffset" 
                      from="283" 
                      to="0" 
                      dur="1.5s" 
                      repeatCount="indefinite" 
                    />
                  </circle>
                  <circle cx="50" cy="50" r="35" strokeDasharray="9" strokeDashoffset="0">
                    <animate 
                      attributeName="stroke-dashoffset" 
                      from="219" 
                      to="0" 
                      dur="1.5s" 
                      repeatCount="indefinite" 
                      
                    />
                  </circle>
                  <circle cx="50" cy="50" r="25" strokeDasharray="7" strokeDashoffset="0">
                    <animate 
                      attributeName="stroke-dashoffset" 
                      from="157" 
                      to="0" 
                      dur="1.5s" 
                      repeatCount="indefinite" 
                      begin="1s"
                    />
                  </circle>

                  <circle cx="50" cy="50" r="5" strokeDasharray="9" strokeDashoffset="0">
                    <animate 
                      attributeName="stroke-dashoffset" 
                      from="283" 
                      to="0" 
                      dur="1.5s" 
                      repeatCount="indefinite" 
                    />
                  </circle>
                  <circle cx="50" cy="50" r="5" strokeDasharray="9" strokeDashoffset="0">
                    <animate 
                      attributeName="stroke-dashoffset" 
                      from="283" 
                      to="0" 
                      dur="1.5s" 
                      repeatCount="indefinite" 
                    />
                  </circle>
                  <circle cx="50" cy="50" r="5" strokeDasharray="9" strokeDashoffset="0">
                    <animate 
                      attributeName="stroke-dashoffset" 
                      from="283" 
                      to="0" 
                      dur="1.5s" 
                      repeatCount="indefinite" 
                    />
                  </circle>
                  <circle cx="50" cy="50" r="5" strokeDasharray="9" strokeDashoffset="0">
                    <animate 
                      attributeName="stroke-dashoffset" 
                      from="283" 
                      to="0" 
                      dur="1.5s" 
                      repeatCount="indefinite" 
                    />
                  </circle>
                </g>
              </svg>
            </div>
            {/* Text message with animation */}
            <div className='text-xl font-semibold text-center text-slate-100 uppercase mt-10'>
              <p ref={welcomeTextRef}>Welcome to my digital space!</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Show the canvas only on laptop or larger devices */}
      {isLargeScreen && (
        <Canvas camera={{ fov: 12, position: [0, -10, 120] }}>
          <Suspense fallback={<Loading />}>
            {/* Preload environment and other assets */}
            <Preload all />

            {/* Optimized Environment file (using 2k HDRI instead of 4k) */}
            <Environment 
              files={[ "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/2k/studio_small_09_2k.exr" ]}
            />

            <ScrollControls pages={2}>
              <MacContainer />
            </ScrollControls>
          </Suspense>
        </Canvas>
      )}

      {/* Default loader component from @react-three/drei */}
      <Loader />
    </div>
  );
};

export default Home;
