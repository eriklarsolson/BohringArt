import React from "react";
import {Button, Modal} from "react-bootstrap";
import { Container, Row, Col } from 'react-bootstrap'
import viewpoint from "./Viewpoint.png"

class ViewpointPopup extends React.Component<any, any> {
    render() {
        return (
            <Modal show={this.props.open}
                   onClick={this.props.closePopup}
                   size="lg"
                    style={{maxWidth: "1500px !important", padding: "30px"}}>
                <Modal.Body style={{color: "#29405B"}}>
                    <Container fluid>
                        <Row>
                            <Col className={"col-10"}>
                                <p style={{color: "#29405B", fontSize: 25, fontWeight: "bold"}}>Pop-up Viewpoint: Lens Focusing Light on Metal</p>
                            </Col>

                            <Col className={"col-1 ml-auto"}>
                                <Button className={"blue-button"} style={{float: "right", width: 50,
                                    clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)", fontWeight: "bold"}}>X</Button>
                            </Col>
                        </Row>

                        <Row style={{padding: "10px"}} className={"align-content-center justify-content-center"}>
                            <Col>
                                <img src={viewpoint} width={"100%"} />
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        )
    }
}
export default ViewpointPopup;