import { Environment, ScrollControls, Loader, Preload, Html, useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import MacContainer from './MacContainer';

// Loading spinner while assets are being fetched
function Loading() {
  const { progress } = useProgress();
  return <Html center></Html>;
}

const Home = () => {
  return (
    <div className="w-full h-screen">
      <div className='absolute flex flex-col items-center text-white top-1/4 left-1/2 -translate-x-1/2 font-["Helvetica_Now_Display"]'>
      <h3 className='masked text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-[700] tracking-tighter text-center'>
          Hello. I'm Kalpesh.
        </h3>
      </div>
      
      <Canvas camera={{ fov: 12, position: [0, -10, 120] }}>
        <Suspense fallback={<Loading />}>
          {/* Preload environment and other assets */}
          <Preload all />
          
          {/* Optimized Environment file (using 2k HDRI instead of 4k) */}
          <Environment 
            files={[
              "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/2k/studio_small_09_2k.exr" // Reduced size HDRI
            ]}
          />
          
          <ScrollControls pages={2}>
            <MacContainer/>
          </ScrollControls>
        </Suspense>
      </Canvas>
      
      {/* Default loader component from @react-three/drei */}
      <Loader />
    </div>
  );
}

export default Home;
