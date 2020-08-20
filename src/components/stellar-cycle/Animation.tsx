import * as React from "react";
import { motion } from "framer-motion";
import "./StellarCycle.scss"

const icon = {
    hidden: {
        opacity: 1,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        pathLength: 1,
    }
};
export const Animation = () => (
    <div className="stellar-container">
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1600 1600"
            className="item"
        >
            <motion.path
                d="M143.79,232.78,339.79,431.78,1195.79,444.78,1349.79,551.78"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 3, ease: "easeInOut" },
                    fill: { duration: 3, ease: [1, 0, 0.8, 1] }
                }}
            />
        </motion.svg>
    </div>
);
