import * as React from "react";
import { motion } from "framer-motion";
import {Container, Row, Col} from 'react-bootstrap'

export interface AnimationProps {
    images: any
}

export const RocketAnimation: React.FC<AnimationProps>  = ({images}) => {
    return (
        <motion.div
            animate={{
                // scale: [1, 2, 2, 1, 1],
                // rotate: [0, 0, 270, 270, 0],
                // x: [100, 200, 300, 400, 500],
                x: [0, 400]
                // borderRadius: ["20%", "20%", "50%", "50%", "20%"]
            }}

            transition={{
                duration: 80,
                ease: "linear",
                times: [0, 1],
                loop: Infinity,
                repeatDelay: 1
            }}>
            <Container fluid style={{transform: "rotate(90deg)"}}>
                <Row className={"justify-content-center"}>
                    <Col className={"col-1 align-self-end"}>
                        <img src={images[0]} />
                    </Col>

                    <Col className={"col-1"} style={{margin: 5}}>
                        <Row className={"justify-content-center"} style={{margin: 5}}>
                            <img src={images[3]} />
                        </Row>

                        <Row className={"justify-content-center"} style={{margin: 5}}>
                            <img src={images[2]} />
                        </Row>

                        <Row className={"justify-content-center"} style={{margin: 5}}>
                            <img src={images[1]} />
                        </Row>
                    </Col>

                    <Col className={"col-1 align-self-end"}>
                        <img src={images[0]} />
                    </Col>
                </Row>
            </Container>
        </motion.div>
    );
};
