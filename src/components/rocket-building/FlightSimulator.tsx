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
            iteration: 0,
            xStart: 0,
            scenarios: [
                {
                    question: "On your way to ____ you discover that your rocket cannot hold enough fuel to return home. Do you turn back, or risk having to eject your telescope or living supplies to get your crew back home?",
                    answer: "NA", //Not answered is default, and will update on their selection
                },
                {
                    question: "There was an unexpected gravitational factor that has thrown the rocket off course, do you use 50% of your designated return fuel in order to stay on course?",
                    answer: "NA", //Not answered is default, and will update on their selection
                },
                {
                    question: "The lifetime of the isotope heating up the telescope is only going to last ten years. Do you want to use more fuel to speed things up? ",
                    answer: "NA", //Not answered is default, and will update on their selection
                }
            ],
            loadedScenario: "Flying to your destination"
        };
    }

    render() {

        const updateIteration = (answer: boolean) => {
            if(answer) {
                this.setState({iteration: this.state.iteration + 1, xStart: this.state.xStart + 300})
                //TODO - Update scenario's state for answer

                runTimer()
            }

            //TODO - What happens if they hit no on mission prompt? Does the ship explode???
        }

        const updateScenarioDetails = () => {
            console.log()
            if(this.state.iteration === 3) {
                this.setState({loadedScenario: "You reached the Nebula! (TODO - OR HANDLE OTHER OUTCOMES HERE TOO?)"})
            } else {
                this.setState({loadedScenario: this.state.scenarios[this.state.iteration].question})
            }
        }

        const runTimer = () => {
            setTimeout(() => {  updateScenarioDetails() }, 3000);
        }
        runTimer()

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
                            <RocketBarAnimation xStart={this.state.xStart} />
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
                                            <h2>Scenario</h2>
                                        </Col>
                                    </Row>

                                    <Row style={{paddingLeft: 10}}>
                                        <Col className={"col-10"}>
                                            <p>{this.state.loadedScenario}</p>
                                        </Col>
                                    </Row>

                                    {this.state.loadedScenario !== "Flying to your destination" && this.state.iteration !== 3 &&
                                        <Row className={"justify-content-center"} style={{marginTop: 25}}>
                                            <Col className={"col-4"}>
                                                <Button className={"green-button"} style={{float: "right", width: 200,
                                                    clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                        onClick={() => updateIteration(false)}>
                                                    No
                                                </Button>
                                            </Col>

                                            <Col className={"col-4"}>
                                                <Button className={"green-button"} style={{float: "right", width: 200,
                                                    clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                    onClick={() => updateIteration(true)}>
                                                    Yes
                                                </Button>
                                            </Col>
                                        </Row>
                                    }
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
                            {this.state.iteration === 3 &&
                                <Button className={"green-button"} style={{float: "right", width: 200,
                                    clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                        onClick={() => this.props.history.push({
                                            pathname: '/activity/object-page',
                                            state: { title: "Nebula" }
                                        })}>
                                    Complete
                                </Button>
                            }
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default FlightSimulator;