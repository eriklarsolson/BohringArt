import React from "react";
import {Button, Modal} from "react-bootstrap";
import { Container, Row, Col } from 'react-bootstrap'
import planet from "../../../shared/modals/Engraving/planet.png";
import logo from "../../../shared/modals/Engraving/logo.png";
import plant from "../../../shared/modals/Engraving/plant.png";
import snowman from "../../../shared/modals/Engraving/snowman.png";

class EngravingPopup extends React.Component<any, any> {
    render() {
        return (
            <Modal show={this.props.open}
                   onClick={this.props.closePopup}
                   size="lg"
                    style={{maxWidth: "1500px !important", padding: "30px"}}>
                <Modal.Body style={{color: "#29405B"}}>
                    <Container fluid>
                        <Row>
                            <Col className={"col-3"}>
                                <p style={{color: "#29405B", fontSize: "35px", fontWeight: "bold"}}>Stencil</p>
                            </Col>

                            <Col className={"col-3 ml-auto"}>
                                <Button className={"blue-button"} style={{float: "right", width: 50,
                                    clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)", fontWeight: "bold"}}>X</Button>
                            </Col>
                        </Row>

                        <Row style={{padding: 50,
                            clipPath: "polygon(0 0, 98% 0, 100% 100%, 2% 100%)"}}
                             className={"align-content-center justify-content-center"}>
                            <Col className="col-3" style={{backgroundColor: "#DBEAEF", clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}>
                                <img alt={"Planet"}
                                    src={planet}
                                    onClick={() => this.props.addStencil(planet)} />
                            </Col>

                            <Col className="col-3" style={{backgroundColor: "#DBEAEF", clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}>
                                <img alt={""}
                                    src={logo}
                                    onClick={() => this.props.addStencil(logo)} />
                            </Col>

                            <Col className="col-3" style={{backgroundColor: "#DBEAEF", clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}>
                                <img alt={""}
                                    src={plant}
                                    onClick={() => this.props.addStencil(plant)} />
                            </Col>

                            <Col className="col-3" style={{backgroundColor: "#DBEAEF", clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}>
                                <img alt={""}
                                    src={snowman}
                                    onClick={() => this.props.addStencil(snowman)} />
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        )
    }
}
export default EngravingPopup;