import * as React from "react";
import { motion } from "framer-motion";
import {Container, Row, Col} from 'react-bootstrap'

export interface AnimationProps {
    images: any
}

export const Animation: React.FC<AnimationProps>  = ({images}) => {
    return (
        <motion.div
            animate={{
                // scale: [1, 2, 2, 1, 1],
                // rotate: [0, 0, 270, 270, 0],
                // x: [100, 200, 300, 400, 500],
                x: [0, 2500]
                // borderRadius: ["20%", "20%", "50%", "50%", "20%"]
            }}

            transition={{
                duration: 6,
                ease: "easeInOut",
                times: [0, 1],
                loop: Infinity,
                repeatDelay: 1
            }}>
            <Container fluid>
                <Row>
                    <Col>
                        <img src={images[0]} style={{transform: "rotate(90deg)"}} />
                    </Col>
                </Row>

                <Row>
                    <Col className={"col-3"}>
                        <img src={images[1]} style={{transform: "rotate(90deg)"}} />
                    </Col>

                    <Col className={"col-3"}>
                        <img src={images[2]} style={{transform: "rotate(90deg)"}} />
                    </Col>

                    <Col className={"col-3"}>
                        <img src={images[3]} style={{transform: "rotate(90deg)"}} />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <img src={images[0]} style={{transform: "rotate(90deg)"}} />
                    </Col>
                </Row>
            </Container>
        </motion.div>
    );
};
