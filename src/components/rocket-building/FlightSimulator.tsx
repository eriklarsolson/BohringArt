import React from "react";
import {Container, Row, Col, Modal} from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import 'font-awesome/css/font-awesome.min.css';
import stellarBackground from "../stellar-cycle/stellarBackground.png";
import "./Rocket.scss"
import {RocketAnimation} from "./RocketAnimation";
import sideBooster_2 from "./images/sideBoosters/sideBooster_2.png"
import {BackgroundAnimation} from "./BackgroundAnimation";
import {StellarInfoAnimation} from "../stellar-cycle/StellarInfoAnimation";
import {RocketBarAnimation} from "./RocketBarAnimation";

class FlightSimulator extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            payload: this.props.location.state.payload,
            interstage: this.props.location.state.interstage,
            sideBooster: this.props.location.state.sideBooster,
            engine: this.props.location.state.engine,
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <>
                <Container fluid className={"d-flex h-100 flex-column"} style={{margin: "0", padding: "0",
                    textAlign: "left", overflow: "hidden", backgroundImage:`url(${stellarBackground})`}}>
                    {/*<BackgroundAnimation />*/}

                    <Row style={{margin: 0, padding: 0}}>
                        <Col className={"align-items-center justify-content-center"} style={{display: "flex", margin: 0, padding: 0}}>
                            <Col className={"ship"}>
                                <RocketAnimation images={[this.state.sideBooster.image, this.state.engine.image,
                                    this.state.interstage.image, this.state.payload.image]} />
                            </Col>
                        </Col>
                    </Row>


                    <Row style={{margin: 10, padding: 0}} className={"justify-content-center"}>
                        <Col className={"col-8"}>
                            <RocketBarAnimation />
                        </Col>
                    </Row>

                    <Row className={"justify-content-center"}>
                        {/*  TODO - Text scenarios with yes/no go here for ship situations  */}
                        <Col className={"col-8"} style={{padding: 15, color: "white"}}>
                            <div style={{position: "absolute", width: "100%", height: "100%",
                                backgroundColor: "black", opacity: 0.7}} />

                                <Container>
                                    <Row style={{padding: 10}}>
                                        <Col className={"col-10"}>
                                            <h2>Title</h2>
                                        </Col>
                                    </Row>

                                    <Row style={{paddingLeft: 10}}>
                                        <Col className={"col-10"}>
                                            <p>Issue goes here</p>
                                        </Col>
                                    </Row>

                                    <Row className={"justify-content-center"} style={{marginTop: 25}}>
                                        <Col className={"col-4"}>
                                            <Button className={"green-button"} style={{float: "right", width: 200,
                                                clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}>No</Button>
                                        </Col>

                                        <Col className={"col-4"}>
                                            <Button className={"green-button"} style={{float: "right", width: 200,
                                                clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}>Yes</Button>
                                        </Col>
                                    </Row>
                                </Container>
                        </Col>
                    </Row>

                    <Row style={{margin: "3%"}}>
                        <Col>
                            <Button className={"green-button"} style={{float: "left", width: 100,
                                clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                    onClick={() => this.props.history.push('/activity/rocket-building')}>
                                <i className="fa fa-arrow-left" />
                            </Button>
                        </Col>

                        <Col>
                            <Button className={"green-button"} style={{float: "right", width: 200,
                                clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                    onClick={() => this.props.history.push({
                                        pathname: '/activity/object-page',
                                        state: { title: "Nebula" }
                                    })}>Complete</Button>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default FlightSimulator;