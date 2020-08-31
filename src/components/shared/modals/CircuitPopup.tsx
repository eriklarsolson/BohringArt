import React from "react";
import {Button, Modal} from "react-bootstrap";
import { Container, Row, Col } from 'react-bootstrap'
import wire from "../../circuilt-building/grid/components/images/wire.png"
import battery from "../../circuilt-building/grid/components/images/battery.png"
import resistor from "../../circuilt-building/grid/components/images/resistor.png"
import switchImg from "../../circuilt-building/grid/components/images/switch.png"
import inductor from "../../circuilt-building/grid/components/images/inductor.png"
import capacitor from "../../circuilt-building/grid/components/images/capacitor.png"
import square from "../../metal-engraving/images/square.png"

class CircuitPopup extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: "Wire",
            description: "A conducting, metal rod designed to transfer charges. Electrons can flow through these with little to no resistance, typically. However, making a wire longer increases resistance but thickening it decreases resistance. ",
        }
    }

    render() {
        const loadModuleDescription = (module: string) => {
            if (module === "Wire") {
                this.setState({title: "Wire", description: "A conducting, metal rod designed to transfer charges. Electrons can flow through these with little to no resistance, typically. However, making a wire longer increases resistance but thickening it decreases resistance. "})
            } else if (module === "Battery") {
                this.setState({title: "Battery", description: "Designed to deliver energy to the circuit via electrons flowing from the negative to the positive terminal(side). Batteries are essential components to numerous household products. The flow of electrons is a result of a chemical potential difference between the two sides of the battery; the energy across a concentration of atoms can be different between the two sides, resulting in the flow of energy from the more energetic side to the less. "})
            } else if (module === "Resistor") {
                this.setState({title: "Resistor", description: "A device designed to restrict the flow of electrons in the circuit. A resistor itself is nothing more than a dense wire. A good analogy for resistors is cars in traffic; a car can definitely move faster and easier in an empty road vs a congested one. Therefore, in a resistor, current, the measure of the flow of electrons, drops. Also, note that since electrons heat up the material itself, the current experiences a drop in energy, measured in Volts.   "})
            } else if (module === "Switch") {
                this.setState({title: "Switch", description: "Circuit component used to redirect the flow of current to another pathway, also can be used for stopping the flow of electricity by breaking the connection in a pathway."})
            } else if (module === "Inductor") {
                this.setState({title: "Inductor", description: "A coil of wire which,when a current flows through it,produces a magnetic field. Similarly, a magnetic field passing through this coil can induce a current in the wire. An inductor stores the electric energy that flows through the wire in the magnetic surrounding the coil.\n"})
            } else if (module === "Capacitor") {
                this.setState({title: "Capacitor", description: "Two oppositely charged, parallel plates separated by air or another insulator that store electric energy and charge. The larger the voltage that a battery applies to a capacitor, the larger the charge on each plate. The larger the charge, the larger the capacitance of the capacitor. This capacitance describes the capacitor’s ability to store electric energy and charge."})
            } else if (module === "Series") {
                this.setState({title: "Series Circuit", description: "A circuit with one branch for charges in the circuit to flow through. Since there is only one pathway, charges must flow through all components on that path. This circuit configuration can be compared to driving down a one-way street with one lane, you cannot deviate from the path. Because the charges cannot split between pathways the current (charges moving per second) is the same. Capacitors in this configuration function like a parallel circuit for just resistors. "})
            } else if (module === "Parallel") {
                this.setState({title: "Parallel Circuit", description: "A circuit with numerous branches for charges in the circuit to flow through, much like choosing which road to take on the interstate. This refers to the placement of components like wires, resistors, and capacitors. Since the charges now “see” multiple pathways, the current(charges moving per second), is split between the branches depending on the components themselves. Capacitors in this configuration function like a series circuit for just resistors."})
            }
        }

        return (
            <Modal show={this.props.open}
                   onClick={this.props.closeCircuitPopup}
                   size="xl"
                    style={{maxWidth: "1500px !important", padding: "30px"}}>

                <Modal.Body style={{color: "#29405B"}}>
                    <Container fluid>
                        <Row>
                            <Col className={"col-3"}>
                                <p style={{color: "#29405B", fontSize: "35px", fontWeight: "bold"}}>Modules</p>
                            </Col>

                            <Col className={"col-3 ml-auto"}>
                                <Button className={"blue-button"} style={{float: "right", width: 50,
                                    clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)", fontWeight: "bold"}}>X</Button>
                            </Col>
                        </Row>

                        <Row className={"justify-content-center"} style={{padding: "10px"}}>
                            <Col className={"col-2 align-content-center justify-content-center vh-50"} style={{height: "500px"}}>
                                <Row className={"justify-content-center"} style={{margin: "5px"}}>
                                    <Col className={"col-12"} style={{backgroundColor: "#F8EDDD"}}>
                                        <img src={wire}
                                             style={{width: "100px", height: "100px"}}
                                             onMouseOver={() => loadModuleDescription("Wire")} />
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"} style={{margin: "5px"}}>
                                    <Col className={"col-12"} style={{backgroundColor: "#F8EDDD"}}>
                                        <img src={battery}
                                             style={{width: "100px", height: "100px"}}
                                             onMouseOver={() => loadModuleDescription("Battery")} />
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"} style={{margin: "5px"}}>
                                    <Col className={"col-12"} style={{backgroundColor: "#F8EDDD"}}>
                                        <img src={resistor}
                                             style={{width: "100px", height: "100px"}}
                                             onMouseOver={() => loadModuleDescription("Resistor")} />
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"} style={{margin: "5px"}}>
                                    <Col className={"col-12"} style={{backgroundColor: "#F8EDDD"}}>
                                        <img src={switchImg}
                                             style={{width: "100px", height: "100px"}}
                                             onMouseOver={() => loadModuleDescription("Switch")} />
                                    </Col>
                                </Row>
                            </Col>

                            <Col className={"col-6 align-content-center justify-content-center"} style={{width: "100%", height: "500px",
                                color: "#29405B", backgroundColor: "#DBEAEF", marginLeft: "5%", marginRight: "5%"}}>
                                <Row>
                                    <Col>
                                        <h3>{this.state.title}</h3>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p>{this.state.description}</p>
                                    </Col>
                                </Row>
                            </Col>

                            <Col className={"col-2 align-content-center justify-content-center"} style={{height: "500px"}}>
                                <Row className={"justify-content-center"} style={{margin: "5px"}}>
                                    <Col className={"col-12"} style={{backgroundColor: "#F8EDDD"}}>
                                        <img src={inductor}
                                             style={{width: "100px", height: "100px"}}
                                             onMouseOver={() => loadModuleDescription("Inductor")} />
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"} style={{margin: "5px"}}>
                                    <Col className={"col-12"} style={{backgroundColor: "#F8EDDD"}}>
                                        <img src={capacitor}
                                             style={{width: "100px", height: "100px"}}
                                             onMouseOver={() => loadModuleDescription("Capacitor")} />
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"} style={{margin: "5px"}}>
                                    <Col className={"col-12"} style={{backgroundColor: "#F8EDDD"}}>
                                        <img src={square}
                                             style={{width: "100px", height: "100px"}}
                                             onMouseOver={() => loadModuleDescription("Series")} />
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"} style={{margin: "5px"}}>
                                    <Col className={"col-12"} style={{backgroundColor: "#F8EDDD"}}>
                                        <img src={square}
                                             style={{width: "100px", height: "100px"}}
                                             onMouseOver={() => loadModuleDescription("Parallel")} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        )
    }
}
export default CircuitPopup;