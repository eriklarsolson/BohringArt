import * as React from "react";
import {motion, useAnimation} from "framer-motion";
import { Container, Row, Col, Button } from 'react-bootstrap'
import viewpoint from "./images/Viewpoint.png"
import {useState} from "react";

export interface AnimationProps {
    setParentState: any
}

export const ViewpointInfoAnimation: React.FC<AnimationProps>  = ({setParentState}) => {
    const [open, setOpen] = useState<boolean>(true);
    const [animationStarted, setAnimatedStarted] = useState<boolean>(false);


    const setClosed = () => {
        setOpen(false)
        setParentState()
    }

    const controls = useAnimation()
    const hideBox = () => {

        controls.start({
            x: ["0%", "100%"],
            opacity: [1, 0],
            transition: {
                duration: 1.5,
                ease: "easeOut",
            },
        })

        setTimeout(() => {  setClosed() }, 1000);
    }

    if(!animationStarted) {
        controls.start({
            x: ["100%", "0%"],
            opacity: [0, 1],
            transition: {
                duration: 1.5,
                ease: "easeInOut",
                times: [0, 1]
            },
        })
        setAnimatedStarted(true)
    }

    return (
        <>
            <div style={{position: "absolute", width: "100%", height: "100%",
                backgroundColor: "black", opacity: 0.5}} />

            <motion.div
                animate={controls}

                style={{height: "100%"}}>

                <Container fluid style={{height: "100%"}}>
                    <Row style={{height: "100%"}}>
                        <Col className={"col-4 ml-auto"} style={{padding: 0}}>
                            <div style={{position: "absolute", width: "100%", height: "100%", backgroundColor: "#29405B"}} />

                            <Container>
                                <Row className={"justify-content-center"} style={{marginBottom: "10%"}}>

                                    <Col className={"col-3 ml-auto"} style={{padding: 0}}>
                                        <Button className={"green-button"} style={{float: "right", width: "100%"}}
                                                onClick={() => hideBox()}><i className="fa fa-arrow-right" /></Button>
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
                                    <Col className={"col-8"}>
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
