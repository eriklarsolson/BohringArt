import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import lasercomponenticon from "./lasercomponenticon.png";
import optics from "./optics.png";
import prism from "./prism.png";
import square from "./square.png";
import circle from "./circle.png";
import triangle from "./triangle.png";
import star from "./star.png";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion"
import {Card} from "@material-ui/core";
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
            moduleIndex: 0,
            moduleProperties: [
                {
                    rightValue: 0,
                    zIndex: -1,
                    tooltipShowing: false,
                    title: "laser",
                    description: "laser description"
                },
                {
                    rightValue: 0,
                    zIndex: -1,
                    tooltipShowing: false,
                    title: "optics",
                    description: "optics description"
                },
                {
                    rightValue: 0,
                    zIndex: -1,
                    tooltipShowing: false,
                    title: "prism",
                    description: "prism description"
                }
            ]
        }
    }
    render() {
        let tooltipStyle: React.CSSProperties = {
            position: "absolute",
            right: this.state.moduleProperties[this.state.moduleIndex].rightValue,
            top: 50,
            width: 400,
            height: "auto",
            minHeight: 100,
            backgroundColor: "rgba(82, 82, 82, 0.9)",
            transition: ".3s ease-in-out",
            zIndex: this.state.moduleProperties[this.state.moduleIndex].zIndex,
            textAlign: "left",
        }

        const showTooltip = (index: number) => {
            let modules = [...this.state.moduleProperties];
            let module = {...modules[index]};

            if(this.state.moduleProperties[index].tooltipShowing) {
                module.rightValue = 0;
                module.zIndex = -1;
                module.tooltipShowing = false;
            } else {
                module.rightValue = -350;
                module.zIndex = 1;
                module.tooltipShowing = true;
            }

            modules[index] = module;
            this.setState({moduleIndex: index, moduleProperties: modules});
        }

        const hideTooltip = (index: number) => {
            let modules = [...this.state.moduleProperties];
            let module = {...modules[index]};

            module.rightValue = 0;
            module.zIndex = -1;
            module.tooltipShowing = false;

            modules[index] = module;
            this.setState({moduleProperties: modules});
        }

        return (
            <>
               <Container style={{backgroundColor: "#29405B", margin: "0", padding: "0", height: "100%"}}>
                   <h3 style={{paddingTop: "15px"}}>Modules</h3>

                   <Row className={"justify-content-center"} style={{margin: "5px"}}>
                       <Col className={"col-8"} style={{backgroundColor: "white"}} onMouseOut={() => hideTooltip(0)}
                            onMouseOver={() => showTooltip(0)}>
                           <img src={lasercomponenticon}
                               style={{width: "100px", height: "100px"}}
                               className={this.props.tool === TOOL_LASER  ? 'item-active' : 'item'}
                               onClick={() => this.props.setTool(TOOL_LASER)} />
                       </Col>

                       <div style={tooltipStyle}>
                           <Container fluid>
                               <Row style={{padding: 0}}>
                                   <p style={{fontWeight: "bold", margin: 0}}>{this.state.moduleProperties[0].title}</p>
                               </Row>
                               <Row style={{padding: 0}}>
                                   {this.state.moduleProperties[0].description}
                               </Row>
                           </Container>
                       </div>
                   </Row>

                   <Row className={"justify-content-center"} style={{margin: "5px"}} onMouseOut={() => hideTooltip(1)}
                        onMouseOver={() => showTooltip(1)}>
                       <Col className={"col-8"} style={{backgroundColor: "white"}}>
                           <img src={optics}
                                style={{width: "100px", height: "100px"}}
                                className={this.props.tool === TOOL_OPTICS  ? 'item-active' : 'item'}
                                onClick={() => this.props.setTool(TOOL_OPTICS)} />
                       </Col>

                       <div style={tooltipStyle}>
                           <Container fluid>
                               <Row style={{padding: 0}}>
                                   <p style={{fontWeight: "bold", margin: 0}}>{this.state.moduleProperties[1].title}</p>
                               </Row>
                               <Row style={{padding: 0}}>
                                   {this.state.moduleProperties[1].description}
                               </Row>
                           </Container>
                       </div>
                   </Row>

                   <Row className={"justify-content-center"} style={{margin: "5px"}} onMouseOut={() => hideTooltip(2)}
                        onMouseOver={() => showTooltip(2)}>
                       <Col className={"col-8"} style={{backgroundColor: "white"}}>
                           <img src={prism}
                                style={{width: "100px", height: "100px"}}
                                className={this.props.tool === TOOL_PRISM  ? 'item-active' : 'item'}
                                onClick={() => this.props.setTool(TOOL_PRISM)} />
                       </Col>

                       <div style={tooltipStyle}>
                           <Container fluid>
                               <Row style={{padding: 0}}>
                                   <p style={{fontWeight: "bold", margin: 0}}>{this.state.moduleProperties[2].title}</p>
                               </Row>
                               <Row style={{padding: 0}}>
                                   {this.state.moduleProperties[2].description}
                               </Row>
                           </Container>
                       </div>
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