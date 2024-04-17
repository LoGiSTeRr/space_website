'use client'
import React from 'react';
import {motion} from 'framer-motion'
import {slideInFromTop} from "@/utils/motion";


const Encryption = () => {
    return (
        <div className="flec flex-row relative items-center justify-center w-full h-full">
            <div className="absolute w-auto h-auto top-0 z-[5]">
                <motion.div variants={slideInFromTop} className="text-[40px] font-medium text-center text-gray-200">

                </motion.div>
            </div>
        </div>
    );
};

export default Encryption;