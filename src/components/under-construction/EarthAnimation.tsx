import * as React from "react";
import { motion } from "framer-motion";
import earth from "./earth.png";

export const EarthAnimation: React.FC  = () => {
    return (
        <motion.div
            animate={{
                rotate: [0, 2500],
            }}
            transition={{
                duration: 100,
                ease: "linear",
                times: [0, 1],
            }}>
            <img alt={"Earth"} src={earth} style={{width: 750}} />
        </motion.div>
    );
};
