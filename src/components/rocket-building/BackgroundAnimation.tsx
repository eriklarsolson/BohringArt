import * as React from "react";
import { motion } from "framer-motion";
import {Container, Row, Col} from 'react-bootstrap'
import stellarBackground from "../stellar-cycle/stellarBackground.png";

export const BackgroundAnimation: React.FC  = () => {
    return (
        <motion.div
            layout
            animate={{
                scale: [1, 2],
                // rotate: [0, 0, 270, 270, 0],
                // y: [0, -500]
                // borderRadius: ["20%", "20%", "50%", "50%", "20%"]
            }}

            style={{
                zIndex: -1,
                height: "100%",
                width: "100%",
                position:"absolute",
                backgroundRepeat: "repeat",
                overflow: "hidden"
            }}

            transition={{
                duration: 30,
                ease: "linear",
                times: [0, 1],
                loop: Infinity,
            }}>
            <img src={stellarBackground} />
        </motion.div>
    );
};
