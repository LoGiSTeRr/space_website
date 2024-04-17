'use client'
import React from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion'
import {slideInFromLeft, slideInFromRight, slideInFromTop} from "@/utils/motion";

const HeroContent = () => {
    return (
        <motion.div initial="hidden" animate="visible" className="flex md:flex-row flex-col items-center justify-center px-20 mt-40 w-full z-[20]">
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <motion.div variants={slideInFromTop} className="Welcome-box py-[15px] px-[8px] border border-[#7042f88b] opacity-[0.9]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="pl-1 w-6 h-6 text-[#7784FA]">
                        <path fillRule="evenodd"
                              d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                              clipRule="evenodd"/>
                    </svg>
                    <h1 className="Welcome-text text-[15px] pl-1">FullStack Developer</h1>
                </motion.div>

                <motion.div variants={slideInFromLeft(0.5)} className="flex flex-col gap-6 mt-6 text-[40pt] font-bold text-white max-w-[600px] w-auto h-auto">
                    <span>Providing
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> The Best </span>
                    Project Experience</span>
                </motion.div>
                <motion.p variants={slideInFromLeft(0.8)} className="text-lg text-gray-400 my-5 max-w-[600px]">
                    I&apos;m the richest person in the world who likes to code for fun. But my main activity is fullstack development on next.js and .NET
                </motion.p>
                <motion.a variants={slideInFromLeft(1)} className="py-2 button-primary text-center text-white cursor-poinet rounded-lg max-w-[200px]">
                    Learn More!
                </motion.a>
            </div>
            <motion.div variants={slideInFromRight(0.8)} className="w-full h-full flex justify-center items-center">
                <Image src="/mainIconsdark.svg" alt="work icons" height={650} width={650}/>
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;