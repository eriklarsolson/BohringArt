
import * as React from "react";
import { motion } from "framer-motion";
import "./Telescope.scss"

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
    paths: any
}

export const Animation: React.FC<AnimationProps> = ({paths}) => {

    //TODO - Need to display 3 lasers below
    return (
        <div className="telescope-container">
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1600 1600"
                className="telescope-item"
            >
                <motion.path
                    d={paths[0]}
                    variants={icon}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        default: {duration: 7, ease: "easeInOut"},
                        // fill: {duration: 4, ease: [1, 1, 1, 1]}
                    }}
                />

                <motion.path
                    d={paths[1]}
                    variants={icon}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        default: {duration: 7, ease: "easeInOut"},
                        // fill: {duration: 4, ease: [1, 1, 1, 1]}
                    }}
                />

                <motion.path
                    d={paths[2]}
                    variants={icon}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        default: {duration: 7, ease: "easeInOut"},
                        // fill: {duration: 4, ease: [1, 1, 1, 1]}
                    }}
                />
            </motion.svg>
        </div>
    );
}

// import * as React from "react";
// import { motion } from "framer-motion";
//
// export const RocketAnimation = () => {
//     return (
//         <motion.div
//             animate={{
//                 // scale: [1, 2, 2, 1, 1],
//                 // rotate: [0, 0, 270, 270, 0],
//                 // x: [100, 200, 300, 400, 500],
//                 width: [0, 1000]
//                 // borderRadius: ["20%", "20%", "50%", "50%", "20%"]
//             }}
//             transition={{
//                 duration: 3,
//                 ease: "easeInOut",
//                 times: [0, 1],
//                 loop: Infinity,
//                 repeatDelay: 1
//             }}
//         />
//     );
// };
