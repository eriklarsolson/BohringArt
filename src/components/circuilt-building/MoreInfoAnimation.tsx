import * as React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Button } from 'react-bootstrap'
import {useState} from "react";
import wire from "./grid/components/images/wire.png"
import battery from "./grid/components/images/battery.png"
import resistor from "./grid/components/images/resistor.png"
import switchPic from "./grid/components/images/switch.png"
import capacitor from "./grid/components/images/capacitor.png"
import inductor from "./grid/components/images/inductor.png"


export interface AnimationProps {
    setParentState: any
}

export const MoreInfoAnimation: React.FC<AnimationProps>  = ({setParentState}) => {
    const [open, setOpen] = useState<boolean>(true);

    let xStart = 1200;
    let xEnd = 400;

    const setClosed = () => {
        setOpen(false)
        setParentState()
    }

    return (
        <>

            <motion.div
                animate={{
                    // scale: [1, 2, 2, 1, 1],
                    // rotate: [0, 0, 270, 270, 0],
                    // x: [100, 200, 300, 400, 500],
                    x: [1200, 400]
                    // borderRadius: ["20%", "20%", "50%", "50%", "20%"]
                }}

                transition={{
                    duration: 2,
                    ease: "linear",
                    times: [0, 1],
                }}>

                <Container>
                    <Row>
                        <div style={{position: "absolute", width: "50%", height: "100%", clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)",
                            backgroundColor: "black", opacity: 0.3}} />

                        <Col className={"col-7 vh-100 ml-auto"}>
                            <div style={{position: "absolute", width: "100%", height: "100%", backgroundColor: "#29405B",
                                clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)"}} />

                            <div style={{position: "absolute", height: "100%", left: -165}}>
                                <Container fluid>
                                    <Row style={{margin: 5, marginLeft: -5, width: 175}}>
                                        <Col className="col-12" style={{height: 100, backgroundColor: "#F8EDDD", clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}>
                                            <img src={wire} />
                                        </Col>
                                    </Row>

                                    <Row style={{margin: 5, marginLeft: 5, width: 175}}>
                                        <Col className="col-12" style={{height: 100, backgroundColor: "#F8EDDD", clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}>
                                            <img src={battery} />
                                        </Col>
                                    </Row>

                                    <Row style={{margin: 5, marginLeft: 10, width: 175}}>
                                        <Col className="col-12" style={{height: 100, backgroundColor: "#F8EDDD", clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}>
                                            <img src={resistor} />
                                        </Col>
                                    </Row>

                                    <Row style={{margin: 5, marginLeft: 20, width: 175}}>
                                        <Col className="col-12" style={{height: 100, backgroundColor: "#F8EDDD", clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}>
                                            <img src={switchPic} />
                                        </Col>
                                    </Row>

                                    <Row style={{margin: 5, marginLeft: 25, width: 175}}>
                                        <Col className="col-12-10" style={{height: 100, backgroundColor: "#F8EDDD", clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}>
                                            <img src={capacitor} />
                                        </Col>
                                    </Row>

                                    <Row style={{margin: 5, marginLeft: 35, width: 175}}>
                                        <Col className="col-12" style={{height: 100, backgroundColor: "#F8EDDD", clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}>
                                            <img src={inductor} />
                                        </Col>
                                    </Row>

                                    <Row style={{margin: 5, marginLeft: 40, width: 175}}>
                                        <Col className="col-12" style={{height: 100, backgroundColor: "#F8EDDD", clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}>
                                            <img src={wire} />
                                        </Col>
                                    </Row>

                                    <Row style={{margin: 5, marginLeft: 50, width: 175}}>
                                        <Col className="col-12" style={{height: 100, backgroundColor: "#F8EDDD", clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}>
                                            <img src={wire} />
                                        </Col>
                                    </Row>
                                </Container>
                            </div>

                            <Container fluid>
                                <Row>
                                    <Col className={"col-11"}>
                                        <Button className={"green-button"} style={{float: "right", width: 100,
                                            clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                onClick={() => setClosed()}><i className="fa fa-arrow-right" /></Button>
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"} style={{marginTop: 100}}>
                                    <Col className={"col-8"} style={{textAlign: "left", color: "white"}}>
                                        <h1>BATTERY</h1>
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"}>
                                    <Col className={"col-8"} style={{textAlign: "left", color: "white"}}>
                                        <p>The description goes here</p>
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
