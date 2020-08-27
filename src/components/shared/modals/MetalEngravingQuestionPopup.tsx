import React from "react";
import {Button, Modal} from "react-bootstrap";
import { Container, Row, Col } from 'react-bootstrap'
import lasercomponenticon from "../../metal-engraving/images/laser_COMPONENT.png";
import optics from "../../metal-engraving/images/optics.png";
import prism from "../../metal-engraving/images/prism.png";
import {TOOL_LASER, TOOL_OPTICS, TOOL_PRISM} from "../../metal-engraving/Sidebar";

class MetalEngravingQuestionPopup extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: "Laser",
            description: "laser description",
        }
    }
    render() {
        const loadModuleDescription = (module: string) => {
            if (module === "laser") {
                this.setState({title: "Laser", description: "Laser description"})
            } else if (module === "optics") {
                this.setState({title: "Lens", description: "Converging/Convex- A lens that focuses incoming light to a " +
                        "single point. This is due to the outward curvature of the lens itself; light is refracted " +
                        "towards a point of con vergence, forming an image. Refraction When light enters one medium " +
                        "different from the one it is currently traveling through, it will change its speed, resulting " +
                        "in a change in the direction of movement. An example of a change in medium is going from air to " +
                        "water. Snell’s Law Law comparing angles of entry of the light and indices of refraction of mediums " +
                        "Index of refraction A measure of a medium’s ability to bend incoming light away from its angle of" +
                        "incidence, index of refraction of air is one."})
            } else if (module === "prism") {
                this.setState({title: "Prism", description: "Prism description"})
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
                                         onMouseOver={() => loadModuleDescription("laser")}>
                                        <img src={lasercomponenticon}
                                             style={{width: "100px", height: "100px"}} />
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"} style={{margin: "5px"}}>
                                    <Col className={"col-10"} style={{backgroundColor: "#F8EDDD"}}
                                         onMouseOver={() => loadModuleDescription("optics")}>
                                        <img src={optics}
                                             style={{width: "100px", height: "100px"}} />
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"} style={{margin: "5px"}}>
                                    <Col className={"col-10"} style={{backgroundColor: "#F8EDDD"}}
                                         onMouseOver={() => loadModuleDescription("prism")}>
                                        <img src={prism}
                                             style={{width: "100px", height: "100px"}} />
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
export default MetalEngravingQuestionPopup;