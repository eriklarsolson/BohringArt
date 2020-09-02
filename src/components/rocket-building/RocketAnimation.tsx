import * as React from "react";
import { motion } from "framer-motion";
import {Container, Row, Col} from 'react-bootstrap'
import booster_4_middle from "./images/boosters/booster_4_middle.png";

export interface AnimationProps {
    cone: any
    body: any
    engine: any
    booster: any
}

export const RocketAnimation: React.FC<AnimationProps>  = ({cone, body, engine, booster}) => {
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
            <Container fluid style={{transform: "rotate(90deg)", height: 500}}>
                <Row className={"justify-content-center"}>
                    {booster.middleImage !== null &&
                    <div style={{position: "absolute", width: "7%", left: "47%", top: "105%", zIndex: 10}}>
                        <img src={booster_4_middle} style={{width: "80%"}} />
                    </div>
                    }

                    <Col className={"col-1 align-self-end"} style={{padding: 0, flex: "0 0 60px", maxWidth: "60px"}}>
                        <img src={booster.leftImage} style={{width: "100%"}} />
                    </Col>

                    <Col className={"col-1"}>
                        <Row className={"justify-content-center"}>
                            <img src={cone.image} style={{width: "80%"}} />
                        </Row>

                        <Row className={"justify-content-center"}>
                            <img src={body.image} style={{width: "80%"}} />
                        </Row>

                        <Row className={"justify-content-center"}>
                            <img src={engine.image} style={{width: "80%"}} />
                        </Row>
                    </Col>

                    <Col className={"col-1 align-self-end"} style={{padding: 0, flex: "0 0 60px", maxWidth: "60px"}}>
                        <img src={booster.rightImage} style={{width: "100%"}} />
                    </Col>
                </Row>
            </Container>
        </motion.div>
    );
};
