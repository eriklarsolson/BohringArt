import React, {useState} from "react";
import {Container, Row, Col, Modal} from 'react-bootstrap'
import Sidebar from "./Sidebar";
import Button from "react-bootstrap/Button";
import satellite from './satellite.png'
import {TelescopeGridContainer} from "./grid/TelescopeGridContainer";
import 'font-awesome/css/font-awesome.min.css';

class TelescopeActivity extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            popupOpened: true,
        };
    }


    render() {
        return (
            <>
                <Container fluid className={"d-flex h-100 flex-column"} style={{margin: "0", padding: "0", backgroundColor: "#F8EDDD"}}>
                    <Row className={"flex-grow-1"}>
                        <Col className={"col-2 vh-100"} style={{color: "white"}}>
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
                                                clipPath: "polygon(10px 0, 100% 0, 100% 100%, 15% 100%)"}}>Help</Button>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className={"justify-content-center align-content-center"}>
                                        <div style={{width: "1000px", height: "400px", backgroundImage:`url(${satellite})`, margin: "auto"}}>
                                            <TelescopeGridContainer />
                                        </div>
                                    </Col>
                                </Row>

                                <Row style={{margin: "20px"}}>
                                    <Col className={"justify-content-center align-content-center"}>
                                       Focus Bar
                                    </Col>
                                </Row>

                                <Row style={{margin: "3%"}}>
                                    <Col>
                                        <Button style={{float: "left", backgroundColor: "transparent", fontSize: "20px",
                                            fontWeight: "bold"}}>
                                            <i className="fa fa-trash-o" style={{color: "black"}} />
                                        </Button>
                                    </Col>

                                    <Col>
                                        <Button className={"green-button"} style={{float: "right", width: 200,
                                            clipPath: "polygon(0 0, 90% 0, 100% 100%, 10% 100%)"}}
                                                onClick={() => this.props.history.push('/activity/rocket-building')}>Next</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>

                {/*TODO - animation playground*/}
                {/*<div>*/}

                {/*</div>*/}
            </>
        )
    }
}
export default TelescopeActivity;