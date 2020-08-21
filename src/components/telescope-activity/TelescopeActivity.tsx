import React, {useState} from "react";
import {Container, Row, Col, Modal} from 'react-bootstrap'
import Sidebar from "./Sidebar";
import Button from "react-bootstrap/Button";
import satellite from './satellite.png'
import {TelescopeGridContainer} from "./grid/TelescopeGridContainer";
import 'font-awesome/css/font-awesome.min.css';
import TelescopeQuestionPopup from "../shared/modals/TelescopeQuestionPopup";
import {Animation} from "./Animation";
import "./Telescope.scss"

class TelescopeActivity extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            questionPopupOpened: false,
        };
    }


    render() {
        const cycleQuestionPopup = () => {
            this.setState({questionPopupOpened: !this.state.questionPopupOpened})
        }

        return (
            <>
                <TelescopeQuestionPopup open={this.state.questionPopupOpened} closePopup={cycleQuestionPopup} />

                <Container fluid className={"d-flex h-100 flex-column"} style={{margin: "0", padding: "0", backgroundColor: "#F8EDDD"}}>
                    <Row className={"flex-grow-1"} style={{margin: 0}}>
                        <Col className={"col-2 vh-100"} style={{padding: 0, color: "white"}}>
                            <Sidebar />
                        </Col>

                        <Col className={"col-10"} style={{margin: "0", padding: "0"}}>
                            <Container fluid style={{margin: "0", padding: "0"}}>
                                <Row style={{margin: 0}}>
                                    <Col className="col-2" style={{margin: "3%"}}>
                                        <Button className={"green-button"} style={{float: "left", width: 100,
                                            clipPath: "polygon(0 0, 90% 0, 100% 100%, 10% 100%)"}}
                                                onClick={() => this.props.history.push('/activity/metal-engraving')}>
                                            <i className="fa fa-arrow-left" />
                                        </Button>
                                    </Col>

                                    <Col style={{margin: "3%"}}>
                                        <p style={{color: "#29405B", fontSize: "28px", fontWeight: "bold"}}>Telescope Activity</p>
                                    </Col>

                                    <Col className={"col-2 ml-auto"} style={{padding: 0, marginTop: "3%"}}>
                                        <Row style={{margin: 0}} className={"justify-content-end"}>
                                            <Button className={"blue-button"} style={{marginBottom: 15, width: 200,
                                                }}
                                                onClick={cycleQuestionPopup}>
                                                Help
                                            </Button>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row style={{margin: 0}}>
                                    <Col className={"justify-content-center align-content-center"} style={{padding: 0}}>
                                        <div style={{width: "1000px", height: "400px", backgroundImage:`url(${satellite})`, margin: "auto"}}>
                                            <TelescopeGridContainer />
                                        </div>
                                    </Col>
                                </Row>

                                <Row style={{margin: 0, marginTop: 15, marginBottom: 15}}>
                                    <Col className={"justify-content-center align-content-center"} style={{padding: 0}}>
                                       Focus Bar
                                    </Col>
                                </Row>

                                <Row className="justify-content-center" style={{margin: "3%"}}>
                                    <Col className={"col-3"} style={{padding: 0}}>
                                        <Button style={{float: "left", backgroundColor: "transparent", fontSize: "20px",
                                            fontWeight: "bold"}}>
                                            <i className="fa fa-trash-o" style={{color: "black"}} />
                                        </Button>
                                    </Col>

                                    <Col className={"col-3 ml-auto mr-auto"} style={{padding: 0}}>
                                        <Button className={"green-button"} style={{float: "right", width: 200,
                                            clipPath: "polygon(0 0, 90% 0, 100% 100%, 10% 100%)"}}>
                                            Run Simulation
                                        </Button>
                                    </Col>

                                    <Col className={"ml-auto col-3"} style={{padding: 0}}>
                                        <Button className={"green-button"} style={{float: "right", width: 200,
                                            clipPath: "polygon(0 0, 90% 0, 100% 100%, 10% 100%)"}}
                                                onClick={() => this.props.history.push('/activity/rocket-building')}>
                                            Next
                                        </Button>
                                    </Col>
                                </Row>

                                <Row style={{margin: 0}} className={"justify-content-center animation-container"}>
                                    <Animation key={1} />
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