import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from "./Sidebar";
import Button from "react-bootstrap/Button";
import satellite from './satellite.png'
import {TelescopeGridContainer} from "./grid/TelescopeGridContainer";
import 'font-awesome/css/font-awesome.min.css';
import {Animation} from "./Animation";
import "./Telescope.scss"
import {deleteCurrentComponent, generatePaths} from "./grid/Functionality";
import {MoreInfoAnimation} from "./MoreInfoAnimation";

class TelescopeActivity extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            questionPopupOpened: false,
            paths: [
                {
                    path: "M451.77734375,268.77734375c98.2,11.2,112.3,13.8,210.6,24.1c352.8,-6.5,365.6,-11.9,719.8,-15.1c-124.5,44.3,-138.0,44.6,-262.6,84.0c-123.2,32.2,-137.0,36.1,-260.5,67.3c-74.8,12.6,-89.2,12.8,-164.0,26.1c-42.9,14.6,-52.4,24.7,-98.0,36.8c-5.8,-111.9,-1.8,-124.5,-2.3,-234.8c6.3,-89.3,8.1,-103.6,15.0,-192.9",

                }
            ],
            animationRunning: false,
            showGrid: true,
        };
    }

    render() {
        const cycleQuestionPopup = () => {
            this.setState({questionPopupOpened: !this.state.questionPopupOpened})
        }

        const startAnimation = () => {
            //TODO - Need to get check components here for which pieces are where and what angle they are on
            // Can I build the path instead of having custom one for every solution? AHHHHHHHHHH

            if(this.state.animationRunning) {
                this.setState({animationRunning: false});
            } else {
                this.setState({animationRunning: true});

            }
        }

        const cycleGrid = () => {
            this.setState({showGrid: !this.state.showGrid})
        }

        return (
            <>
                {/*<TelescopeQuestionPopup open={this.state.questionPopupOpened} closePopup={cycleQuestionPopup} />*/}

                {this.state.questionPopupOpened &&
                <div style={{position: "absolute", width: "100%", height: "100%", zIndex: 10, overflow: "hidden"}}>
                    <MoreInfoAnimation setParentState={() => cycleQuestionPopup()} />
                </div>
                }


                <Container fluid className={"d-flex h-100 flex-column"} style={{margin: "0", padding: "0", backgroundColor: "#F8EDDD"}}>
                    <Row className={"flex-grow-1"} style={{margin: 0}}>
                        <Col className={"col-2"} style={{padding: 0, color: "white"}}>
                            <Sidebar />
                        </Col>

                        <Col className={"col-10"} style={{margin: "0", padding: "0"}}>
                            <Container fluid style={{margin: "0", padding: "0"}}>
                                <Row style={{margin: 0}}>
                                    <Col className="col-2" style={{margin: "3%"}}>
                                        <Button className={"green-button"} style={{float: "left", width: 100,
                                            clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                onClick={() => this.props.history.push('/activity/metal-engraving')}>
                                            <i className="fa fa-arrow-left" />
                                        </Button>
                                    </Col>

                                    <Col style={{margin: "3%"}}>
                                        <p style={{color: "#29405B", fontSize: "28px", fontWeight: "bold"}}>Telescope Activity</p>
                                    </Col>

                                    <Col className={"col-2 ml-auto"} style={{padding: 0, marginTop: "3%"}}>
                                        <Row style={{margin: 0}} className={"justify-content-end"}>
                                            <Button className={"blue-button"} style={{width: 166, textAlign: "left",
                                                marginBottom: 15}}
                                                onClick={cycleQuestionPopup}>
                                                More Info
                                            </Button>
                                        </Row>

                                        <Row style={{margin: 0}} className={"justify-content-end"}>
                                            <Button className={"blue-button"} style={{width: 166, textAlign: "left"}}
                                                    onClick={cycleGrid}>
                                                Toggle Grid
                                            </Button>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row style={{margin: 0}}>
                                    <Col className={"justify-content-center align-content-center"} style={{padding: 0}}>
                                        <div style={{width: 1200, margin: "auto", height: 500}}>
                                            <div style={{
                                                position: "absolute",
                                                margin: 0,
                                                width: "100%",
                                                height: "100%",
                                                left: 0
                                            }}>
                                                <img alt={"Telescope"} src={satellite} height={500} />
                                                {this.state.animationRunning &&
                                                <div style={{
                                                    position: "absolute",
                                                    margin: 0,
                                                    top: 0,
                                                    width: "100%",
                                                    height: "100%"
                                                }}>
                                                    <Animation paths={generatePaths()} />
                                                </div>
                                                }
                                            </div>

                                            <TelescopeGridContainer showGrid={this.state.showGrid} />
                                        </div>
                                    </Col>
                                </Row>

                                <Row className="justify-content-center" style={{margin: "3%"}}>
                                    <Col className={"col-3"} style={{padding: 0}}>
                                        <Button style={{float: "left", backgroundColor: "transparent", fontSize: "20px",
                                            fontWeight: "bold"}} onClick={deleteCurrentComponent}>
                                            <i className="fa fa-trash-o" style={{color: "black"}} />
                                        </Button>
                                    </Col>

                                    <Col className={"col-3 ml-auto mr-auto"} style={{padding: 0}}>
                                        <Button className={"green-button"} style={{float: "right", width: 250,
                                            clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                            onClick={startAnimation}>
                                            {this.state.animationRunning ? 'Reset' : 'Start'} Simulation
                                        </Button>
                                    </Col>

                                    <Col className={"ml-auto col-3"} style={{padding: 0}}>
                                        <Button className={"green-button"} style={{float: "right", width: 200,
                                            clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                onClick={() => this.props.history.push('/activity/rocket-building')}>
                                            Next
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default TelescopeActivity;