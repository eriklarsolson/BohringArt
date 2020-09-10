import * as React from "react";
import {motion, useAnimation} from "framer-motion";
import { Container, Row, Col, Button } from 'react-bootstrap'
import {useState} from "react";
import cone_1 from "./images/cones/cone_1.png"
import body_1 from "./images/bodys/body_1.png"
import booster_4_middle from "./images/boosters/booster_4_middle.png"
import engine_1 from "./images/engines/engine_1.png"

export interface AnimationProps {
    closePopup: any
    title: string
    description: string[]
}

export const ErrorSlideOut: React.FC<AnimationProps>  = ({closePopup, title, description}) => {
    const [open, setOpen] = useState<boolean>(true);
    const [animationStarted, setAnimatedStarted] = useState<boolean>(false);


    const setClosed = () => {
        setOpen(false)
        closePopup()
    }

    const controls = useAnimation()
    const hideBox = () => {

        controls.start({
            y: ["0%", "100%"],
            opacity: [1, 0],
            transition: {
                duration: 1,
                ease: "easeOut",
            },
        })

        setTimeout(() => {  setClosed() }, 750);
    }

    if(!animationStarted) {
        controls.start({
            y: ["100%", "0%"],
            opacity: [0, 1],
            transition: {
                duration: 1,
                ease: "easeInOut",
                times: [0, 1]
            },
        })
        setAnimatedStarted(true)
    }

    return (
        <>
            <motion.div
                animate={controls}

                style={{height: "100%"}}>

                <Container fluid style={{height: "100%"}}>
                    <Row style={{height: "100%"}}>
                        <Col className={"col-8 col-md-8 col-lg-4 mr-auto"} style={{padding: 0, border: "2px solid #29405B"}}>
                            <div style={{position: "absolute", width: "100%", height: "100%", backgroundColor: "#F8EDDD",}} />

                            <Container fluid>
                                <Row>
                                    <Col className={"col-3 ml-auto"} style={{padding: 0}}>
                                        <Button className={"green-button"} style={{float: "right", width: "100%"}}
                                                onClick={() => hideBox()}><i className="fa fa-arrow-down" /></Button>
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"} style={{marginTop: 100}}>
                                    <Col className={"col-8"} style={{textAlign: "left"}}>
                                        <p style={{color: "#29405B", fontWeight: "bold", fontSize: 30}}>{title}</p>
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"}>
                                    <Col className={"col-8"} style={{textAlign: "left", color: "#29405B"}}>
                                        <p style={{whiteSpace: "pre-line", fontSize: 16}}>{description}</p>
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
