import * as React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Button } from 'react-bootstrap'
import viewpoint from "./images/Viewpoint.png"
import {useState} from "react";

export interface AnimationProps {
    setParentState: any
}

export const ViewpointInfoAnimation: React.FC<AnimationProps>  = ({setParentState}) => {
    const [open, setOpen] = useState<boolean>(true);

    const setClosed = () => {
        setOpen(false)
        setParentState()
    }

    return (
        <>
            <div style={{position: "absolute", width: "100%", height: "100%",
                backgroundColor: "black", opacity: 0.5}} />

            <motion.div
                animate={{
                    // scale: [1, 2, 2, 1, 1],
                    // rotate: [0, 0, 270, 270, 0],
                    // x: [100, 200, 300, 400, 500],
                    x: [1200, 400],
                    opacity: [0, 1]
                    // borderRadius: ["20%", "20%", "50%", "50%", "20%"]
                }}

                transition={{
                    duration: 1,
                    ease: "easeOut",
                    times: [0, 1],
                }}>

                <Container>
                    <Row>
                        <Col className={"col-10 vh-100 ml-auto"}>
                            <div style={{position: "absolute", width: "100%", height: "100%", backgroundColor: "#29405B",
                                clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)"}} />

                            <Container>
                                <Row className={"justify-content-center"} style={{marginBottom: "10%"}}>

                                    <Col className={"col-8"}>
                                        <Button className={"green-button"} style={{float: "right", width: 100,
                                            clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                onClick={() => setClosed()}><i className="fa fa-arrow-right" /></Button>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <h2 style={{color: "white"}}>
                                            Viewpoint
                                        </h2>
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"} style={{marginBottom: 150}}>
                                    <Col className={"col-10"}>
                                        <p style={{color: "white"}}>
                                            This viewpoint is to show how the laser light interacts with the lens piece. The light is focused by the lens, thus making the outgoing light might stronger than the initial, allowing it to make a deeper cut
                                        </p>
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"}>
                                    <Col className={"col-6"}>
                                        <img alt={"Viewpoint"} src={viewpoint} style={{width: "100%", transform: "rotate(90deg)"}} />
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </motion.div>
        </>
    );
};
