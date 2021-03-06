import React from "react";
import {Button, Modal} from "react-bootstrap";
import { Container, Row, Col } from 'react-bootstrap'

class StellarPropertiesPopup extends React.Component<any, any> {
    render() {
        return (
            <Modal show={this.props.open}
                   onClick={this.props.closePopup}
                   size="xl"
                    style={{padding: "30px"}}>

                <Modal.Body style={{color: "#29405B"}}>
                    <Container fluid>
                        <Row>
                            <Col className={"col-2 ml-auto"}>
                                <Button className={"blue-button"} style={{float: "right", width: 50, fontWeight: "bold"}}>X</Button>
                            </Col>
                        </Row>

                        <Container fluid style={{padding: 100}}>
                            <Row>
                                <Col className={"col-12"}>
                                    <p style={{fontSize: 30, fontWeight: "bold"}}>Relation between mass and temperature/size</p>
                                </Col>
                            </Row>

                            <Row className={"justify-content-center"}>
                                <Col className={"col-12"}>
                                    <p style={{fontSize: "18px"}}>Now that you have slightly adjusted the mass of your star, you have been given more attributes to alter. Make sure to notice the relationship between all the variables present. Whatever settings you keep for your star will ultimately determine its fate!</p>
                                </Col>
                            </Row>

                            <Row className={"justify-content-center align-content-center"} style={{marginTop: 50}}>
                                <Button variant="primary" className={"green-button"} style={{float: "right", width: "25%",
                                    clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}} onClick={this.props.closePopup}>
                                    Got it!
                                </Button>
                            </Row>
                        </Container>
                    </Container>
                </Modal.Body>
            </Modal>
        )
    }
}
export default StellarPropertiesPopup;