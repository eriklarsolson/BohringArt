import React from "react";
import {Button, Modal} from "react-bootstrap";
import { Container, Row, Col } from 'react-bootstrap'

class ErrorPopup extends React.Component<any, any> {
    render() {
        console.log(this.props.description)

        return (
            <Modal show={this.props.open}
                   onClick={this.props.closePopup}
                   size="lg"
                    style={{padding: "30px"}}>
                <Modal.Header closeButton>
                </Modal.Header>

                <Modal.Body style={{color: "#29405B"}}>
                    <Container fluid>
                        <Row style={{textAlign: "center", display: "block", paddingTop: "50px"}}>
                            <p style={{fontSize: "30px", fontWeight: "bold"}}>{this.props.title}</p>
                        </Row>

                        {/*TODO - pass in error list of multiple things to display?*/}
                        <Row  style={{display: "block", padding: "50px"}}>
                            <p style={{fontSize: "18px"}}>{this.props.description}</p>
                        </Row>
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