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
        pathLength: 4,
    }
};

export interface AnimationProps {
    path: string
}

export const StellarPathAnimation: React.FC<AnimationProps> = ({path}) => {

    return (
        <div className="stellar-container">
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1600 1600"
                className="item"
            >
                <motion.path
                    d={path}
                    variants={icon}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        default: {duration: 3, ease: "easeInOut"},
                        // fill: {duration: 4, ease: [1, 1, 1, 1]}
                    }}
                />
            </motion.svg>
        </div>
    );
}
