import * as React from "react";
import { motion } from "framer-motion";
import long_bg from "./images/long_bg.png";

export const BackgroundAnimation: React.FC  = () => {
    return (
        <motion.div
            layout
            animate={{
                // rotate: [0, 0, 270, 270, 0],
                x: [0, 5000]
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
            <img alt={"Stellar Background"} src={long_bg} />
        </motion.div>
    );
};
