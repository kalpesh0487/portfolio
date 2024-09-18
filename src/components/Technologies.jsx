import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiDocker, SiExpress, SiJavascript, SiMongodb, SiNextdotjs, SiPostgresql, SiSpring, SiTypescript } from 'react-icons/si'
// import { RiReactjsLine, RiNodeLine } from 'react-icons/ri';
// import { SiNextdotjs, SiMongodb, SiExpress, SiPostgresql, SiTypescript, SiJavascript, SiDocker, SiJava, SiSpring } from 'react-icons/si';
import { FaJava, FaNodeJs } from "react-icons/fa6";
import {animate, motion } from 'framer-motion'


const iconVarients = (duration) =>({
    initial: {y: -10},
    animate: {
        y: [4, -4],
        transition :{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className='pb-20 bg-black'>
        <div className=''>
            <h2 className='py-32 flex justify-center text-4xl text-white'>
                <div className='masked font-semibold text-4xl md:text-5xl '>Technologies</div>
            </h2>
            <div className='flex flex-wrap items-center justify-center gap-6'>
                <motion.div
                 initial="initial"
                 animate="animate"
                 variants={iconVarients(1)}
                 className="pb-4 cursor-pointer">
                    <RiReactjsLine className="text-7xl text-cyan-400" />    {/* React */}
                </motion.div>
                <motion.div
                 initial="initial"
                 animate="animate"
                 variants={iconVarients(1)}
                 className="pb-4 cursor-pointer">
                    <FaNodeJs className='text-7xl text-green-600'/>
                </motion.div>
                <motion.div
                 initial={{ opacity: 1, y: -10 }}
                 animate="animate"
                 variants={iconVarients(1)}
                 className="pb-4 cursor-pointer">
                    <SiNextdotjs className="text-7xl text-white" />         {/* Next.js */}
                </motion.div>
                <motion.div
                 initial={{ opacity: 1, y: 50 }}
                 animate="animate"
                 variants={iconVarients(1)}
                 className="pb-4 cursor-pointer">
                    <SiMongodb className="text-7xl text-green-500" />       {/* MongoDB */}
                </motion.div>
                <motion.div
                 initial={{ opacity: 1, y: 80 }}
                 animate="animate"
                 variants={iconVarients(1)}
                 className="pb-4 cursor-pointer">
                    <SiExpress className="text-7xl text-white" />        {/* Express */}
                </motion.div>
                <motion.div
                 initial="initial"
                 animate="animate"
                 variants={iconVarients(1)}
                 className="pb-4 cursor-pointer">
                    <SiJavascript className="text-7xl text-yellow-400" />   {/* JavaScript */}
                </motion.div>
                <motion.div
                 initial="initial"
                 animate="animate"
                 variants={iconVarients(1)}
                 className="pb-4 cursor-pointer">
                    <SiPostgresql className="text-7xl text-blue-600" />     {/* PostgreSQL */}
                </motion.div>
                <motion.div
                 initial="initial"
                 animate="animate"
                 variants={iconVarients(1)}
                 className="pb-4 cursor-pointer">
                    <SiTypescript className="text-7xl text-blue-500 " />   {/* TypeScript */}
                </motion.div>


                <motion.div
                 initial="initial"
                 animate="animate"
                 variants={iconVarients(1)}
                 className="pb-4 cursor-pointer">
                    <SiDocker className="text-7xl text-blue-900" />         {/* Docker */}
                </motion.div>
                
                <motion.div
                 initial={{ opacity: 1, y: -50 }}
                 animate="animate"
                 variants={iconVarients(1)}
                 className="pb-4 cursor-pointer">
                    <FaJava className="text-7xl text-cyan-600"/>
                </motion.div>
               
            </div>
        </div>
    </div>
  )
}

export default Technologies