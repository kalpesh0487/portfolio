import React, { useEffect, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Projects = () => {
  const linksRef = useRef([]);
  const hoverRevealRef = useRef([]);
  const linkImagesRef = useRef([]);

  useEffect(() => {
    linksRef.current.forEach((link, index) => {
      const hoverReveal = hoverRevealRef.current[index];
      const linkImage = linkImagesRef.current[index];

      if (link && hoverReveal && linkImage) {
        link.addEventListener('mousemove', (e) => {
          hoverReveal.style.opacity = 1;
          hoverReveal.style.transform = `translate(-100%, -50%) rotate(3deg)`;
          linkImage.style.transform = 'scale(1,1)';
          hoverReveal.style.left = e.clientX + "px";
        });

        link.addEventListener('mouseleave', () => {
          hoverReveal.style.opacity = 0;
          hoverReveal.style.transform = `translate(-50%, -50%) rotate(-3deg)`;
          linkImage.style.transform = 'scale(0.8, 0.8)';
        });
      }
    });
  }, []);

  const projects = [
    { name: 'ArtWave', image: 'https://th.bing.com/th/id/OIP.pJIia2Tj5khliEOmDdIOOwHaHO?w=174&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7', link: 'https://art-wave-blue.vercel.app/' },
    { name: 'Imaginify', image: 'https://th.bing.com/th/id/OIP.SSYw6H_805MmMIn4rAL0hgHaHa?pid=ImgDet&w=207&h=207&c=7&dpr=1.1', link: 'https://image-process-saas.vercel.app/' },
    { name: 'Sorting Visualizer', image: 'https://th.bing.com/th/id/OIP.rkYqZllV8Ffvem3uJ4Sr5wHaEK?w=274&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7', link: 'https://sort-gules.vercel.app/' },
    { name: 'StreamSphere', image: 'https://th.bing.com/th/id/OIP.XcsZxmy70QVIgVwharU5NQHaEJ?w=273&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7', link: 'https://stramverse.vercel.app/' },
  ];

  return (
    <div className='text-white bg-black'>
      <h2 className='py-16 flex items-center text-4xl text-white border-b border-white'>
        <div className='masked font-semibold text-5xl md:text-8xl ml-10'>Projects</div>
      </h2>
      <nav>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div
                  className='link flex justify-between items-center cursor-pointer'
                  ref={(el) => (linksRef.current[index] = el)}
                >
                  <span className='ml-10'>{project.name}</span>
                  <FaArrowRight className="text-3xl md:text-5xl ml-4 mr-10" />
                  <div
                    className='hover-reveal'
                    ref={(el) => (hoverRevealRef.current[index] = el)}
                    style={{
                      opacity: 0,
                      position: 'absolute',
                      transition: 'all 0.3s ease',
                      transform: 'translate(-50%, -50%) rotate(0deg)',
                    }}
                  >
                    <img
                      ref={(el) => (linkImagesRef.current[index] = el)}
                      src={project.image}
                      alt={`${project.name} Project`}
                      style={{
                        transform: 'scale(0.8, 0.8)',
                        transition: 'transform 0.3s ease',
                        width: '100%', // Ensure images fill the container
                        height: 'auto', // Maintain aspect ratio
                      }}
                    />
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Projects;
