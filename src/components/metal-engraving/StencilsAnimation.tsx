import * as React from "react";
import {motion, useAnimation} from "framer-motion";
import { Container, Row, Col, Button } from 'react-bootstrap'
import {useState} from "react";
import logo from "./images/logo.png"
import planet from "./images/planet.png"
import plant from "./images/plant.png"
import snowman from "./images/snowman.png"

export interface AnimationProps {
    setParentState: any
    addStencil: any
}

export const StencilsAnimation: React.FC<AnimationProps>  = ({setParentState, addStencil}) => {
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

    const addStencilAndClose = (stencil: any) => {
        addStencil(stencil)
        hideBox()
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

                            <Container fluid style={{marginTop: 10}}>
                                <Row className={"justify-content-center"} style={{marginBottom: 100}}>

                                    <Col className={"col-3 ml-auto"}>
                                        <h1 style={{color: "white", textAlign: "left"}}>Stencils</h1>
                                    </Col>

                                    <Col className={"col-3 ml-auto"} style={{padding: 0}}>
                                        <Button className={"green-button"} style={{float: "right", width: "100%"}}
                                                onClick={() => hideBox()}><i className="fa fa-arrow-right" /></Button>
                                    </Col>
                                </Row>

                                <Row className={"justify-content-end"} style={{margin: 10}}>
                                    <Col className="col-7" style={{backgroundColor: "#DBEAEF", clipPath: "polygon(0 0, 100% 0, 100% 100%, 5% 100%)"}}>
                                        <img className={"clickable-image"}
                                             src={planet} alt={"Planet"}
                                             onClick={() => addStencilAndClose(planet)} />
                                    </Col>
                                </Row>

                                <Row className={"justify-content-end"} style={{margin: 10}}>
                                    <Col className="col-7" style={{backgroundColor: "#DBEAEF", flex: "0 0 55%", maxWidth: "55%",
                                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 5% 100%)"}}>
                                        <img className={"clickable-image"}
                                             src={logo} alt={"Logo"}
                                             onClick={() => addStencilAndClose(logo)} />
                                    </Col>
                                </Row>

                                <Row className={"justify-content-end"} style={{margin: 10}}>
                                    <Col className="col-7" style={{backgroundColor: "#DBEAEF", flex: "0 0 52%", maxWidth: "52%",
                                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 5% 100%)"}}>
                                        <img className={"clickable-image"}
                                             src={plant} alt={"Plant"}
                                             onClick={() => addStencilAndClose(plant)} />
                                    </Col>
                                </Row>

                                <Row className={"justify-content-end"} style={{margin: 10}}>
                                    <Col className="col-7" style={{backgroundColor: "#DBEAEF", flex: "0 0 49%", maxWidth: "49%",
                                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 5% 100%)"}}>
                                        <img className={"clickable-image"}
                                             src={snowman} alt={"Snowman"}
                                             onClick={() => addStencilAndClose(snowman)} />
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
