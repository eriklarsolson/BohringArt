import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import 'font-awesome/css/font-awesome.min.css';
import "./Rocket.scss"
import {RocketAnimation} from "./RocketAnimation";
import {RocketBarAnimation} from "./RocketBarAnimation";
import ScenarioRadioButton from "./ScenarioRadioButton";
import long_bg from "./images/long_bg.png";
import stellarBackground from "../stellar-cycle/stellarBackground.png"
import {TextScrollBarAnimation} from "../shared/animations/TextScrollBarAnimation";
import ErrorPopup from "../shared/modals/ErrorPopup";
import {getCurrentBoardIssues} from "../circuilt-building/grid/Functionality";

class FlightSimulator extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            cone: this.props.location.state.cone,
            body: this.props.location.state.body,
            booster: this.props.location.state.booster,
            engine: this.props.location.state.engine,
            missionEndingText: "",
            missionEndingPopup: false,
            iteration: 0,
            xStart: 0,
            scenarios: [ //Question types: 0 - fuel dependent, 1 - weight dependent, 2 - random
                { //TODO - Figure out properties of being fuel dependent, weight dependent, etc...
                    question: "On your way to ____ you discover that your rocket cannot hold enough fuel to return home. Do you turn back, or risk having to eject your telescope or living supplies to get your crew back home?",
                    answer: undefined, //Undefined is default, and will update on their selection
                    questionType: 0,
                    yesAnswer: "You decide that reaching your destination is not worth putting your expensive telescope and crew at risk, so you immediately plot a course back to earth.",
                    noAnswer: "You choose to press on and continue the mission, in spite of your recent discovery."
                    //(No-Delayed Consequence)
                },
                {
                    question: "There was an unexpected gravitational factor that has thrown the rocket off course, do you use 50% of your designated return fuel in order to stay on course?",
                    answer: undefined,
                    questionType: 2,
                    yesAnswer: "",
                    noAnswer: ""
                },
                {
                    question: "Your rocket was too massive for launch, resulting in a final velocity that is much smaller than desired. Now your crew does not have the supplies to last the entire journey. Would you like to detach from the telescope, which would save your crew but potentially fail the mission? ",
                    answer: undefined,
                    questionType: 0,
                    yesAnswer: "",
                    noAnswer: "You detach the telescope, giving a boost to the rest of your rocket and ensuring your crew’s safety."
                },
                {
                    question: "The lifetime of the isotope heating up the telescope is only going to last ten years. Do you want to use more fuel to speed things up?",
                    answer: undefined,
                    questionType: 2,
                    yesAnswer: "",
                    noAnswer: ""
                },
                {
                    question: "Your launch was partially successful; while you made it to space, you are significantly off course. Would you like to expend 10% of your remaining fuel supply to correct your bearings?",
                    answer: undefined,
                    questionType: 1,
                    yesAnswer: "You instruct your onboard crew to make the necessary course corrections, expelling 10% of your fuel supply.",
                    noAnswer: "You continue on your current trajectory."
                    //(No/Yes-Delayed Consequence)
                },
                {
                    question: "There was a computer glitch resulting in your refrigeration cooling system to fail. You now only have 75% of your food left. Would you like to continue the mission and risk the lives of the Astronauts or dump the telescope and return home?",
                    answer: undefined,
                    questionType: 2,
                    yesAnswer: "",
                    noAnswer: ""
                }
            ],
            loadedScenario: "Flying to your destination",
            scenarioRadioVal: null,
            showScrollingScenarioText: false,
            scrollingScenarioText: "",
            runScrollingText: false,
            outcomes: [
                { //Worst rocket
                    text: "You were not able to reach your destination, and you do not have the means to turn back so you have lost your crew and your telescope."
                    //TODO - Need properties here for why this outcome was chosen
                },
                {
                    text: "You’ve reached your destination with both your crew and telescope intact, but you cannot  stay long since you had to eject 50% of designated return fuel to correct a course deviation, and now must eject some of your living supplies to make it back home."
                    //TODO - Need properties here for why this outcome was chosen
                },
                { //Best rocket
                    text: "Mission Success! You were able to reach your destination with both your crew and telescope intact, without losing any living supplies or using extra fuel. Good Job!"
                    //TODO - Need properties here for why this outcome was chosen
                },
                {
                    text: "You were not able to reach your destination, but you were able to return back home before losing your crew and telescope to the vastness of space."
                    //TODO - Need properties here for why this outcome was chosen
                },
                {
                    text: "You were not able to reach your destination, but you were able to bring your crew back home at the cost of having to eject your telescope."
                    //TODO - Need properties here for why this outcome was chosen
                }
            ]
        };
    }

    render() {

        const updateIteration = (event: { target: { value: any; }; }) => {
            //TODO - What happens if they hit no on mission prompt? Does the ship explode???
            this.setState({showScrollingScenarioText: false, runScrollingText: false})

            let answer = true;
            if(event.target.value === "Yes") {
                this.setState({scenarioRadioVal: "Yes", showScrollingScenarioText: true,
                    scrollingScenarioXStart: "100%", runScrollingText: true,
                    scrollingScenarioText: this.state.scenarios[this.state.iteration].noAnswer})
            } else {
                this.setState({scenarioRadioVal: "No",
                    scrollingScenarioXStart: "100%", runScrollingText: true})
                answer = false;

                if(this.state.iteration === 0) {
                    this.setState({missionEndingText: this.state.scenarios[this.state.iteration].noAnswer,
                        missionEndingPopup: true})
                }
            }

            //Update scenario's state for answer
            let scenarios = [...this.state.scenarios];
            let scenario = {...scenarios[this.state.iteration]};
            scenario.answer = answer;
            scenarios[this.state.iteration]= scenario;
            this.setState({scenarios: scenarios});

            //TODO - Dont show certain scenarios if they fall in range
            const weightRange = getWeightRange();
            const fuelRange = getFuelRange();

            this.setState({iteration: this.state.iteration + 1, xStart: this.state.xStart + 100})

            runTimer()
        }

        const getWeightRange = () => {
            //TODO calculate what range total weight falls in
            // So like 0 = 0 to 500, 1 = 500 to 1000, etc...
            // Use this range for outcome and if certain scenario types should appear

            let total = 0;
            total += this.state.engine.mass;
            total += this.state.body.mass;
            total += (this.state.booster.mass * 2); //Note: 2 side boosters
            total += this.state.engine.mass;

            let weightRange = 0;
            if(total < 200) {
                weightRange = 0;
            } else if(total >= 200 && total < 250) {
                weightRange = 1;
            } else {
                weightRange = 2;
            }

            return weightRange
        }

        const getFuelRange = () => {
            //TODO calculate what range total fuel falls in
            // So like 0 = 0 to 500, 1 = 500 to 1000, etc...
            // Use this range for outcome and if certain scenario types should appear

            let total = 0;
            total += this.state.engine.fuelCapacity;
            total += this.state.body.fuelCapacity;
            total += (this.state.booster.fuelCapacity * 2); //Note: 2 side boosters
            total += this.state.engine.fuelCapacity;

            let fuelRange = 0;
            if(total < 36) {
                fuelRange = 0;
            } else if(total >= 36 && total < 72) {
                fuelRange = 1;
            } else if(total >= 72 && total < 104) {
                fuelRange = 2;
            } else {
                fuelRange = 3;
            }

            return fuelRange
        }

        const updateScenarioDetails = () => {
            if(this.state.iteration === 6) {
                this.setState({loadedScenario: "TODO - HANDLE OUTCOME HERE"})
            } else {
                this.setState({loadedScenario: this.state.scenarios[this.state.iteration].question})
            }
        }

        const resetScenario = () => {
            updateScenarioDetails()
            setTimeout(() => {  this.setState({scenarioRadioVal: null}) }, 3000);
        }

        const runTimer = () => {
            setTimeout(() => {  resetScenario() }, 3000);
        }
        runTimer();

        return (
            <>
                {this.state.missionEndingPopup &&
                    <ErrorPopup title={"Mission Error!"} description={"You decide that reaching your destination is not worth " +
                    "putting your expensive telescope and crew at risk, so you immediately plot a " +
                    "course back to earth."} open={true} closePopup={() => this.props.history.push('/activity/rocket-building')} />
                }

                <Container fluid className={"d-flex h-100 flex-column"} style={{margin: "0", padding: "0",
                    textAlign: "left", overflow: "hidden"}}>
                    {/*backgroundImage:`url(${stellarBackground})`*/}
                    {/*<BackgroundAnimation />*/}
                    <div className="stellar-wrapper">
                        <div className="sliding-background">
                            <img alt={"Long Stellar Background"} src={long_bg} />
                        </div>
                    </div>

                    <Row style={{margin: 0, height: 50, width: "100%", backgroundColor: "rgba(17, 28, 74, 0.9)"}}>
                        {this.state.showScrollingScenarioText &&
                            <TextScrollBarAnimation text={this.state.scrollingScenarioText} runAnimation={this.state.runScrollingText} />
                        }
                    </Row>

                    <Row style={{margin: "2%"}}>
                        <Col>
                            <Button className={"green-button"} style={{float: "left", width: 100,
                                clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                    onClick={() => this.props.history.push('/activity/rocket-building')}>
                                <i className="fa fa-arrow-left" />
                            </Button>
                        </Col>

                        <Col>
                            {this.state.iteration === 6 &&
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


                    <Row style={{margin: 0, padding: 0}}>
                        <Col className={"align-items-center justify-content-center"} style={{display: "flex", margin: 0, padding: 0}}>
                            <Col className={"ship"}>
                                <RocketAnimation cone={this.state.cone} body={this.state.body} engine={this.state.engine}
                                                 booster={this.state.booster} />
                            </Col>
                        </Col>
                    </Row>


                    {/*<Row style={{margin: 10, padding: 0}} className={"justify-content-center"}>*/}
                    {/*    <Col className={"col-8"}>*/}
                    {/*        <RocketBarAnimation xStart={this.state.xStart} />*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}

                    <Row className={"justify-content-center"}>
                        <Col className={"col-md-10 col col-10 col-lg-5 ml-auto"} style={{margin: 50}}>
                            <RocketBarAnimation xStart={this.state.xStart} />
                        </Col>

                        <Col className={"col-12 col-md-12 col-lg-5 ml-auto"} style={{padding: 10, color: "white", minHeight: 330}}>
                            <div style={{position: "absolute", width: "100%", height: "100%",
                                backgroundColor: "rgba(17, 28, 74, 0.9)"}} />

                                <Container>
                                    {/*<Row style={{padding: 10}}>*/}
                                    {/*    <Col className={"col-10"}>*/}
                                    {/*        <h2>Scenario</h2>*/}
                                    {/*    </Col>*/}
                                    {/*</Row>*/}

                                    <Row style={{paddingLeft: 10}}>
                                        <Col className={"col-12"}>
                                            <p style={{marginTop: 20, fontWeight: "bold", fontSize: 20}}>{this.state.loadedScenario}</p>
                                        </Col>
                                    </Row>

                                    {this.state.loadedScenario !== "Flying to your destination" && this.state.iteration !== 6 &&
                                        <Row className={"justify-content-center"} style={{marginTop: 10}}>
                                            <Col className={"col-6 col-md-4"}>
                                                <ScenarioRadioButton value={this.state.scenarioRadioVal}
                                                                     changeValue={updateIteration}  />

                                                {/*<Button className={"green-button"} style={{float: "right", width: "50%",*/}
                                                {/*    clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}*/}
                                                {/*        onClick={() => updateIteration(false)}>*/}
                                                {/*    No*/}
                                                {/*</Button>*/}
                                            </Col>

                                            {/*<Col className={"col-6 col-md-4"}>*/}
                                            {/*    <Button className={"green-button"} style={{float: "right", width: "50%",*/}
                                            {/*        clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}*/}
                                            {/*        onClick={() => updateIteration(true)}>*/}
                                            {/*        Yes*/}
                                            {/*    </Button>*/}
                                            {/*</Col>*/}
                                        </Row>
                                    }
                                </Container>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default FlightSimulator;