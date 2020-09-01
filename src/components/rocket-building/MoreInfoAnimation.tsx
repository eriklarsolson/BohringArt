import * as React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Button } from 'react-bootstrap'
import {useState} from "react";
import wire from "./grid/components/images/wire.png"
import battery from "./grid/components/images/battery.png"
import resistor from "./grid/components/images/resistor.png"
import lasercomponenticon from "./images/laser_COMPONENT.png";
import optics from "./images/optics.png";
import prism from "./images/prism.png";
import payload_1 from "./images/payloads/payload_1.png"
import interstage_1 from "./images/interstages/interstage_1.png"
import sideBooster_1 from "./images/sideBoosters/sideBooster_1.png"
import engine_1 from "./images/engines/engine_1.png"

export interface AnimationProps {
    setParentState: any
}

export const MoreInfoAnimation: React.FC<AnimationProps>  = ({setParentState}) => {
    const [open, setOpen] = useState<boolean>(true);
    const [title, setTitle] = useState<string>("WIRE");
    const [description, setDescription] = useState<string>("A conducting, metal rod designed to transfer charges. Electrons can flow through these with little to no resistance, typically. However, making a wire longer increases resistance but thickening it decreases resistance.");

    let xStart = 1200;
    let xEnd = 400;

    const setClosed = () => {
        setOpen(false)
        setParentState()
    }

    const changeInfo = (module: string) => {
        if (module === "Cone") {
            setTitle("CONE")
            setDescription("The top piece of the rocket which encounters the most air resistance. Contains the payload being sent off into space. Also contains people sometimes.")
        } else if (module === "Body") {
            setTitle("BODY")
            setDescription("Usually contains the majority of the rocket’s fuel, the oxidizer(useful for igniting fuel) as well as fuel injection and pump systems.")
        } else if (module === "SideBooster") {
            setTitle("SIDE BOOSTER")
            setDescription("Contains the combustion chamber and nozzle. The combustion chamber burns the fuel stored in the rocket and the nozzle lets out gas, propelling the rocket upward. ")
        } else if (module === "Engine") {
            setTitle("ENGINE")
            setDescription("Disposable boosters help give the rocket extra propulsion into space, and can be detached after use to decrease overall mass.")
        }
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
                }}

                transition={{
                    duration: 1,
                    ease: "easeOut",
                    times: [0, 1],
                }}>

                <Container fluid>
                    <Row>
                        <Col className={"col-7 vh-100 ml-auto"}>
                            <div style={{position: "absolute", width: "100%", height: "100%", backgroundColor: "#29405B",
                                clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)"}} />

                            <div style={{position: "absolute", height: "100%", left: -165}}>
                                <Container fluid>
                                    <Row style={{margin: 5, marginLeft: 10, width: 175}}>
                                        <Col className="col-12" onMouseOver={() => changeInfo("Cone")}
                                             style={{height: 100, backgroundColor: "#F8EDDD", clipPath: "polygon(0 0, 93% 0, 100% 100%, 5% 100%)"}}>
                                            <img src={payload_1} style={{height: "100%", padding: 10}}  />
                                        </Col>
                                    </Row>

                                    <Row style={{margin: 5, marginLeft: 20, width: 175}}>
                                        <Col className="col-12" onMouseOver={() => changeInfo("Body")}
                                             style={{height: 100, backgroundColor: "#F8EDDD", clipPath: "polygon(0 0, 93% 0, 100% 100%, 5% 100%)"}}>
                                            <img src={interstage_1} style={{height: "100%", transform: "rotate(90deg)"}}  />
                                        </Col>
                                    </Row>

                                    <Row style={{margin: 5, marginLeft: 30, width: 175}}>
                                        <Col className="col-12" onMouseOver={() => changeInfo("SideBooster")}
                                             style={{height: 100, backgroundColor: "#F8EDDD", clipPath: "polygon(0 0, 93% 0, 100% 100%, 5% 100%)"}}>
                                            <img src={sideBooster_1} style={{height: "100%", transform: "rotate(90deg)"}}  />
                                        </Col>
                                    </Row>

                                    <Row style={{margin: 5, marginLeft: 40, width: 175}}>
                                        <Col className="col-12" onMouseOver={() => changeInfo("Engine")}
                                             style={{height: 100, backgroundColor: "#F8EDDD", clipPath: "polygon(0 0, 93% 0, 100% 100%, 5% 100%)"}}>
                                            <img src={engine_1} style={{height: "100%", padding: 10}} />
                                        </Col>
                                    </Row>
                                </Container>
                            </div>

                            <Container fluid>
                                <Row>
                                    <Col className={"col-7"}>
                                        <Button className={"green-button"} style={{float: "right", width: 100,
                                            clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                onClick={() => setClosed()}><i className="fa fa-arrow-right" /></Button>
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"} style={{marginTop: 100}}>
                                    <Col className={"col-8"} style={{textAlign: "left", color: "white"}}>
                                        <h1>{title}</h1>
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"}>
                                    <Col className={"col-8"} style={{textAlign: "left", color: "white", paddingRight: 250}}>
                                        <p>{description}</p>
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
