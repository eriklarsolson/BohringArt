import * as React from "react";
import { motion } from "framer-motion";

export const Animation = () => {
    return (
        <motion.div
            animate={{
                // scale: [1, 2, 2, 1, 1],
                // rotate: [0, 0, 270, 270, 0],
                // x: [100, 200, 300, 400, 500],
                width: [100, 200, 300, 400, 500]
                // borderRadius: ["20%", "20%", "50%", "50%", "20%"]
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                loop: Infinity,
                repeatDelay: 1
            }}
        />
    );
};
