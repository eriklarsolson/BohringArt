import React from "react";
import {Button, Modal} from "react-bootstrap";
import { Container, Row, Col } from 'react-bootstrap'
import payload_1 from "../../rocket-building/images/payloads/payload_1.png"
import interstage_1 from "../../rocket-building/images/interstages/interstage_1.png"
import sideBooster_1 from "../../rocket-building/images/sideBoosters/sideBooster_1.png"
import engine_1 from "../../rocket-building/images/engines/engine_1.png"

class RocketBuildingQuestionPopup extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: "Payload",
            description: "Payload description",
        }
    }
    render() {
        const loadModuleDescription = (module: string) => {
            if (module === "Payload") {
                this.setState({title: "Payload", description: "Payload description"})
            } else if (module === "Interstage") {
                this.setState({title: "Interstage", description: "Interstage description"})
            } else if (module === "SideBooster") {
                this.setState({title: "Side Booster", description: "Side Booster description"})
            } else if (module === "Engine") {
                this.setState({title: "Engine", description: "Engine description"})
            }
        }

        return (
            <Modal show={this.props.open}
                   onClick={this.props.closePopup}
                   size="xl"
                   style={{padding: "30px"}}>
                <Modal.Header closeButton>
                </Modal.Header>

                <Modal.Body style={{color: "#29405B"}}>
                    <Container fluid>
                        <Row style={{textAlign: "center", display: "block"}}>
                            <p style={{color: "#29405B", fontSize: "30px", fontWeight: "bold"}}>Modules</p>
                        </Row>

                        <Row className={"justify-content-center"} style={{padding: "10px"}}>
                            <Col className={"col-3 align-content-center justify-content-center vh-50"} style={{height: "500px"}}>
                                <Row className={"justify-content-center"} style={{margin: "5px"}}>
                                    <Col className={"col-10"} style={{backgroundColor: "#F8EDDD"}}
                                         onMouseOver={() => loadModuleDescription("Payload")} >
                                        <img src={payload_1}
                                             style={{height: "100px"}} />
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"} style={{margin: "5px"}}>
                                    <Col className={"col-10"} style={{backgroundColor: "#F8EDDD"}}
                                         onMouseOver={() => loadModuleDescription("Interstage")}>
                                        <img src={interstage_1}
                                             style={{height: "100px"}}/>
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"} style={{margin: "5px"}}>
                                    <Col className={"col-10"} style={{backgroundColor: "#F8EDDD"}}
                                         onMouseOver={() => loadModuleDescription("SideBooster")}>
                                        <img src={sideBooster_1}
                                             style={{height: "100px"}} />
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"} style={{margin: "5px"}}>
                                    <Col className={"col-10"} style={{backgroundColor: "#F8EDDD"}}
                                         onMouseOver={() => loadModuleDescription("Engine")}>
                                        <img src={engine_1}
                                             style={{height: "100px"}} />
                                    </Col>
                                </Row>
                            </Col>

                            <Col className={"align-content-center justify-content-center"} style={{width: "100%", height: "500px",
                                backgroundColor: "#DBEAEF", color: "#29405B", marginLeft: "5%", marginRight: "5%", padding: 15}}>
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
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        )
    }
}
export default RocketBuildingQuestionPopup;