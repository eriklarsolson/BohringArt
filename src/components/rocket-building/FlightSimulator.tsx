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
import PartPropertySlider from "./PartPropertySlider";
import line from "../shared/header/line.png";
import MessagePopup from "../shared/modals/MessagePopup";

class FlightSimulator extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            cone: this.props.location.state.cone,
            body: this.props.location.state.body,
            booster: this.props.location.state.booster,
            engine: this.props.location.state.engine,
            continuingMission: true, //Turn to false if we turn rocket home to go home (use to skip scenarios)
            telescopeDetached: false, //Turn to true if we detach telescope (use to skip scenarios)
            fuelTotal: 0,
            airResistanceTotal: 0,
            massTotal: 0,
            thrustTotal: 0,
            missionEndingText: "",
            missionEndingPopup: false,
            missionMessageText: "",
            missionMessagePopup: false,
            yesValue: "Yes",
            noValue: "No",
            iteration: 0,
            xStart: 0,
            scenarios: [ //Question types: 0 - fuel dependent, 1 - weight dependent, 2 - Random
                {
                    question: "Your launch was partially successful; while you made it to space, you are significantly off course. Would you like to expend 10% of your remaining fuel supply to correct your bearings?",
                    answer: undefined,
                    questionType: 1, //Fuel-dependent
                    yesAnswer: "You instruct your onboard crew to make the necessary course corrections, expelling 10% of your fuel supply.",
                    noAnswer: "You continue on your current trajectory.",
                    yesCheck: "Expend fuel",
                    noCheck: "Carry on"
                    //(No/Yes-Delayed Consequence)
                },
                {
                    question: "On your way to ____ you discover that your rocket cannot hold enough fuel to return home. Do you turn back, or risk having to eject your telescope or living supplies to get your crew back home?",
                    answer: undefined, //Undefined is default, and will update on their selection
                    questionType: 0, //Weight-dependent
                    yesAnswer: "You decide that reaching your destination is not worth putting your expensive telescope and crew at risk, so you immediately plot a course back to earth.",
                    noAnswer: "You choose to press on and continue the mission, in spite of your recent discovery.",
                    yesCheck: "Turn back",
                    noCheck: "Carry on"
                    //(No-Delayed Consequence)
                },
                {
                    question: "There was an unexpected gravitational factor that has thrown the rocket off course, do you use 50% of your designated return fuel in order to stay on course?",
                    answer: undefined,
                    questionType: 2, //Random
                    yesAnswer: "You use 50% of your return fuel TODO",
                    noAnswer: "You do not use the fuel TODO",
                    yesCheck: "Use the fuel",
                    noCheck: "Carry on"
                },
                {
                    question: "Your rocket was too massive for launch, resulting in a final velocity that is much smaller than desired. Now your crew does not have the supplies to last the entire journey. Would you like to detach from the telescope, which would save your crew but potentially fail the mission? ",
                    answer: undefined,
                    questionType: 0, //Fuel-dependent
                    yesAnswer: "You detach the telescope, giving a boost to the rest of your rocket and ensuring your crew’s safety.",
                    noAnswer: "No, you do not detach the telescope, and carry on with your mission. TODO",
                    yesCheck: "Detach the telescope",
                    noCheck: "Carry on"
                },
                {
                    question: "The lifetime of the isotope heating up the telescope is only going to last ten years. Do you want to use more fuel (20%) to speed things up?",
                    answer: undefined,
                    questionType: 2, //Random
                    yesAnswer: "Yes, we divert more fuel TODO",
                    noAnswer: "No, we do not use any more fuel TODO",
                    yesCheck: "Yes",
                    noCheck: "No"
                },
                {
                    question: "There was a computer glitch resulting in your refrigeration cooling system to fail. You now only have 75% of your food left. Would you like to continue the mission and risk the lives of the Astronauts or dump the telescope and return home?",
                    answer: undefined,
                    questionType: 2, //Random
                    yesAnswer: "You do not detach the telescope, and carry on the mission TODO",
                    noAnswer: "You detach the telescope and return home!",
                    yesCheck: "Carry on",
                    noCheck: "Detach the telescope"
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
                },
                {
                    text: "You’ve reached your destination with both your crew and telescope intact, but you cannot  stay long since you had to eject 50% of designated return fuel to correct a course deviation, and now must eject some of your living supplies to make it back home."
                },
                { //Best rocket
                    text: "Mission Success! You were able to reach your destination with both your crew and telescope intact, without losing any living supplies or using extra fuel. Good Job!"
                },
                {
                    text: "You were not able to reach your destination, but you were able to return back home before losing your crew and telescope to the vastness of space."
                },
                {
                    text: "You were not able to reach your destination, but you were able to bring your crew back home at the cost of having to eject your telescope."
                }
            ]
        };
    }

    componentDidMount() {
        let total = 0;
        total += (this.state.booster.thrust * 2); //Note: 2 side boosters
        total += this.state.engine.thrust;
        this.setState({thrustTotal: total})

        total = 0;
        total += this.state.body.fuelCapacity;
        total += (this.state.booster.fuelCapacity * 2); //Note: 2 side boosters
        this.setState({fuelTotal: total})

        total = 0;
        total += this.state.cone.airResistance;
        total += (this.state.booster.airResistance * 2); //Note: 2 side boosters
        this.setState({airResistanceTotal: total})

        total = 0;
        total += this.state.cone.mass;
        total += this.state.body.mass;
        total += (this.state.booster.mass * 2); //Note: 2 side boosters
        total += this.state.engine.mass;
        total += 11110 //Telescope weight
        this.setState({massTotal: total})
    }

    //TODO - So depending on actions, decrease some of the total properties (like lose 10% of total fuel)

    render() {
        const maxFuelCapacity = 383003;
        const maxAirResistance = 1320000;
        const maxTotalMass = 51103;
        const maxThrust = 11680.1;

        const updateIteration = (event: { target: { value: any; }; }) => {
            // this.setState({showScrollingScenarioText: false, runScrollingText: false})

            let answer = true;
            if(event.target.value === "Yes") {
                this.setState({scenarioRadioVal: "Yes"})

                //, showScrollingScenarioText: true,
                //                     scrollingScenarioXStart: "100%", runScrollingText: true,
                //                     scrollingScenarioText: this.state.scenarios[this.state.iteration].noAnswer

                switch (this.state.iteration) {
                    case 0:
                        //Remove 10% of fuel
                        this.setState({fuelTotal: (this.state.fuelTotal * .9)})

                        break;
                    case 1:
                        //TODO
                        break
                    case 2:
                        //Remove 50% of fuel
                        this.setState({fuelTotal: (this.state.fuelTotal * .5)})

                        break;
                    case 3:
                        //Detach the telescope
                        this.setState({massTotal: (this.state.massTotal - 11110), telescopeDetached: true})

                        break;
                    case 4:
                        //Remove 20% of fuel
                        this.setState({fuelTotal: (this.state.fuelTotal * .8)})

                        break;
                    case 5:
                        //TODO

                        break;
                }

                if(this.state.iteration === 1) {
                    //If answered yes on this question, end mission immediately
                    this.setState({missionEndingText: this.state.scenarios[this.state.iteration].yesAnswer,
                        missionEndingPopup: true})
                } else {
                    this.setState({missionMessageText: this.state.scenarios[this.state.iteration].yesAnswer,
                        missionMessagePopup: true})
                }
            } else {
                // this.setState({scenarioRadioVal: "No",
                //     scrollingScenarioXStart: "100%", runScrollingText: true})
                answer = false;

                switch (this.state.iteration) {
                    case 0:
                        this.setState({missionMessageText: this.state.scenarios[this.state.iteration].noAnswer,
                            missionMessagePopup: true})

                        //TODO
                        //Carry on

                        break;
                    case 1:
                        this.setState({missionMessageText: this.state.scenarios[this.state.iteration].noAnswer,
                            missionMessagePopup: true})

                        //TODO
                        //Carry on anyway, so what cost?

                        break
                    case 2:
                        this.setState({missionMessageText: this.state.scenarios[this.state.iteration].noAnswer,
                            missionMessagePopup: true})

                        //TODO
                        //No fuel used, so what cost? You are way off course here

                        break;
                    case 3:
                        this.setState({missionMessageText: this.state.scenarios[this.state.iteration].noAnswer,
                            missionMessagePopup: true})

                        //TODO
                        //Carry on with mission, at what cost? Maybe fuel?

                        break;
                    case 4:
                        this.setState({missionMessageText: this.state.scenarios[this.state.iteration].noAnswer,
                            missionMessagePopup: true})

                        //TODO
                        //No fuel used

                        break;
                    case 5:
                        this.setState({missionMessageText: this.state.scenarios[this.state.iteration].noAnswer,
                            missionMessagePopup: true})

                        //TODO
                        //Detach the telescope
                        this.setState({massTotal: (this.state.massTotal - 11110), telescopeDetached: true, continuingMission: true})

                        break;
                }
            }

            //Update scenario's state for answer
            let scenarios = [...this.state.scenarios];
            let scenario = {...scenarios[this.state.iteration]};
            scenario.answer = answer;
            scenarios[this.state.iteration]= scenario;
            this.setState({scenarios: scenarios});

            this.setState({iteration: this.state.iteration + 1, xStart: this.state.xStart + 100})

            runTimer()
        }

        //TODO - Need to redo next two functions for better ranges (as it doesn't range from 0% to 100%,
        // it ranges from like 90% to 100%)
        const getMassRange = () => {
            const total = this.state.massTotal;

            let massRange = 0;
            if(total < (maxTotalMass * 0.85)) {
                massRange = 0;
            } else if(total >= (maxTotalMass * 0.85) && total < (maxTotalMass * 0.95)) {
                massRange = 1;
            } else {
                massRange = 2;
            }

            return massRange
        }

        const getFuelRange = () => {
           const total = this.state.fuelTotal;

            let fuelRange = 0;
            if(total < (maxFuelCapacity * 0.50)) {
                fuelRange = 0;
            } else if(total >= (maxFuelCapacity * 0.50) && total < (maxFuelCapacity * 0.75)) {
                fuelRange = 1;
            } else {
                fuelRange = 2;
            }

            return fuelRange
        }

        const updateScenarioDetails = () => {
            const fuelRange = getFuelRange();
            const massRange = getMassRange();

            if(this.state.iteration === 6) {
                //TODO - Need to check all properties here (like fuel/weight ranges) and also variables
                // like returning home or telescope detached, or scenario answers, etc...
                if(this.state.missionContinuing) {
                    if(this.state.telescopeDetached) {

                    } else {

                    }
                } else {
                    if(this.state.telescopeDetached) {
                        if(fuelRange === 0) {
                            if(massRange === 0) {

                            } else  if(massRange === 1) {

                            } else {

                            }
                        } else if(fuelRange === 1) {
                            if(massRange === 0) {

                            } else  if(massRange === 1) {

                            } else {

                            }
                        } else {
                            if(massRange === 0) {

                            } else  if(massRange === 1) {

                            } else {

                            }
                        }
                    } else {
                        if(fuelRange === 0) {
                            if(massRange === 0) {

                            } else  if(massRange === 1) {

                            } else {

                            }
                        } else if(fuelRange === 1) {
                            if(massRange === 0) {

                            } else  if(massRange === 1) {

                            } else {

                            }
                        } else {
                            if(massRange === 0) {

                            } else  if(massRange === 1) {

                            } else {

                            }
                        }
                    }
                }

                this.setState({loadedScenario: "TODO - HANDLE OUTCOME HERE"})
            } else {

                //TODO - Check here if flying home and/or telescope detached to skip scenarios
                if(this.state.iteration === 5 && this.state.telescopeDetached) {
                    this.setState({iteration: this.state.iteration + 1})
                } else if(this.state.iteration === 0) {
                    if(getFuelRange() === 0) {
                        //If on lower side of fuel range, show this question
                        this.setState({loadedScenario: this.state.scenarios[this.state.iteration].question,
                            yesValue:  this.state.scenarios[this.state.iteration].yesCheck,
                            noValue: this.state.scenarios[this.state.iteration].noCheck})
                    } else {
                        this.setState({iteration: this.state.iteration + 1})
                    }
                    this.setState({iteration: this.state.iteration + 1})
                } else if(this.state.iteration === 1) {
                    if(getMassRange() === 2) {
                        //If heavy mass, show this question
                        this.setState({loadedScenario: this.state.scenarios[this.state.iteration].question,
                            yesValue:  this.state.scenarios[this.state.iteration].yesCheck,
                            noValue: this.state.scenarios[this.state.iteration].noCheck})
                    } else {
                        this.setState({iteration: this.state.iteration + 1})
                    }
                } else if(this.state.iteration === 3) {
                    if(getMassRange() === 2 || getMassRange() === 1) {
                        //If medium/heavy mass, show this question
                        this.setState({loadedScenario: this.state.scenarios[this.state.iteration].question,
                            yesValue:  this.state.scenarios[this.state.iteration].yesCheck,
                            noValue: this.state.scenarios[this.state.iteration].noCheck})
                    } else {
                        this.setState({iteration: this.state.iteration + 1})
                    }
                } else {
                    this.setState({loadedScenario: this.state.scenarios[this.state.iteration].question,
                        yesValue:  this.state.scenarios[this.state.iteration].yesCheck,
                        noValue: this.state.scenarios[this.state.iteration].noCheck})
                }
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
                    <ErrorPopup title={"Mission Error!"} description={this.state.missionEndingText} open={true} closePopup={() => this.props.history.push('/activity/rocket-building')} />
                }

                {this.state.missionMessagePopup &&
                    <MessagePopup title={"Mission Message"} description={this.state.missionMessageText} open={true} closePopup={() => this.setState({missionMessagePopup: false})} />
                }


                <div className="stellar-wrapper">
                    <div className="sliding-background">
                        <img alt={"Long Stellar Background"} src={long_bg} />
                    </div>
                </div>

                <Container fluid className={"d-flex h-100 flex-column"} style={{margin: "0", padding: "0",
                    textAlign: "left", overflow: "hidden"}}>
                    {/*backgroundImage:`url(${stellarBackground})`*/}
                    {/*<BackgroundAnimation />*/}

                    {/*<Row style={{margin: 0, height: 50, width: "100%", backgroundColor: "rgba(17, 28, 74, 0.9)"}}>*/}
                    {/*    {this.state.showScrollingScenarioText &&*/}
                    {/*        <TextScrollBarAnimation text={this.state.scrollingScenarioText} runAnimation={this.state.runScrollingText} />*/}
                    {/*    }*/}
                    {/*</Row>*/}

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

                        <Col className={"col-12 col-md-12 col-lg-5 ml-auto"} style={{color: "white", minHeight: 330}}>
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
                                            <Col className={"col-8 col-md-6"}>
                                                <ScenarioRadioButton yesValue={this.state.yesValue} noValue={this.state.noValue}
                                                    value={this.state.scenarioRadioVal}
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

                    <Row className={"justify-content-center"}
                         style={{margin: 0, width: "100%", backgroundColor: "#29405B", borderBottom: "2px solid white", color: "white"}}>
                        <Col className="col-3" style={{padding: 1, maxWidth: "20%", flex: "0 0 20%"}}>
                            <Container fluid>
                                <Row className={"justify-content-center align-items-center"}>
                                    <Col className="col-5">
                                        <p style={{fontWeight: "bold", fontSize: 14, marginBottom: 0}}>Total Fuel Capacity:</p>

                                    </Col>
                                    <div style={{minWidth: 45, height: 25, marginLeft: 5, backgroundColor: "#162F4C"}}>
                                        <p style={{padding: 5, fontSize: 10, marginBottom: 0}}>{Math.floor(this.state.fuelTotal)} kg</p>
                                    </div>
                                     <Col className="col-8 col-md-8 col-lg-4">
                                        <PartPropertySlider
                                            value={(this.state.fuelTotal / maxFuelCapacity) * 100} />
                                    </Col>
                                </Row>
                            </Container>
                        </Col>

                        {/*<img src={line} alt={"Menu seperator"} style={{height: 35, marginTop: 5}} />*/}

                        {/*<Col className="col-3" style={{padding: 1, maxWidth: "20%", flex: "0 0 20%"}}>*/}
                        {/*    <Container fluid>*/}
                        {/*        <Row className={"justify-content-center align-items-center"}>*/}
                        {/*            <Col className="col-5">*/}
                        {/*                <p style={{fontWeight: "bold", fontSize: 14, marginBottom: 0}}>Total Air Resistance:</p>*/}

                        {/*            </Col>*/}
                        {/*            <div style={{minWidth: 45, height: 25, marginLeft: 5, backgroundColor: "#162F4C"}}>*/}
                        {/*                <p style={{padding: 5, fontSize: 10, marginBottom: 0}}>{Math.floor(this.state.airResistanceTotal)} N</p>*/}
                        {/*            </div>*/}
                        {/*            <Col className="col-8 col-md-8 col-lg-4">*/}
                        {/*                <PartPropertySlider*/}
                        {/*                    value={(this.state.airResistanceTotal / maxAirResistance) * 100} />*/}
                        {/*            </Col>*/}
                        {/*        </Row>*/}
                        {/*    </Container>*/}
                        {/*</Col>*/}

                        <img src={line} alt={"Menu seperator"} style={{height: 35, marginTop: 5}} />

                        <Col className="col-3" style={{padding: 1, maxWidth: "20%", flex: "0 0 20%"}}>
                            <Container fluid>
                                <Row className={"justify-content-center align-items-center"}>
                                    <Col className="col-5">
                                        <p style={{fontWeight: "bold", fontSize: 14, marginBottom: 0}}>Total Mass:</p>

                                    </Col>
                                    <div style={{minWidth: 45, height: 25, backgroundColor: "#162F4C"}}>
                                        <p style={{padding: 5, fontSize: 10, marginBottom: 0}}>{Math.floor(this.state.massTotal)} kg</p>
                                    </div>
                                     <Col className="col-8 col-md-8 col-lg-4">
                                        <PartPropertySlider
                                            value={(this.state.massTotal / maxTotalMass) * 100} />
                                    </Col>
                                </Row>
                            </Container>
                        </Col>

                        {/*<img src={line} alt={"Menu seperator"} style={{height: 35, marginTop: 5}} />*/}

                        {/*<Col className="col-3" style={{padding: 1, maxWidth: "20%", flex: "0 0 20%"}}>*/}
                        {/*    <Container fluid>*/}
                        {/*        <Row className={"justify-content-center align-items-center"}>*/}
                        {/*            <Col className="col-5">*/}
                        {/*                <p style={{fontWeight: "bold", fontSize: 14, marginBottom: 0}}>Total Thrust:</p>*/}

                        {/*            </Col>*/}
                        {/*            <div style={{minWidth: 45, height: 25, marginLeft: 5, backgroundColor: "#162F4C"}}>*/}
                        {/*                <p style={{padding: 5, fontSize: 10, marginBottom: 0}}>{Math.floor(this.state.thrustTotal)} kN</p>*/}
                        {/*            </div>*/}
                        {/*             <Col className="col-8 col-md-8 col-lg-4">*/}
                        {/*                <PartPropertySlider*/}
                        {/*                    value={(this.state.thrustTotal / maxThrust) * 100} />*/}
                        {/*            </Col>*/}
                        {/*        </Row>*/}
                        {/*    </Container>*/}
                        {/*</Col>*/}
                    </Row>
                </Container>
            </>
        )
    }
}
export default FlightSimulator;