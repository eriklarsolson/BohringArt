import * as React from "react";
import { motion } from "framer-motion";
import {Container, Row, Col} from 'react-bootstrap'
import rocketIcon from "./images/rocketIcon.png"

export interface AnimationProps {

}

export const RocketBarAnimation: React.FC<AnimationProps>  = () => {
    return (
        <>
            <div style={{height: "100%", width: 10, backgroundColor: "white"}}>

            </div>

            <motion.div
                animate={{
                    // scale: [1, 2, 2, 1, 1],
                    // rotate: [0, 0, 270, 270, 0],
                    // x: [100, 200, 300, 400, 500],
                    y: [0, -1500]
                    // borderRadius: ["20%", "20%", "50%", "50%", "20%"]
                }}

                style={{backgroundColor: "transparent"}}

                transition={{
                    duration: 5,
                    ease: "easeInOut",
                    times: [0, 1],
                    loop: Infinity,
                    repeatDelay: 1
                }}>
                <img src={rocketIcon} />
            </motion.div>
        </>
    );
};
