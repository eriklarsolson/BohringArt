import * as React from "react";
import { motion } from "framer-motion";
import rocketIcon from "./images/rocketIcon.png"

export interface AnimationProps {
    xStart: number
}

export const RocketBarAnimation: React.FC<AnimationProps>  = ({xStart}) => {
    return (
        <>
            <div style={{position: "absolute", height: 5, width: "100%", top: "80%", backgroundColor: "white"}}>

            </div>

            <motion.div
                animate={{
                    // scale: [1, 2, 2, 1, 1],
                    // rotate: [0, 0, 270, 270, 0],
                    // x: [100, 200, 300, 400, 500],
                    x: [xStart, xStart + 200]
                    // borderRadius: ["20%", "20%", "50%", "50%", "20%"]
                }}

                style={{backgroundColor: "transparent"}}

                transition={{
                    duration: 3,
                    ease: "easeInOut",
                    times: [0, 1],
                    // loop: Infinity,
                    // repeatDelay: 1
                }}>
                <img alt={"Rocket Icon"} src={rocketIcon} style={{transform: "rotate(90deg)", marginTop: 120}} />
            </motion.div>
        </>
    );
};
