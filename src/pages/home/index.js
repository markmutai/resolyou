import React from 'react';
import { motion } from "framer-motion"

import SimpleSlider from '../../components/slider';

export const Home = () => {
    return (
        <>
            <motion.div
                transition={{
                    duration: 1.5,
                    ease: "easeInOut"
                }}
                exit={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                initial={{
                    opacity: 0,
                    y: 0.15
                }}
            >
                <div
                    className="relative flex items-center justify-center z-0">
                    <SimpleSlider />
                </div>
            </motion.div>
        </>
    )
}