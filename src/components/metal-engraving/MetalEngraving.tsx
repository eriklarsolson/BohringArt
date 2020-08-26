import React from "react";
import {Container, Row, Col, Modal} from 'react-bootstrap'
import Sidebar from "./Sidebar";
import Button from "react-bootstrap/Button";
import Popup from "../shared/modals/Popup";
import Canvas from "./Canvas";
import EngravingPopup from "../shared/modals/Engraving/EngravingPopup";
import laser_OFF from "./images/laser_OFF.png";
import laser_WHITE from "./images/laser_WHITE.png"
import laser_RED from "./images/laser_RED.png"
import laser_YELLOW from "./images/laser_YELLOW.png"
import laser_GREEN from "./images/laser_GREEN.png"
import laser_BLUE from "./images/laser_BLUE.png"
import laser_PINK from "./images/laser_PINK.png"
import optics from "./images/optics_small.png";
import prism from "./images/prism_small.png";
import {Slider, Typography, withStyles} from "@material-ui/core";
import ViewpointPopup from "../shared/modals/ViewpointPopup";
import CircuitPopup from "../shared/modals/CircuitPopup";
import MetalEngravingQuestionPopup from "../shared/modals/MetalEngravingQuestionPopup";
import SizeSlider from "./SizeSlider";

export const TOOL_LASER = 'laser';
export const TOOL_OPTICS = 'optics';
export const TOOL_PRISM = 'prism';
export const TOOL_RECTANGLE = 'rectangle';
export const TOOL_ELLIPSE = 'ellipse';
export const TOOL_TRIANGLE = 'triangle';
export const TOOL_STAR = 'star';
export const TOOL_ERASER = 'eraser';

class MetalEngraving extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            popupOpened: true,
            questionPopupOpened: false,
            engravingPopupOpened: false,
            viewpointPopupOpened: false,
            tool: TOOL_LASER,
            size: 15,
            color: '#FFFFFF',
            fill: false,
            fillColor: '#444444',
            items: [],
            canvasRef: React.createRef(),
            cursor: laser_WHITE,
            toolActive: true,
        };
    }

    render() {
        const openPopup = () => {
            this.setState({popupOpened: true})
        }

        const closePopup = () => {
            this.setState({popupOpened: false})
        }

        const openEngravingPopup = () => {
            this.setState({engravingPopupOpened: true})
        }

        const closeEngravingPopup = () => {
            this.setState({engravingPopupOpened: false})
        }

        const toggleViewpointPopup = () => {
            this.setState({viewpointPopupOpened: !this.state.viewpointPopupOpened})
        }

        const cycleQuestionPopup = () => {
            this.setState({questionPopupOpened: !this.state.questionPopupOpened})
        }

        const setTool = (tool: string) => {
            this.setState({tool: tool})

            if(tool === TOOL_LASER) {
                this.setState({cursor: laser_WHITE})
            } else if(tool === TOOL_OPTICS) {
                this.setState({cursor: optics})
            } else if(tool === TOOL_PRISM) {
                this.setState({cursor: prism})
            } else {
                this.setState({cursor: null})
            }
        }

        const changeSize = (event: any, newValue: any) => {
            this.setState({size: newValue})
        }

        const clearCanvas = () => {
            const canvas: HTMLCanvasElement = this.state.canvasRef.current;
            const context = canvas.getContext('2d');
            context?.clearRect(0, 0, canvas.width, canvas.height);
        }

        const addStencil = (object: any) => {
            const canvas: HTMLCanvasElement = this.state.canvasRef.current;
            const context = canvas.getContext('2d');

            const image = new Image();
            image.src = object

            //Only allowed one stencil at a time, so clear canvas each time one is added
            clearCanvas();

            context?.drawImage(image, 100, 20, 600, 600);
        }

        const rightClick = (event: { preventDefault: () => void; }) => {
            if(this.state.tool === TOOL_LASER) {
                event.preventDefault()

                if(this.state.toolActive) {
                    this.setState({cursor: laser_OFF })
                    this.setState({toolActive: false})
                } else {
                    this.setState({cursor: getActiveLaserIcon()})
                    this.setState({toolActive: true})
                }
            }
        }

        const getActiveLaserIcon = () => {
            const color = this.state.color;

            switch (color) {
                case "#FFFFFF":
                    return laser_WHITE
                case "#EB3324":
                    return laser_RED
                case "#F2F551":
                    return laser_YELLOW
                case "#76FA68":
                    return laser_GREEN
                case "#3686F7":
                    return laser_BLUE
                case "#EA3690":
                    return laser_PINK
                default:
                    return laser_OFF
            }
        }

        const setColor = (color: string) => {
            switch (color) {
                case "#FFFFFF":
                    this.setState({color: color, cursor: laser_WHITE})
                    break;
                case "#EB3324":
                    this.setState({color: color, cursor: laser_RED})
                    break;
                case "#F2F551":
                    this.setState({color: color, cursor: laser_YELLOW})
                    break;
                case "#76FA68":
                    this.setState({color: color, cursor: laser_GREEN})
                    break;
                case "#3686F7":
                    this.setState({color: color, cursor: laser_BLUE})
                    break;
                case "#EA3690":
                    this.setState({color: color, cursor: laser_PINK})
                    break;
                default:
                    this.setState({color: color, cursor: laser_OFF})
                    break;
            }
        }

        return (
            <>
                <MetalEngravingQuestionPopup open={this.state.questionPopupOpened} closePopup={cycleQuestionPopup} />

                <Popup title={"02 Laser and Lenses Objective"}
                       open={this.state.popupOpened}
                       description={"Using lasers, prisms, and lenses, create an " +
                          "artistic design on a metal sheet. The laser can be altered to include numerous shapes, colors, and widths " +
                          "beneficial to the engraving. You can use the UNDO and RESET buttons to change any mistakes on your design. " +
                          "Once you are satisfied with your creation, press the NEXT button to move on to the telescope building part " +
                          "of the optics activity. Click OBJECTIVE to see the objective for this activity."}
                       closePopup={closePopup} />

               <EngravingPopup open={this.state.engravingPopupOpened} closePopup={closeEngravingPopup}
                               addStencil={addStencil} />

                <ViewpointPopup open={this.state.viewpointPopupOpened} closePopup={toggleViewpointPopup} />

                <Container fluid className={"d-flex h-100 flex-column"} style={{margin: "0", padding: "0", backgroundColor: "#F8EDDD"}}>
                    <Row className={"flex-grow-1"} style={{margin: 0}}>
                        <Col className={"col-2 vh-100"} style={{color: "white", padding: 0}}>
                            <Sidebar tool={this.state.tool} color={this.state.color} size={this.state.size}
                                     setTool={setTool} clearCanvas={clearCanvas} />
                        </Col>

                        <Col className={"col-8"} style={{margin: "0", padding: "0"}}>
                            <Container fluid style={{margin: "0", padding: "0", cursor: `url(${this.state.cursor}), auto`}}>
                                <Row style={{margin: "3%"}}>
                                    <Col className={"col-3"}>
                                        <Button className={"green-button"} style={{float: "left", width: 100,
                                            clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                onClick={() => this.props.history.push('/activity/circuit-building')}>
                                            <i className="fa fa-arrow-left" />
                                        </Button>
                                    </Col>

                                    <Col>
                                        <p style={{color: "#29405B", fontSize: "28px", fontWeight: "bold"}}>Laser And Lenses</p>
                                    </Col>
                                </Row>

                                <Row className={"justify-content-end align-content-center"}>
                                    <Col className={"col-10"} onContextMenu={rightClick}>
                                        <Canvas canvasRef={this.state.canvasRef} tool={this.state.tool}
                                                color={this.state.color} size={this.state.size} toolActive={this.state.toolActive} />
                                    </Col>
                                </Row>

                                <Row style={{margin: "3%"}}>
                                    {/*<Col className={"col-2"}>*/}
                                    {/*    */}
                                    {/*</Col>*/}

                                    <Col className={"col-6"}>
                                        {/*TODO - Color Selector*/}
                                        {(this.state.tool !== TOOL_ERASER) ?
                                        <>
                                            <Container fluid>
                                                <Row>
                                                    <Col style={{padding: 0, margin: 5}} className={"col-1"}>
                                                        <Button style={{backgroundColor: "#FFFFFF", borderRadius: 100,
                                                            width: "40px", height: "40px", border: "2px solid rgba(0, 0, 0, 0.25)" }}
                                                             onClick={() => setColor("#FFFFFF")}
                                                        />
                                                    </Col>


                                                    <Col style={{padding: 0, margin: 5}} className={"col-1"}>
                                                        <Button style={{backgroundColor: "#EB3324", borderRadius: 100,
                                                            width: "40px", height: "40px", border: "2px solid rgba(0, 0, 0, 0.25)" }}
                                                             onClick={() => setColor("#EB3324")}
                                                        />
                                                    </Col>

                                                    <Col style={{padding: 0, margin: 5}} className={"col-1"}>
                                                        <Button style={{backgroundColor: "#F2F551", borderRadius: 100,
                                                            width: "40px", height: "40px", border: "2px solid rgba(0, 0, 0, 0.25)" }}
                                                             onClick={() => setColor("#F2F551")}
                                                        />
                                                    </Col>

                                                    <Col style={{padding: 0, margin: 5}} className={"col-1"}>
                                                        <Button style={{backgroundColor: "#76FA68", borderRadius: 100,
                                                            width: "40px", height: "40px", border: "2px solid rgba(0, 0, 0, 0.25)" }}
                                                             onClick={() => setColor("#76FA68")}
                                                        />
                                                    </Col>

                                                    <Col style={{padding: 0, margin: 5}} className={"col-1"}>
                                                        <Button style={{backgroundColor: "#3686F7", borderRadius: 100,
                                                            width: "40px", height: "40px", border: "2px solid rgba(0, 0, 0, 0.25)" }}
                                                             onClick={() => setColor("#3686F7")}
                                                        />
                                                    </Col>

                                                    <Col style={{padding: 0, margin: 5}} className={"col-1"}>
                                                        <Button style={{backgroundColor: "#EA3690", borderRadius: 100,
                                                            width: "40px", height: "40px", border: "2px solid rgba(0, 0, 0, 0.25)" }}
                                                             onClick={() => setColor("#EA3690")}
                                                        />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </>
                                        : '' }

                                        {/*OLD COLOR SELECTOR*/}
                                        {/*{(this.state.tool === TOOL_ELLIPSE || this.state.tool === TOOL_RECTANGLE) ?*/}
                                        {/*    <div>*/}
                                        {/*        <label htmlFor="">Fill In:</label>*/}
                                        {/*        <input type="checkbox" value={this.state.fill} style={{margin:'0 8'}}*/}
                                        {/*               onChange={(e) => this.setState({fill: e.target.checked})} />*/}
                                        {/*        {this.state.fill ? <span>*/}
                                        {/*          <label htmlFor="">with color:</label>*/}
                                        {/*          <input type="color" value={this.state.fillColor} onChange={(e) => this.setState({fillColor: e.target.value})} />*/}
                                        {/*        </span> : ''}*/}
                                        {/*    </div> : ''}*/}
                                        {/*{(this.state.tool !== TOOL_ERASER) ?*/}
                                        {/*    <div className="options" style={{marginBottom:20}}>*/}
                                        {/*        <label htmlFor="">Color: </label>*/}
                                        {/*        <input type="color" value={this.props.color} onChange={(e) => this.setState({color: e.target.value})} />*/}
                                        {/*    </div> : ''}*/}
                                    </Col>

                                    {(this.state.tool !== TOOL_OPTICS && this.state.tool !== TOOL_PRISM) &&
                                    <Col className={"col-2"}>
                                        {/*TODO - Shapes of filters*/}
                                        <Typography id="width-slider" gutterBottom style={{fontWeight: "bold", color: "#29405B", fontSize: 18, float: "left"}}>
                                            {(this.state.tool === TOOL_LASER || this.state.tool === TOOL_ERASER) ? "Width" : "Size"}
                                        </Typography>
                                        <SizeSlider aria-labelledby="width-slider" value={this.props.size}
                                                    setSize={changeSize} />
                                    </Col>
                                    }
                                </Row>
                            </Container>
                        </Col>

                        <Col className={"col-2 ml-auto"} style={{padding: 0}}>
                            <Row className={"justify-content-end"} style={{margin: 0, marginTop: "10%"}}>
                                    <Button className={"blue-button"} style={{width: 200, marginBottom: 15,
                                        }} onClick={cycleQuestionPopup}>Question</Button>
                            </Row>
                            <Row className={"justify-content-end"} style={{margin: 0}}>
                                    <Button className={"blue-button"} style={{width: 200, marginBottom: 15,
                                        }} onClick={openEngravingPopup}>Stencil</Button>
                            </Row>
                            <Row className={"justify-content-end"} style={{margin: 0}}>
                                    <Button className={"blue-button"} style={{width: 200, marginBottom: 15,
                                        }} onClick={openPopup}>Objective</Button>
                            </Row>
                            <Row className={"justify-content-end"} style={{margin: 0}}>
                                    <Button className={"blue-button"} style={{width: 200,
                                        }} onClick={toggleViewpointPopup}>Viewpoint</Button>
                            </Row>

                            <Row className={"justify-content-end"} style={{margin: 0, position: "absolute", bottom: "5%"}}>
                                <Col style={{padding: 0}}>
                                    <Button className={"green-button"} style={{float: "right", width: 200,
                                        clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                            onClick={() => this.props.history.push('/activity/telescope-activity')}>Next</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default MetalEngraving;