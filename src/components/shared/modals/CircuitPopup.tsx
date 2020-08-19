import React from "react";
import {Button, Modal} from "react-bootstrap";
import { Container, Row, Col } from 'react-bootstrap'
import wire from "../../circuilt-building/grid/components/images/wire.png"
import battery from "../../circuilt-building/grid/components/images/battery.png"
import resistor from "../../circuilt-building/grid/components/images/resistor.png"
import switchImg from "../../circuilt-building/grid/components/images/switch.png"
import inductor from "../../circuilt-building/grid/components/images/inductor.png"
import capacitor from "../../circuilt-building/grid/components/images/capacitor.png"

class CircuitPopup extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: "Wire",
            description: "Wire description",
        }
    }

    render() {
        const loadModuleDescription = (module: string) => {
            if (module === "Wire") {
                this.setState({title: "Wire", description: "Wire description"})
            } else if (module === "Battery") {
                this.setState({title: "Battery", description: "Battery description"})
            } else if (module === "Resistor") {
                this.setState({title: "Resistor", description: "Resistor description"})
            } else if (module === "Switch") {
                this.setState({title: "Switch", description: "Switch description"})
            } else if (module === "Inductor") {
                this.setState({title: "Inductor", description: "Inductor description"})
            } else if (module === "Capacitor") {
                this.setState({title: "Capacitor", description: "Capacitor description"})
            }
        }

        return (
            <Modal show={this.props.open}
                   onClick={this.props.closeCircuitPopup}
                   size="lg"
                    style={{maxWidth: "1500px !important", padding: "30px"}}>
                <Modal.Header closeButton>
                </Modal.Header>

                <Modal.Body style={{color: "#29405B"}}>
                    <Container fluid>
                        <Row style={{textAlign: "center", display: "block"}}>
                            <p style={{color: "#29405B", fontSize: "30px", fontWeight: "bold"}}>Modules</p>
                        </Row>

                        <Row style={{padding: "10px"}}>
                            <Col className={"col-3 align-content-center justify-content-center vh-50"} style={{height: "500px"}}>
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
                            </Col>

                            <Col className={"align-content-center justify-content-center"} style={{width: "100%", height: "500px",
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

                            <Col className={"col-3 align-content-center justify-content-center"} style={{height: "500px"}}>
                                <Row className={"justify-content-center"} style={{margin: "5px"}}>
                                    <Col className={"col-12"} style={{backgroundColor: "#F8EDDD"}}>
                                        <img src={switchImg}
                                             style={{width: "100px", height: "100px"}}
                                             onMouseOver={() => loadModuleDescription("Switch")} />
                                    </Col>
                                </Row>

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
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        )
    }
}
export default CircuitPopup;