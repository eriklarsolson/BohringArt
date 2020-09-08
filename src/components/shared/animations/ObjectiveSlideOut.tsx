import * as React from "react";
import {motion, useAnimation} from "framer-motion";
import { Container, Row, Col, Button } from 'react-bootstrap'
import {useState} from "react";
import cone_1 from "./images/cones/cone_1.png"
import body_1 from "./images/bodys/body_1.png"
import booster_4_middle from "./images/boosters/booster_4_middle.png"
import engine_1 from "./images/engines/engine_1.png"

export interface AnimationProps {
    setParentState: any
    title: string
    description: string
}

export const ObjectiveSlideOut: React.FC<AnimationProps>  = ({setParentState, title, description}) => {
    const [open, setOpen] = useState<boolean>(true);

    const setClosed = () => {
        setOpen(false)
        setParentState()
    }

    const controls = useAnimation()
    const hideBox = () => {

        controls.start({
            x: [0, -2000],
            opacity: [1, 0],
            transition: {
                duration: 1.5,
                ease: "easeOut",
            },
        })

        setTimeout(() => {  setClosed() }, 1200);
    }

    let rowHeight = "100%";
    if(title === "03 To The Stars") {
        rowHeight = "80%"
    }

    return (
        <>
            <div style={{position: "absolute", width: "100%", height: "100%",
                backgroundColor: "black", opacity: 0.5}} />

            <motion.div
                animate={controls}
                style={{height: "100%"}}>

                <Container fluid style={{height: "100%"}}>
                    <Row style={{height: rowHeight}}>
                        <Col className={"align-self-center col-10 mr-auto"} style={{padding: 0}}>
                            <div style={{position: "absolute", width: "100%", height: "100%", backgroundColor: "#F8EDDD",
                                clipPath: "polygon(0 0, 95% 0, 100% 100%, 0 100%)"}} />

t                          <Container fluid style={{padding: 100, margin: 50}}>
                                <Row className={"justify-content-center"}>
                                    <Col className={"col-8"}>
                                        <p style={{fontSize: 40, fontWeight: "bold", color: "#29405B", textAlign: "left"}}>{title}</p>
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"}>
                                    <Col className={"col-8"}>
                                        <p style={{fontSize: 18, color: "#29405B", textAlign: "left"}}>{description}</p>
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center align-content-center"} style={{marginTop: 50}}>
                                    <Col className={"col-8"}>
                                        <Button variant="primary" className={"green-button"} style={{float: "right", width: "25%",
                                            clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}} onClick={() => hideBox()}>
                                            Got it!
                                        </Button>
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
