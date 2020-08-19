import React from "react";
import {Button, Modal} from "react-bootstrap";
import { Container, Row, Col } from 'react-bootstrap'
import concave from "../../telescope-activity/grid/components/images/concave.png";
import convex from "../../telescope-activity/grid/components/images/convex.png";
import flatmirror from "../../telescope-activity/grid/components/images/flatmirror.png";
import viewpoint from "../../telescope-activity/grid/components/images/viewpoint.png";


class TelescopeQuestionPopup extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: "Concave",
            description: "concave description",
        }
    }
    render() {
        const loadModuleDescription = (module: string) => {
            if (module === "Concave") {
                this.setState({title: "Concave", description: "Concave description"})
            } else if (module === "Convex") {
                this.setState({title: "Convex", description: "Convex description"})
            } else if (module === "Flat Mirror") {
                this.setState({title: "Flat Mirror", description: "Flat Mirror description"})
            } else if (module === "Viewpoint") {
                this.setState({title: "Viewpoint", description: "Viewpoint description"})
            }
        }

        return (
            <Modal show={this.props.open}
                   onClick={this.props.closePopup}
                   size="lg"
                   style={{maxWidth: "1500px !important", padding: "30px"}}>
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
                                    <Col className={"col-12"} style={{backgroundColor: "#F8EDDD"}}>
                                        <img src={concave}
                                             style={{width: "100px", height: "100px"}}
                                             onMouseOver={() => loadModuleDescription("Concave")} />
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"} style={{margin: "5px"}}>
                                    <Col className={"col-12"} style={{backgroundColor: "#F8EDDD"}}>
                                        <img src={convex}
                                             style={{width: "100px", height: "100px"}}
                                             onMouseOver={() => loadModuleDescription("Convex")} />
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"} style={{margin: "5px"}}>
                                    <Col className={"col-12"} style={{backgroundColor: "#F8EDDD"}}>
                                        <img src={flatmirror}
                                             style={{width: "100px", height: "100px"}}
                                             onMouseOver={() => loadModuleDescription("Flat Mirror")} />
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"} style={{margin: "5px"}}>
                                    <Col className={"col-12"} style={{backgroundColor: "#F8EDDD"}}>
                                        <img src={viewpoint}
                                             style={{width: "100px", height: "100px"}}
                                             onMouseOver={() => loadModuleDescription("Viewpoint")} />
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
export default TelescopeQuestionPopup;