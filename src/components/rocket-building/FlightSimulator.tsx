import React from "react";
import {Container, Row, Col, Modal} from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import 'font-awesome/css/font-awesome.min.css';
import stellarBackground from "../stellar-cycle/stellarBackground.png";
import "./Rocket.scss"
import {Animation} from "./Animation";

class FlightSimulator extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            payloadIndex: this.props.location.state.payloadIndex,
            interstageIndex: this.props.location.state.interstageIndex,
            sideBoostersIndex: this.props.location.state.sideBoostersIndex,
            engineIndex: this.props.location.state.engineIndex,
            payloadImages: [],
            interstageImages: [],
            sideBoosterImages: [],
            engineImages: [] //TODO
        };
    }

    render() {


        return (
            <>
                <Container className={"vh-100"} fluid style={{margin: 0, padding: 0, backgroundRepeat: "repeat", backgroundPosition: "center",
                    backgroundImage:`url(${stellarBackground})`, backgroundSize: "cover"}}>
                    <Row style={{paddingTop: 25}}>
                        <Col>
                            <p style={{color: "white", fontSize: "28px", fontWeight: "bold"}}>Flight Simulator</p>
                        </Col>
                    </Row>

                    <Row>
                        <div className={"side-booster-left"}>
                            <Animation />
                        </div>
                    </Row>

                    <Row>
                        <div className={"interstage"}>
                            <Animation />
                        </div>
                    </Row>


                    <Row>
                        <div className={"side-booster-right"}>
                            <Animation />
                        </div>
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