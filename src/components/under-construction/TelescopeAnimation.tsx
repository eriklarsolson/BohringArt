import * as React from "react";
import { motion } from "framer-motion";
import telescope from "./telescope.png";

export const TelescopeAnimation: React.FC  = () => {
    return (
        <motion.div
            animate={{
                // scale: [1, 2, 2, 1, 1],
                // rotate: [0, 0, 270, 270, 0],
                // x: [100, 200, 300, 400, 500],
                x: [800, 50]
                // borderRadius: ["20%", "20%", "50%", "50%", "20%"]
            }}

            transition={{
                duration: 6,
                ease: "easeOut",
                times: [0, 1],
            }}>
            <img alt={"Telescope"} src={telescope} style={{width: 500}} />
        </motion.div>
    );
};
