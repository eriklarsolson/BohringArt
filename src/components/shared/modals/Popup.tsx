import React from "react";
import {Button, Modal} from "react-bootstrap";
import { Container, Row, Col } from 'react-bootstrap'

class Popup extends React.Component<any, any> {
    render() {
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

                        <Row  style={{display: "block", padding: "50px"}}>
                            <p style={{fontSize: "18px"}}>{this.props.description}</p>
                        </Row>

                        <Row className={"justify-content-center align-content-center"} style={{paddingBottom: "50px"}}>
                            <Button variant="primary" className={"green-button"} style={{float: "right", width: "25%",
                                clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}} onClick={this.props.closePopup}>
                                Got it!
                            </Button>
                        </Row>
                    </Container>
                </Modal.Body>

                {/*<Modal.Footer>*/}
                {/*    /!*<Button variant="secondary" >*!/*/}
                {/*    /!*    Close*!/*/}
                {/*    /!*</Button>*!/*/}
                {/*</Modal.Footer>*/}
            </Modal>
        )
    }
}
export default Popup;