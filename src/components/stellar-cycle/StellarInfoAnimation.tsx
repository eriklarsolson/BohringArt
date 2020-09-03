import * as React from "react";
import { motion } from "framer-motion";

export interface AnimationProps {
    image: any
}

export const StellarInfoAnimation: React.FC<AnimationProps>  = ({image}) => {
    return (
        <motion.div
            animate={{
                // scale: [1, 2, 2, 1, 1],
                // rotate: [0, 0, 270, 270, 0],
                // x: [100, 200, 300, 400, 500],
                x: [-750, 0]
                // borderRadius: ["20%", "20%", "50%", "50%", "20%"]
            }}

            transition={{
                duration: 3,
                ease: "easeOut",
                times: [0, 1],
            }}>
            <img alt={"Stellar Object"} src={image} style={{minWidth: 400}} />
        </motion.div>
    );
};
