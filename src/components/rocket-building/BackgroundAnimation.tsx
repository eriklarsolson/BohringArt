import * as React from "react";
import { motion } from "framer-motion";
import {Container, Row, Col} from 'react-bootstrap'
import stellarBackground from "../stellar-cycle/stellarBackground.png";

export const BackgroundAnimation: React.FC  = () => {
    return (
        <motion.div
            animate={{
                // scale: [1, 2, 2, 1, 1],
                // rotate: [0, 0, 270, 270, 0],
                x: [0, -500]
                // borderRadius: ["20%", "20%", "50%", "50%", "20%"]
            }}

            style={{
                height: "100%",
                width: 2500,
                position:"absolute",
                backgroundRepeat: "repeat",
                backgroundPosition: "0 0",
                backgroundImage:`url(${stellarBackground})`,
                backgroundSize: "auto 100%"}}

            transition={{
                duration: 5,
                ease: "linear",
                times: [0, 1],
                loop: Infinity,
            }} />
    );
};
