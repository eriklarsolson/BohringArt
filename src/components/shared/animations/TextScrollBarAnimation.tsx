import * as React from "react";
import {motion, useAnimation} from "framer-motion";
import rocketIcon from "../../rocket-building/images/rocketIcon.png"
import {useState} from "react";

export interface AnimationProps {
    text: string
    runAnimation: boolean
}

export const TextScrollBarAnimation: React.FC<AnimationProps>  = ({text, runAnimation}) => {
    const [animationRan, setAnimationRan] = useState<boolean>(runAnimation);


    //TODO - Need to reset text position everytime it is called
    const controls = useAnimation()

    if(animationRan) {
        controls.start({
            x: ["100%", "-25%"],
            transition: {
                duration: 12,
                ease: "linear",
                times: [0, 1],
            },
        })

        setAnimationRan(false)
    }

    return (
        <>
            <motion.div
                animate={controls}

                style={{backgroundColor: "transparent"}}>
                <p style={{color: "white", fontSize: 20, fontWeight: "bold", marginTop: 5}}>{text}</p>
            </motion.div>
        </>
    );
};
