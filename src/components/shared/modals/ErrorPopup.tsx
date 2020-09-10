import React from "react";
import {Button, Col, Modal} from "react-bootstrap";
import { Container, Row } from 'react-bootstrap'
import {setComponentsList} from "../../telescope-activity/grid/Functionality";

class ErrorPopup extends React.Component<any, any> {
    render() {
        console.log(this.props.description)

        return (
            <Modal show={this.props.open}
                   onClick={this.props.closePopup}
                   size="xl"
                    style={{padding: 20}}>

                <Modal.Body style={{color: "#29405B", backgroundColor : "#F8EDDD"}}>
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
                                <p style={{fontSize: "18px", whiteSpace: "pre-line"}}>{this.props.description}</p>
                            </Row>

                            <Row className={"justify-content-center"}>
                                <Col className={"col-3"}>
                                    <Button style={{width: "100%", float: "right",
                                        clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                            className={"blue-button"} onClick={this.props.closePopup}>Reset</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                </Modal.Body>
            </Modal>
        )
    }
}
export default ErrorPopup;