import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import lasercomponenticon from "./images/laser_COMPONENT.png";
import optics from "./images/optics.png";
import prism from "./images/prism.png";
import square from "./square.png";
import circle from "./circle.png";
import triangle from "./triangle.png";
import star from "./star.png";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion"
import {Card} from "@material-ui/core";
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

        }
    }
    render() {
        return (
            <>
               <Container style={{margin: "0", padding: "0", height: "100%"}}>
                   <div style={{position: "absolute", width: "100%", height: "100%", backgroundColor: "#29405B",
                       clipPath: "polygon(0 0,90% 0, 100% 100%, 0 100%)"}} />

                   <h3 style={{paddingTop: "15px"}}>Modules</h3>

                   <Row className={"justify-content-center"} style={{margin: "5px"}}>
                       <SidebarModule tool={this.props.tool} toolToShow={TOOL_LASER} setTool={this.props.setTool} title={"laser"} description={"laser description"} />
                   </Row>

                   <Row className={"justify-content-center"} style={{margin: "5px"}}>
                       <SidebarModule tool={this.props.tool} toolToShow={TOOL_OPTICS} setTool={this.props.setTool} title={"optics"} description={"optics description"} />
                   </Row>

                   <Row className={"justify-content-center"} style={{margin: "5px"}}>
                       <SidebarModule tool={this.props.tool} toolToShow={TOOL_PRISM} setTool={this.props.setTool} title={"prism"} description={"prism description"} />
                   </Row>

                   <Accordion defaultActiveKey="1">
                       <Container>
                           <Row className={"justify-content-center"}>
                               <Col className="col-8" style={{backgroundColor: "#F8EDDD", paddingTop: 10, paddingBottom: 10}}>
                                   <button
                                       style={{width: 75, height: 75, backgroundColor: "transparent", border: 0}}
                                       className={this.props.tool === TOOL_RECTANGLE  ? 'item-active' : 'item'}
                                       onClick={() => this.props.setTool(TOOL_RECTANGLE)}
                                   >
                                       <img src={square} />
                                   </button>
                               </Col>
                           </Row>
                           <Row className={"justify-content-center"}>
                               <Col className="col-8" style={{backgroundColor: "#C4C4C4"}}>
                                   <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                       <i className="fa fa-arrow-down" style={{color: "#42949F"}} />
                                   </Accordion.Toggle>
                               </Col>
                           </Row>
                           <Row className={"justify-content-center"}>
                               <Col className="col-8" style={{backgroundColor: "#F8EDDD"}}>
                                   <Accordion.Collapse eventKey="0">
                                       <Container fluid>
                                           <Row>
                                               <Col style={{margin: 5}}>
                                                   <button
                                                       style={{width: 75, height: 75, backgroundColor: "transparent", border: 0}}
                                                       className={this.props.tool === TOOL_ELLIPSE  ? 'item-active' : 'item'}
                                                       onClick={() => this.props.setTool(TOOL_ELLIPSE)}
                                                   >
                                                       <img src={circle} />
                                                   </button>
                                               </Col>
                                           </Row>
                                           <Row>
                                               <Col style={{margin: 5}}>
                                                   <button
                                                       style={{width: 75, height: 75, backgroundColor: "transparent", border: 0}}
                                                       className={this.props.tool === TOOL_TRIANGLE  ? 'item-active' : 'item'}
                                                       onClick={() => this.props.setTool(TOOL_TRIANGLE)}
                                                   >
                                                       <img src={triangle} />
                                                   </button>
                                               </Col>
                                           </Row>
                                           <Row>
                                               <Col style={{margin: 5}}>
                                                   <button
                                                       style={{width: 75, height: 75, backgroundColor: "transparent", border: 0}}
                                                       className={this.props.tool === TOOL_STAR  ? 'item-active' : 'item'}
                                                       onClick={() => this.props.setTool(TOOL_STAR)}
                                                   >
                                                       <img src={star} />
                                                   </button>
                                               </Col>
                                           </Row>
                                       </Container>
                                   </Accordion.Collapse>
                               </Col>
                           </Row>
                       </Container>
                   </Accordion>

                   <Row className={"justify-content-center"} style={{marginTop: 50}}>
                       <Col className={"col-4"}>
                           <Button style={{backgroundColor: "#F8EDDD", width: "100px", color: "black",
                               fontSize: "18px", clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                   onClick={this.props.clearCanvas}>Reset</Button>
                       </Col>

                       <Col className={"col-4"}>
                           <Button style={{backgroundColor: "#F8EDDD", width: "100px", color: "black",
                               fontSize: "18px", clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                   className={this.props.tool === TOOL_ERASER  ? 'item-active' : 'item'}
                                   onClick={() => this.props.setTool(TOOL_ERASER)}>Eraser</Button>
                       </Col>
                   </Row>
               </Container>

            </>
        )
    }
}
export default Sidebar;