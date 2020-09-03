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
import series from "./grid/components/images/series.png"
import parallel from "./grid/components/images/parallel.png"

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
        if (module === "Wire") {
            setTitle("WIRE")
            setDescription("A conducting, metal rod designed to transfer charges. Electrons can flow through these with little to no resistance, typically. However, making a wire longer increases resistance but thickening it decreases resistance. ")
        } else if (module === "Battery") {
            setTitle("BATTERY")
            setDescription("Designed to deliver energy to the circuit via electrons flowing from the negative to the positive terminal(side). Batteries are essential components to numerous household products. The flow of electrons is a result of a chemical potential difference between the two sides of the battery; the energy across a concentration of atoms can be different between the two sides, resulting in the flow of energy from the more energetic side to the less. ")
        } else if (module === "Resistor") {
            setTitle("RESISTOR")
            setDescription("A device designed to restrict the flow of electrons in the circuit. A resistor itself is nothing more than a dense wire. A good analogy for resistors is cars in traffic; a car can definitely move faster and easier in an empty road vs a congested one. Therefore, in a resistor, current, the measure of the flow of electrons, drops. Also, note that since electrons heat up the material itself, the current experiences a drop in energy, measured in Volts.")
        } else if (module === "Switch") {
            setTitle("SWITCH")
            setDescription("Circuit component used to redirect the flow of current to another pathway, also can be used for stopping the flow of electricity by breaking the connection in a pathway.")
        } else if (module === "Inductor") {
            setTitle("INDUCTOR")
             setDescription("A coil of wire which,when a current flows through it,produces a magnetic field. Similarly, a magnetic field passing through this coil can induce a current in the wire. An inductor stores the electric energy that flows through the wire in the magnetic surrounding the coil.")
        } else if (module === "Capacitor") {
            setTitle("CAPACITOR")
            setDescription("Two oppositely charged, parallel plates separated by air or another insulator that store electric energy and charge. The larger the voltage that a battery applies to a capacitor, the larger the charge on each plate. The larger the charge, the larger the capacitance of the capacitor. This capacitance describes the capacitor’s ability to store electric energy and charge.")
        } else if (module === "Series") {
            setTitle("SERIES CIRCUIT")
            setDescription("A circuit with one branch for charges in the circuit to flow through. Since there is only one pathway, charges must flow through all components on that path. This circuit configuration can be compared to driving down a one-way street with one lane, you cannot deviate from the path. Because the charges cannot split between pathways the current (charges moving per second) is the same. Capacitors in this configuration function like a parallel circuit for just resistors. ")
        } else if (module === "Parallel") {
            setTitle("PARALLEL CIRCUIT")
            setDescription("A circuit with numerous branches for charges in the circuit to flow through, much like choosing which road to take on the interstate. This refers to the placement of components like wires, resistors, and capacitors. Since the charges now “see” multiple pathways, the current(charges moving per second), is split between the branches depending on the components themselves. Capacitors in this configuration function like a series circuit for just resistors.")
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
                    x: [1200, 350],
                    opacity: [0, 1]
                    // borderRadius: ["20%", "20%", "50%", "50%", "20%"]
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
                                        <Col className="col-12" onMouseOver={() => changeInfo("Wire")}
                                             style={{height: 100, backgroundColor: "#F8EDDD", clipPath: "polygon(0 0, 93% 0, 100% 100%, 5% 100%)"}}>
                                            <img src={wire} />
                                        </Col>
                                    </Row>

                                    <Row style={{margin: 5, marginLeft: 20, width: 175}}>
                                        <Col className="col-12" onMouseOver={() => changeInfo("Battery")}
                                             style={{height: 100, backgroundColor: "#F8EDDD", clipPath: "polygon(0 0, 93% 0, 100% 100%, 5% 100%)"}}>
                                            <img src={battery} />
                                        </Col>
                                    </Row>

                                    <Row style={{margin: 5, marginLeft: 30, width: 175}}>
                                        <Col className="col-12" onMouseOver={() => changeInfo("Resistor")}
                                             style={{height: 100, backgroundColor: "#F8EDDD", clipPath: "polygon(0 0, 93% 0, 100% 100%, 5% 100%)"}}>
                                            <img src={resistor} />
                                        </Col>
                                    </Row>

                                    <Row style={{margin: 5, marginLeft: 40, width: 175}}>
                                        <Col className="col-12" onMouseOver={() => changeInfo("Switch")}
                                             style={{height: 100, backgroundColor: "#F8EDDD", clipPath: "polygon(0 0, 93% 0, 100% 100%, 5% 100%)"}}>
                                            <img src={switchPic} />
                                        </Col>
                                    </Row>

                                    <Row style={{margin: 5, marginLeft: 50, width: 175}}>
                                        <Col className="col-12" onMouseOver={() => changeInfo("Capacitor")}
                                             style={{height: 100, backgroundColor: "#F8EDDD", clipPath: "polygon(0 0, 93% 0, 100% 100%, 5% 100%)"}}>
                                            <img src={capacitor} />
                                        </Col>
                                    </Row>

                                    <Row style={{margin: 5, marginLeft: 65, width: 175}}>
                                        <Col className="col-12" onMouseOver={() => changeInfo("Inductor")}
                                             style={{height: 100, backgroundColor: "#F8EDDD", clipPath: "polygon(0 0, 93% 0, 100% 100%, 5% 100%)"}}>
                                            <img src={inductor} />
                                        </Col>
                                    </Row>

                                    <Row style={{margin: 5, marginLeft: 80, width: 175}}>
                                        <Col className="col-12" onMouseOver={() => changeInfo("Series")}
                                             style={{height: 100, backgroundColor: "#F8EDDD", clipPath: "polygon(0 0, 93% 0, 100% 100%, 5% 100%)"}}>
                                            <img src={series} style={{height: "100%", padding: 20}} />
                                        </Col>
                                    </Row>

                                    <Row style={{margin: 5, marginLeft: 90, width: 175}}>
                                        <Col className="col-12" onMouseOver={() => changeInfo("Parallel")}
                                             style={{height: 100, backgroundColor: "#F8EDDD", clipPath: "polygon(0 0, 93% 0, 100% 100%, 5% 100%)"}}>
                                            <img src={parallel} style={{height: "100%", padding: 20}} />
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
