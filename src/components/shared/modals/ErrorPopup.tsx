import React from "react";
import {Button, Col, Modal} from "react-bootstrap";
import { Container, Row } from 'react-bootstrap'

class ErrorPopup extends React.Component<any, any> {
    render() {
        console.log(this.props.description)

        return (
            <Modal show={this.props.open}
                   onClick={this.props.closePopup}
                   size="lg"
                    style={{padding: "30px"}}>

                <Modal.Body style={{color: "#29405B"}}>
                    <Container fluid>
                        <Row>
                            <Col className={"col-2 ml-auto"}>
                                <Button className={"blue-button"} style={{float: "right", width: 50,
                                    fontWeight: "bold"}}>X</Button>
                            </Col>
                        </Row>

                        <Container fluid style={{padding: 100}}>
                            <Row style={{textAlign: "center", display: "block", paddingTop: "50px"}}>
                                <p style={{fontSize: "30px", fontWeight: "bold"}}>{this.props.title}</p>
                            </Row>

                            <Row  style={{display: "block", padding: "50px"}}>
                                <p style={{fontSize: "18px"}}>{this.props.description}</p>
                            </Row>
                        </Container>
                    </Container>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary"  onClick={this.props.closePopup}>
                        Fix Now
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
export default ErrorPopup;