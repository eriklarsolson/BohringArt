import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from "./Sidebar";
import Button from "react-bootstrap/Button";
import Canvas from "./Canvas";
import laser_OFF from "./images/laser_OFF.png";
import laser_WHITE from "./images/laser_WHITE.png"
import laser_RED from "./images/laser_RED.png"
import laser_YELLOW from "./images/laser_YELLOW.png"
import laser_GREEN from "./images/laser_GREEN.png"
import laser_BLUE from "./images/laser_BLUE.png"
import laser_PINK from "./images/laser_PINK.png"
import laser_LENS from "./images/laser_LENS.png"
import laser_LENS_blue from "./images/laser_LENS_blue.png"
import laser_LENS_green from "./images/laser_LENS_green.png"
import laser_LENS_pink from "./images/laser_LENS_pink.png"
import laser_LENS_red from "./images/laser_LENS_red.png"
import laser_LENS_yellow from "./images/laser_LENS_yellow.png"
import laser_PRISM from "./images/laser_PRISM.png"
import metal_filler from "./images/metal_filler.png"
import {Typography} from "@material-ui/core";
import SizeSlider from "./SizeSlider";
import {MoreInfoAnimation} from "./MoreInfoAnimation";
import {ViewpointInfoAnimation} from "./ViewpointInfoAnimation";
import {StencilsAnimation} from "./StencilsAnimation";
import ColorSlider from "./ColorSlider";
import {ObjectiveSlideOut} from "../shared/animations/ObjectiveSlideOut";
import square from "./images/square.png";
import circle from "./circle.png";
import triangle from "./images/triangle.png";

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
            colorVal: 20,
            color: '#EB3324',
            fill: false,
            fillColor: '#444444',
            items: [],
            canvasRef: React.createRef(),
            cursor: laser_RED,
            toolActive: true,
        };
    }

    render() {
        const cyclePopup = () => {
            this.setState({popupOpened: !this.state.popupOpened})
        }

        const cvcleEngravingPopup = () => {
            this.setState({engravingPopupOpened: !this.state.engravingPopupOpened})
        }

        const cycleViewpointPopup = () => {
            this.setState({viewpointPopupOpened: !this.state.viewpointPopupOpened})
        }

        const cycleQuestionPopup = () => {
            this.setState({questionPopupOpened: !this.state.questionPopupOpened})
        }

        const setTool = (tool: string) => {
            this.setState({tool: tool, toolActive: true})

            if(tool === TOOL_LASER) {
                this.setState({cursor: getActiveLaserIcon()})
            } else if(tool === TOOL_OPTICS) {
                this.setState({cursor: laser_LENS_red})
            } else if(tool === TOOL_PRISM) {
                this.setState({cursor: laser_PRISM})
            } else if(tool === TOOL_ERASER) {
                this.setState({cursor: metal_filler})
            } else if(tool === TOOL_RECTANGLE) {
                this.setState({cursor: square})
            } else if(tool === TOOL_ELLIPSE) {
                this.setState({cursor: circle})
            } else if(tool === TOOL_TRIANGLE) {
                this.setState({cursor: triangle})
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
            //TODO - Sometimes this doesn't add to canvas?
            const canvas: HTMLCanvasElement = this.state.canvasRef.current;
            const context = canvas.getContext('2d');

            const image = new Image();
            image.src = object

            //Only allowed one stencil at a time, so clear canvas each time one is added
            clearCanvas();

            context?.drawImage(image, 100, 20, 600, 600);
        }

        const rightClick = (event: { preventDefault: () => void; }) => {
            if(this.state.tool === TOOL_LASER || this.state.tool === TOOL_OPTICS || this.state.tool === TOOL_PRISM) {
                event.preventDefault()

                if(this.state.toolActive) {
                    this.setState({cursor: laser_OFF })
                    this.setState({toolActive: false})
                } else {
                    if(this.state.tool === TOOL_OPTICS) {
                        this.setState({cursor: getActiveLaserIcon()})
                    } else if(this.state.tool === TOOL_PRISM) {
                        this.setState({cursor: laser_PRISM})
                    } else {
                        this.setState({cursor: getActiveLaserIcon()})
                    }
                    this.setState({toolActive: true})
                }
            }
        }

        const getActiveLaserIcon = () => {
            const color = this.state.color;

            if(this.state.tool === TOOL_LASER) {
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
            } else {
                switch (color) {
                    case "#FFFFFF":
                        return laser_LENS
                    case "#EB3324":
                        return laser_LENS_red
                    case "#F2F551":
                        return laser_LENS_yellow
                    case "#76FA68":
                        return laser_LENS_green
                    case "#3686F7":
                        return laser_LENS_blue
                    case "#EA3690":
                        return laser_LENS_pink
                    default:
                        return laser_OFF
                }
            }
        }

        const setColorFromSize = (event: any, size: any) => {
            console.log(size)

            if(this.state.tool === TOOL_LASER) {
                switch (size) {
                    // case "#FFFFFF":
                    //     this.setState({color: color, cursor: laser_WHITE})
                    //     break;
                    case 20:
                        this.setState({color: "#EB3324", cursor: laser_RED, colorSize: size})
                        break;
                    case 40:
                        this.setState({color: "#F2F551", cursor: laser_YELLOW, colorSize: size})
                        break;
                    case 60:
                        this.setState({color: "#76FA68", cursor: laser_GREEN, colorSize: size})
                        break;
                    case 80:
                        this.setState({color: "#3686F7", cursor: laser_BLUE, colorSize: size})
                        break;
                    case 100:
                        this.setState({color: "#EA3690", cursor: laser_PINK, colorSize: size})
                        break;
                    default:
                        this.setState({color: "#FFFFFF", cursor: laser_OFF, colorSize: size})
                        break;
                }
            } else if(this.state.tool === TOOL_OPTICS) {
                switch (size) {
                    // case "#FFFFFF":
                    //     this.setState({color: color, cursor: laser_WHITE})
                    //     break;
                    case 20:
                        this.setState({color: "#EB3324", cursor: laser_LENS_red, colorSize: size})
                        break;
                    case 40:
                        this.setState({color: "#F2F551", cursor: laser_LENS_yellow, colorSize: size})
                        break;
                    case 60:
                        this.setState({color: "#76FA68", cursor: laser_LENS_green, colorSize: size})
                        break;
                    case 80:
                        this.setState({color: "#3686F7", cursor: laser_LENS_blue, colorSize: size})
                        break;
                    case 100:
                        this.setState({color: "#EA3690", cursor: laser_LENS_pink, colorSize: size})
                        break;
                    default:
                        this.setState({color: "#FFFFFF", cursor: laser_OFF, colorSize: size})
                        break;
                }
            } else {
                switch (size) {
                    // case "#FFFFFF":
                    //     this.setState({color: color, cursor: laser_WHITE})
                    //     break;
                    case 20:
                        this.setState({color: "#EB3324", colorSize: size})
                        break;
                    case 40:
                        this.setState({color: "#F2F551", colorSize: size})
                        break;
                    case 60:
                        this.setState({color: "#76FA68", colorSize: size})
                        break;
                    case 80:
                        this.setState({color: "#3686F7", colorSize: size})
                        break;
                    case 100:
                        this.setState({color: "#EA3690", colorSize: size})
                        break;
                    default:
                        this.setState({color: "#FFFFFF", colorSize: size})
                        break;
                }
            }
        }

        const setColor = (color: string) => {
            if(this.state.tool === TOOL_LASER) {
                switch (color) {
                    // case "#FFFFFF":
                    //     this.setState({color: color, cursor: laser_WHITE})
                    //     break;
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
            } else {
                switch (color) {
                    // case "#FFFFFF":
                    //     this.setState({color: color})
                    //     break;
                    case "#EB3324":
                        this.setState({color: color})
                        break;
                    case "#F2F551":
                        this.setState({color: color})
                        break;
                    case "#76FA68":
                        this.setState({color: color})
                        break;
                    case "#3686F7":
                        this.setState({color: color})
                        break;
                    case "#EA3690":
                        this.setState({color: color})
                        break;
                    default:
                        this.setState({color: color})
                        break;
                }
            }
        }

        return (
            <>
                <div style={{position: "relative", height: "100%", width: "100%"}}>
                    <Container fluid className={"d-flex h-100 flex-column"} style={{margin: "0", padding: "0", backgroundColor: "#F8EDDD"}}>
                        {/*<MetalEngravingQuestionPopup open={this.state.questionPopupOpened} closePopup={cycleQuestionPopup} />*/}

                        {this.state.questionPopupOpened &&
                        <div style={{position: "absolute", top: 0, bottom: 0, left: 0, right: 0, zIndex: 4, overflow: "hidden"}}>
                            <MoreInfoAnimation setParentState={() => cycleQuestionPopup()} />
                        </div>
                        }

                        {/*<ObjectivePopup title={"02 Laser and Lenses Objective"}*/}
                        {/*                open={this.state.popupOpened}*/}
                        {/*                description={"Using lasers, prisms, and lenses, create an " +*/}
                        {/*          "artistic design on a metal sheet. The laser can be altered to include numerous shapes, colors, and widths " +*/}
                        {/*          "beneficial to the engraving. You can use the ERASER and RESET buttons to change any mistakes on your design. " +*/}
                        {/*          "Once you are satisfied with your creation, press the NEXT button to move on to the telescope building part " +*/}
                        {/*          "of the optics activity. Click OBJECTIVE to see the objective for this activity."}*/}
                        {/*                closePopup={closePopup} />*/}

                        {this.state.popupOpened &&
                            <div style={{position: "absolute", top: 0, bottom: 0, left: 0, right: 0, zIndex: 4, overflow: "hidden"}}>
                                <ObjectiveSlideOut title={"01 Lasers and Lenses Objective"}
                                                   description={"Using lasers, prisms, and lenses, create an " +
                                                   "artistic design on a metal sheet. The laser can be altered to include numerous shapes, colors, and widths " +
                                                   "beneficial to the engraving. You can use the METAL FILLER and RESET buttons to change any mistakes on your design. " +
                                                   "Once you are satisfied with your creation, press the NEXT button to move on to the telescope building part " +
                                                   "of the optics activity. Click OBJECTIVE to see the objective for this activity."}
                                                   setParentState={() => cyclePopup()} />
                            </div>
                        }

                        {/*<EngravingPopup open={this.state.engravingPopupOpened} closePopup={closeEngravingPopup}*/}
                        {/*                addStencil={addStencil} />*/}

                        {this.state.engravingPopupOpened &&
                            <div style={{position: "absolute", top: 0, bottom: 0, left: 0, right: 0, zIndex: 4, overflow: "hidden"}}>
                                <StencilsAnimation setParentState={() => cvcleEngravingPopup()}  addStencil={addStencil} />
                            </div>
                        }

                        {/*<ViewpointPopup open={this.state.viewpointPopupOpened} closePopup={toggleViewpointPopup} />*/}

                        {this.state.viewpointPopupOpened &&
                            <div style={{position: "absolute", top: 0, bottom: 0, left: 0, right: 0, zIndex: 4, overflow: "hidden"}}>
                                <ViewpointInfoAnimation setParentState={() => cycleViewpointPopup()} />
                            </div>
                        }


                        <Row className={"flex-grow-1"} style={{margin: 0}}>
                            <Col className={"col-12 col-sm-3"} style={{color: "white", padding: 0, minWidth: 225}}>
                                <Sidebar tool={this.state.tool} color={this.state.color} size={this.state.size}
                                         setTool={setTool} clearCanvas={clearCanvas} />
                            </Col>

                            <Col className={"col-12 col-sm-7"} style={{margin: "0", padding: "0"}}>
                                <Container fluid style={{margin: "0", padding: "0", cursor: `url(${this.state.cursor}), auto`}}>
                                    <Row style={{margin: "3%"}}>
                                        <Col className={"col-3"}>
                                            <Button className={"green-button"} style={{float: "left", width: 100,
                                                clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                    onClick={() => this.props.history.push('/home')}>
                                                <i className="fa fa-arrow-left" />
                                            </Button>
                                        </Col>

                                        <Col>
                                            <p style={{color: "#29405B", fontSize: "28px", fontWeight: "bold"}}>Lasers & Lenses</p>
                                        </Col>
                                    </Row>

                                    <Row className={"justify-content-center align-content-center"}>
                                        <Col className={"col-10"} onContextMenu={rightClick} style={{marginLeft: 15, marginBottom: 15}}>
                                            <Canvas canvasRef={this.state.canvasRef} tool={this.state.tool}
                                                    color={this.state.color} size={this.state.size} toolActive={this.state.toolActive} />
                                        </Col>
                                    </Row>

                                    <Row style={{marginLeft: "9%"}}>
                                        <Col className={"col-6"} style={{minHeight: 55}}>
                                            <Container fluid>
                                                <Row>
                                                    <Col className={"col-5"}>
                                                        {(this.state.tool !== TOOL_ERASER && this.state.tool !== TOOL_PRISM) ?
                                                        <>
                                                            <Typography id="color-slider" gutterBottom style={{fontWeight: "bold", color: "#29405B", fontSize: 18, float: "left"}}>
                                                                Wavelength
                                                            </Typography>
                                                            <ColorSlider value={this.props.colorSize} changeValue={setColorFromSize}
                                                                              aria-labelledby="color-slider" max={100} />
                                                        </>
                                                        : '' }
                                                    </Col>

                                                    {/*{this.state.tool !== TOOL_LASER &&*/}
                                                    {/*    <Col style={{padding: 0, margin: 5}} className={"col-1"}>*/}
                                                    {/*        <Button style={{backgroundColor: "#FFFFFF", borderRadius: 100,*/}
                                                    {/*            width: "40px", height: "40px", border: "2px solid rgba(0, 0, 0, 0.25)" }}*/}
                                                    {/*                onClick={() => setColor("#FFFFFF")}*/}
                                                    {/*        />*/}
                                                    {/*    </Col>*/}
                                                    {/*}*/}

                                                    {/*<Col style={{padding: 0, margin: 5}} className={"col-1"}>*/}
                                                    {/*    <Button style={{backgroundColor: "#EB3324", borderRadius: 100,*/}
                                                    {/*        width: "40px", height: "40px", border: "2px solid rgba(0, 0, 0, 0.25)" }}*/}
                                                    {/*            onClick={() => setColor("#EB3324")}*/}
                                                    {/*    />*/}
                                                    {/*</Col>*/}

                                                    {/*<Col style={{padding: 0, margin: 5}} className={"col-1"}>*/}
                                                    {/*    <Button style={{backgroundColor: "#F2F551", borderRadius: 100,*/}
                                                    {/*    width: "40px", height: "40px", border: "2px solid rgba(0, 0, 0, 0.25)" }}*/}
                                                    {/*    onClick={() => setColor("#F2F551")}*/}
                                                    {/*    />*/}
                                                    {/*</Col>*/}

                                                    {/*<Col style={{padding: 0, margin: 5}} className={"col-1"}>*/}
                                                    {/*    <Button style={{backgroundColor: "#76FA68", borderRadius: 100,*/}
                                                    {/*    width: "40px", height: "40px", border: "2px solid rgba(0, 0, 0, 0.25)" }}*/}
                                                    {/*    onClick={() => setColor("#76FA68")}*/}
                                                    {/*    />*/}
                                                    {/*</Col>*/}

                                                    {/*<Col style={{padding: 0, margin: 5}} className={"col-1"}>*/}
                                                    {/*    <Button style={{backgroundColor: "#3686F7", borderRadius: 100,*/}
                                                    {/*    width: "40px", height: "40px", border: "2px solid rgba(0, 0, 0, 0.25)" }}*/}
                                                    {/*    onClick={() => setColor("#3686F7")}*/}
                                                    {/*    />*/}
                                                    {/*</Col>*/}

                                                    {/*<Col style={{padding: 0, margin: 5}} className={"col-1"}>*/}
                                                    {/*    <Button style={{backgroundColor: "#EA3690", borderRadius: 100,*/}
                                                    {/*    width: "40px", height: "40px", border: "2px solid rgba(0, 0, 0, 0.25)" }}*/}
                                                    {/*    onClick={() => setColor("#EA3690")}*/}
                                                    {/*    />*/}
                                                    {/*</Col>*/}
                                                </Row>
                                            </Container>

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

                                        <Col className={"col-2"} style={{minHeight: 55}}>
                                            {this.state.tool !== TOOL_PRISM  &&
                                                <>
                                                    <Typography id="width-slider" gutterBottom style={{fontWeight: "bold", color: "#29405B", fontSize: 18, float: "left"}}>
                                                        {(this.state.tool === TOOL_OPTICS || this.state.tool === TOOL_LASER || this.state.tool === TOOL_ERASER) ? "Width" : "Size"}
                                                    </Typography>

                                                    <SizeSlider aria-labelledby="width-slider" value={this.state.size}
                                                                setSize={changeSize} />
                                                </>
                                            }
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>

                            <Col className={"col-2 ml-auto"} style={{padding: 0}}>
                                <Row className={"justify-content-end"} style={{margin: 0, marginTop: "10%"}}>
                                        <Button className={"blue-button"} style={{width: 166, textAlign: "left",
                                            marginBottom: 15}} onClick={cycleQuestionPopup}>More Info</Button>
                                </Row>
                                <Row className={"justify-content-end"} style={{margin: 0}}>
                                        <Button className={"blue-button"} style={{width: 166, textAlign: "left",
                                            marginBottom: 15}} onClick={cvcleEngravingPopup}>Stencils</Button>
                                </Row>
                                <Row className={"justify-content-end"} style={{margin: 0}}>
                                        <Button className={"blue-button"} style={{width: 166, textAlign: "left",
                                            marginBottom: 15}} onClick={cyclePopup}>Objective</Button>
                                </Row>
                                <Row className={"justify-content-end"} style={{margin: 0}}>
                                        <Button className={"blue-button"} style={{width: 166, textAlign: "left"}}
                                                onClick={cycleViewpointPopup}>Viewpoint</Button>
                                </Row>

                                <Row className={"justify-content-end"} style={{position: "absolute", bottom: 0, marginBottom: 20}}>
                                    <Col className={"col-12"} style={{padding: 0, marginRight: 20}}>
                                        <Button className={"green-button"} style={{float: "right", width: 200,
                                            clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                onClick={() => this.props.history.push('/activity/circuit-building')}>Next Activity</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}
export default MetalEngraving;