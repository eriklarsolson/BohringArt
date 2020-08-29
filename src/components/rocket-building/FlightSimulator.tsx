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
        //TODO - Need to show error if rocket is bad combo of parts (different scenarios)

        //TODO - To expand on this above and think about solution for animation interacting with different scenarios,
        // We could pass in the starting and stopping value, and just increment those as we answer different questions
        // (so start at last endpoint, etc..)

        return (
            <>
                <Container fluid className={"d-flex h-100 flex-column"} style={{margin: "0", padding: "0",
                    textAlign: "left", overflow: "hidden", backgroundImage:`url(${stellarBackground})`}}>
                    {/*<BackgroundAnimation />*/}

                    <Row style={{margin: 10, padding: 0}}>
                        <Col>
                            <RocketBarAnimation />
                        </Col>
                    </Row>

                    <Row style={{margin: 0, padding: 0}}>
                        <Col className={"align-items-center justify-content-center"} style={{display: "flex", margin: 0, padding: 0}}>
                            <Col className={"ship"}>
                                <RocketAnimation images={[this.state.sideBooster.image, this.state.engine.image,
                                    this.state.interstage.image, this.state.payload.image]} />
                            </Col>
                        </Col>
                    </Row>

                    <Row>
                        {/*  TODO - Text scenarios with yes/no go here for ship situations  */}
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