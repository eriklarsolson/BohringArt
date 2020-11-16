import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import square from "./images/square.png";
import circle from "./circle.png";
import triangle from "./images/triangle.png";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion"
import {SidebarModule} from "./SidebarModule";
export const TOOL_LASER = 'laser';
export const TOOL_OPTICS = 'optics';
export const TOOL_PRISM = 'prism';
export const TOOL_RECTANGLE = 'rectangle';
export const TOOL_ELLIPSE = 'ellipse';
export const TOOL_TRIANGLE = 'triangle';
export const TOOL_STAR = 'star';
export const TOOL_ERASER = 'eraser';

class Sidebar extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            currentArrow: "fa-arrow-down"
        }
    }

    render() {
        return (
            <>
               <Container style={{margin: "0", padding: "0", height: "100%", paddingRight: 20}}>
                   <div style={{position: "absolute", width: "100%", height: "100%", backgroundColor: "#29405B",
                       clipPath: "polygon(0 0, 80% 0, 100% 100%, 0 100%)"}} />

                   <Row>
                       <Col className={"col-10"}>
                           <h3 style={{paddingTop: "15px"}}>Modules</h3>
                       </Col>
                   </Row>

                   <Row style={{margin: 5, paddingLeft: 25}}>
                       <SidebarModule tool={this.props.tool} toolToShow={TOOL_LASER} flex={"0 0 66%"} maxWidth={"66%"}
                                      setTool={this.props.setTool} title={"Laser"} description={"A laser, or Light Amplification by Stimulated Emission of Radiation, is a concentrated beam of photons"} />
                   </Row>

                   <Row style={{margin: 5, paddingLeft: 25}}>
                       <SidebarModule tool={this.props.tool} toolToShow={TOOL_OPTICS} flex={"0 0 69%"} maxWidth={"69%"}
                                      setTool={this.props.setTool} title={"Lens"} description={"Curved plastic, glass, or other material useful in directing light in some manner, either for convergence or divergence of light"} />
                   </Row>

                   <Row style={{margin: 5, paddingLeft: 25}}>
                       <SidebarModule tool={this.props.tool} toolToShow={TOOL_PRISM} flex={"0 0 72%"} maxWidth={"72%"}
                                      setTool={this.props.setTool} title={"Prism"} description={"Commonly of a triangular shape, prisms can separate white light into a rainbow of colors"} />
                   </Row>

                   <Accordion defaultActiveKey="1" style={{marginRight: 5}}>
                       <Row style={{margin: 5, paddingLeft: 25}}>
                           <Col className="col-7" style={{marginLeft: 15, flex: "0 0 70%", maxWidth: "70%", minWidth: 150,
                               clipPath: "polygon(0 0, 94% 0, 100% 100%, 0 100%)"}}>
                               <Row className={"justify-content-center"}>
                                   <Col className="col-12" style={{backgroundColor: "#F8EDDD", paddingTop: 10, paddingBottom: 10}}>
                                       <button
                                           style={{width: "100px", height: "100px", backgroundColor: "transparent", border: 0}}
                                           className={this.props.tool === TOOL_RECTANGLE  ? 'item-active' : 'item'}
                                           onClick={() => this.props.setTool(TOOL_RECTANGLE)}
                                       >
                                           <img alt={"Square"} className="clickable-image" src={square} />
                                       </button>
                                   </Col>
                               </Row>

                               <Row className={"justify-content-center"} style={{backgroundColor: "#C4C4C4"}}>
                                   <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                       <i className="fa fa-arrow-down" style={{color: "#42949F"}} />
                                   </Accordion.Toggle>
                               </Row>

                               <Row className={"justify-content-center"} style={{backgroundColor: "#F8EDDD"}}>
                                   <Accordion.Collapse eventKey="0">
                                       <Container fluid style={{backgroundColor: "#F8EDDD"}}>
                                           <Row>
                                               <Col style={{margin: 5}}>
                                                   <button
                                                       style={{width: "100px", height: "100px", backgroundColor: "transparent", border: 0}}
                                                       className={this.props.tool === TOOL_ELLIPSE  ? 'item-active' : 'item'}
                                                       onClick={() => this.props.setTool(TOOL_ELLIPSE)}
                                                   >
                                                       <img alt={"Circle"} className="clickable-image" src={circle} />
                                                   </button>
                                               </Col>
                                           </Row>
                                           <Row>
                                               <Col style={{margin: 5}}>
                                                   <button
                                                       style={{width: "100px", height: "100px", backgroundColor: "transparent", border: 0}}
                                                       className={this.props.tool === TOOL_TRIANGLE  ? 'item-active' : 'item'}
                                                       onClick={() => this.props.setTool(TOOL_TRIANGLE)}
                                                   >
                                                       <img alt={"Triangle"} className="clickable-image" src={triangle} />
                                                   </button>
                                               </Col>
                                           </Row>
                                           {/*<Row>*/}
                                           {/*    <Col style={{margin: 5}}>*/}
                                           {/*        <button*/}
                                           {/*            style={{width: 75, height: 75, backgroundColor: "transparent", border: 0}}*/}
                                           {/*            className={this.props.tool === TOOL_STAR  ? 'item-active' : 'item'}*/}
                                           {/*            onClick={() => this.props.setTool(TOOL_STAR)}*/}
                                           {/*        >*/}
                                           {/*            <img src={star} />*/}
                                           {/*        </button>*/}
                                           {/*    </Col>*/}
                                           {/*</Row>*/}
                                       </Container>
                                   </Accordion.Collapse>
                               </Row>
                           </Col>
                       </Row>
                   </Accordion>

                   <Row style={{margin: 5, paddingLeft: 25, marginTop: 50}}>
                       <Col className="col-9">
                           <Button style={{width: "100%"}}
                                   className={"white-button"}
                                   onClick={() => this.props.setTool(TOOL_ERASER)}>Metal Filler (Eraser)</Button>
                       </Col>
                   </Row>

                   <Row style={{margin: 5, paddingLeft: 25}}>
                       <Col className="col-9">
                           <Button style={{width: "100%"}}
                                   className={"white-button"}
                                   onClick={this.props.clearCanvas}>Reset</Button>
                       </Col>
                   </Row>
               </Container>

            </>
        )
    }
}
export default Sidebar;