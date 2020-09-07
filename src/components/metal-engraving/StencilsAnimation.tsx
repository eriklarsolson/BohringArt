import * as React from "react";
import { motion } from "framer-motion";
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

    const setClosed = () => {
        setOpen(false)
        setParentState()
    }

    const addStencilAndClose = (stencil: any) => {
        addStencil(stencil)
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
                    x: ["100%", "0%"],
                    opacity: [0, 1]
                    // borderRadius: ["20%", "20%", "50%", "50%", "20%"]
                }}

                style={{height: "100%"}}

                transition={{
                    duration: 1,
                    ease: "easeOut",
                    times: [0, 1],
                }}>

                <Container fluid style={{height: "100%"}}>
                    <Row style={{height: "100%"}}>
                        <Col className={"col-4 ml-auto"} style={{padding: 0}}>
                            <div style={{position: "absolute", width: "100%", height: "100%", backgroundColor: "#29405B",
                                clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)"}} />

                            <Container fluid style={{marginTop: 10}}>
                                <Row className={"justify-content-center"} style={{marginBottom: 100}}>

                                    <Col className={"col-3 ml-auto"}>
                                        <h1 style={{color: "white", textAlign: "left"}}>Stencils</h1>
                                    </Col>

                                    <Col className={"col-3 ml-auto"} style={{padding: 0}}>
                                        <Button className={"green-button"} style={{float: "right", width: "100%"}}
                                                onClick={() => setClosed()}><i className="fa fa-arrow-right" /></Button>
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
                                    <Col className="col-7" style={{backgroundColor: "#DBEAEF", flex: "0 0 50%", maxWidth: "50%",
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
