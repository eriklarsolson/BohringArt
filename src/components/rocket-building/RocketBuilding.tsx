import React from "react";
import {Container, Row, Col, Modal} from 'react-bootstrap'
import Sidebar from "./Sidebar";
import Button from "react-bootstrap/Button";
import 'font-awesome/css/font-awesome.min.css';
import ObjectivePopup from "../shared/modals/ObjectivePopup";
import leftarrow from "../stellar-cycle/leftarrow.png";
import rightarrow from "../stellar-cycle/rightarrow.png";
import payload_1 from "./images/payloads/payload_1.png"
import payload_2 from "./images/payloads/payload_2.png"
import payload_3 from "./images/payloads/payload_3.png"
import interstage_1 from "./images/interstages/interstage_1.png"
import interstage_2 from "./images/interstages/interstage_2.png"
import sideBooster_1 from "./images/sideBoosters/sideBooster_1.png"
import sideBooster_2 from "./images/sideBoosters/sideBooster_2.png"
import engine_1 from "./images/engines/engine_1.png"
import engine_2 from "./images/engines/engine_2.png"
import RocketBuildingQuestionPopup from "../shared/modals/RocketBuildingQuestionPopup";
import background from "./images/background.png";

class RocketBuilding extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            questionPopupOpened: false,
            parentIndex: 0,
            popupOpened: true,
            payloads: [
                {
                    image: payload_1,
                    title: "Payload 1",
                    mass: 50,
                    airResistance: 5,
                    fuelCapacity: 80
                },
                {
                    image: payload_2,
                    title: "Payload 2",
                    mass: 30,
                    airResistance: 12,
                    fuelCapacity: 10
                },
                {
                    image: payload_3,
                    title: "Payload 3",
                    mass: 99,
                    airResistance: 23,
                    fuelCapacity: 9
                }
            ],
            payloadIndex: 0,
            interstages: [
                {
                    image: interstage_1,
                    title: "Interstage 1",
                    mass: 53,
                    airResistance: 78,
                    fuelCapacity: 54
                },
                {
                    image: interstage_2,
                    title: "Interstage 2",
                    mass: 27,
                    airResistance: 2,
                    fuelCapacity: 10
                }
            ],
            interstageIndex: 0,
            sideBoosters: [
                {
                    image: sideBooster_1,
                    title: "Side Booster 1",
                    mass: 59,
                    airResistance: 9,
                    fuelCapacity: 23
                },
                {
                    image: sideBooster_2,
                    title: "Side Booster 2",
                    mass: 50,
                    airResistance: 11,
                    fuelCapacity: 34
                }
            ],
            sideBoosterIndex: 0,
            engines: [
                {
                    image: engine_1,
                    title: "Engine 1",
                    mass: 85,
                    airResistance: 5,
                    fuelCapacity: 53
                },
                {
                    image: engine_2,
                    title: "Engine 2",
                    mass: 33,
                    airResistance: 23,
                    fuelCapacity: 10
                }
            ],
            engineIndex: 0
        };
    }

    render() {
        const cycleQuestionPopup = () => {
            this.setState({questionPopupOpened: !this.state.questionPopupOpened})
        }

        const cyclePopup = () => {
            this.setState({popupOpened: !this.state.popupOpened})
        }

        const payloadArrow = (left: boolean) => {
            this.setState({parentIndex: 0})

            if(left) {
                if (this.state.payloadIndex + 1 === this.state.payloads.length) {
                    this.setState({payloadIndex: 0})
                } else {
                    this.setState({payloadIndex: this.state.payloadIndex + 1})
                }
            } else {
                if (this.state.payloadIndex - 1 === -1) {
                    this.setState({payloadIndex: this.state.payloads.length - 1})
                } else {
                    this.setState({payloadIndex: this.state.payloadIndex - 1})
                }
            }
        }

        const interstageArrow = (left: boolean) => {
            this.setState({parentIndex: 1})

            if(left) {
                if (this.state.interstageIndex + 1 === this.state.interstages.length) {
                    this.setState({interstageIndex: 0})
                } else {
                    this.setState({interstageIndex: this.state.interstageIndex + 1})
                }
            } else {
                if (this.state.interstageIndex - 1 === -1) {
                    this.setState({interstageIndex: this.state.interstages.length - 1})
                } else {
                    this.setState({interstageIndex: this.state.interstageIndex - 1})
                }
            }
        }

        const sideBoostersArrow = (left: boolean) => {
            this.setState({parentIndex: 2})

            if(left) {
                if (this.state.sideBoosterIndex + 1 === this.state.sideBoosters.length) {
                    this.setState({sideBoosterIndex: 0})
                } else {
                    this.setState({sideBoosterIndex: this.state.sideBoosterIndex + 1})
                }
            } else {
                if (this.state.sideBoosterIndex - 1 === -1) {
                    this.setState({sideBoosterIndex: this.state.sideBoosters.length - 1})
                } else {
                    this.setState({sideBoosterIndex: this.state.sideBoosterIndex - 1})
                }
            }
        }

        const engineArrow = (left: boolean) => {
            this.setState({parentIndex: 3})

            if(left) {
                if (this.state.engineIndex + 1 === this.state.engines.length) {
                    this.setState({engineIndex: 0})
                } else {
                    this.setState({engineIndex: this.state.engineIndex + 1})
                }
            } else {
                if (this.state.engineIndex - 1 === -1) {
                    this.setState({engineIndex: this.state.engines.length - 1})
                } else {
                    this.setState({engineIndex: this.state.engineIndex - 1})
                }
            }
        }

        //Depending on what type of piece you clicked last, display details in sidebar about that list
        const getCorrectList = () => {
            if (this.state.parentIndex === 0) {
                return this.state.payloads;
            } else if (this.state.parentIndex === 1) {
                return this.state.interstages;
            } else if (this.state.parentIndex === 2) {
                return this.state.sideBoosters;
            } else if (this.state.parentIndex === 3) {
                return this.state.engines;
            }
        }

        const getCorrectIndex = () => {
            if (this.state.parentIndex === 0) {
                return this.state.payloadIndex;
            } else if (this.state.parentIndex === 1) {
                return this.state.interstageIndex;
            } else if (this.state.parentIndex === 2) {
                return this.state.sideBoosterIndex
            } else if (this.state.parentIndex === 3) {
                return this.state.engineIndex;
            }
        }

        const getSidebarObject = () => {
            const correctList = getCorrectList();
            const correctIndex = getCorrectIndex();

            return correctList[correctIndex];
        }

        return (
            <>
                <ObjectivePopup title={"03 To The Stars"}
                                open={this.state.popupOpened}
                                description={"Using the arrows on the left and right, create a rocket consisting of an engine, boosters, a body, and a cone. Make sure to account for fuel, air resistance, and weight as all affect the rocket’s motion greatly. Click LAUNCH  to send your rocket off into space with the telescope as the payload. Along the way, answer TEXT-based questions that determine the fate of your journey! Remember to answer the questions keeping in mind the cost of the rocket as well as the survival of its crew. \n"}
                                closePopup={cyclePopup} />

                <RocketBuildingQuestionPopup open={this.state.questionPopupOpened} closePopup={cycleQuestionPopup} />

                <Container fluid className={"d-flex h-100 flex-column"} style={{margin: "0", padding: "0", backgroundImage:`url(${background})`}}>
                    <Row style={{margin: 0}}>
                        <Col className={"col-2 vh-100"} style={{color: "white", padding: 0}}>
                            <Sidebar cone={this.state.payloads[this.state.payloadIndex]}
                                     changeCone={payloadArrow}
                                     body={this.state.interstages[this.state.interstageIndex]}
                                     changeBody={interstageArrow}
                                     booster={this.state.sideBoosters[this.state.sideBoosterIndex]}
                                     changeBooster={sideBoostersArrow}
                                     engine={this.state.engines[this.state.engineIndex]}
                                     changeEngine={engineArrow}/>
                        </Col>

                        <Col className={"col-10"} style={{margin: "0", padding: "0"}}>
                            <Container fluid style={{margin: "0", padding: "0"}}>
                                <Row style={{margin: 0}}>
                                    <Col className="col-2" style={{margin: "3%"}}>
                                        <Button className={"green-button"} style={{float: "left", width: 100,
                                            clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                onClick={() => this.props.history.push('/activity/telescope-activity')}>
                                            <i className="fa fa-arrow-left" />
                                        </Button>
                                    </Col>

                                    <Col style={{margin: "3%"}}>
                                        <p style={{color: "#29405B", fontSize: "28px", fontWeight: "bold"}}>Rocket Assembly</p>
                                    </Col>

                                    <Col className={"col-2 ml-auto"} style={{padding: 0, marginTop: "3%"}}>
                                        <Row style={{margin: 0}} className={"justify-content-end"}>
                                            <Button className={"blue-button"} style={{marginBottom: 15, width: 200,
                                                }} onClick={cycleQuestionPopup}>More Info</Button>
                                        </Row>

                                        <Row style={{margin: 0}} className={"justify-content-end"}>
                                            <Button className={"blue-button"} style={{marginBottom: 15, width: 200,
                                            }} onClick={cyclePopup}>Objective</Button>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row style={{margin: 0}}>
                                    <Container fluid>
                                        <Row className={"justify-content-center"}>
                                            {/*<Col className={"col-1"}>*/}
                                            {/*    <Row style={{marginTop: 30, marginBottom: 30}}>*/}
                                            {/*        <img className={"arrow"} src={leftarrow} style={{filter: "contrast(0%)"}}*/}
                                            {/*             height="100px" alt={"left arrow"}*/}
                                            {/*             onMouseOver={() => this.setState({parentIndex: 0})}*/}
                                            {/*             onClick={() => payloadArrow(true)} />*/}
                                            {/*    </Row>*/}

                                            {/*    <Row style={{marginTop: 30, marginBottom: 30}}>*/}
                                            {/*        <img className={"arrow"} src={leftarrow} style={{filter: "contrast(0%)"}}*/}
                                            {/*             height="100px" alt={"left arrow"}*/}
                                            {/*             onMouseOver={() => this.setState({parentIndex: 1})}*/}
                                            {/*             onClick={() => interstageArrow(true)} />*/}
                                            {/*    </Row>*/}

                                            {/*    <Row style={{marginTop: 30, marginBottom: 30}}>*/}
                                            {/*        <img className={"arrow"} src={leftarrow} style={{filter: "contrast(0%)"}}*/}
                                            {/*             height="100px" alt={"left arrow"}*/}
                                            {/*             onMouseOver={() => this.setState({parentIndex: 2})}*/}
                                            {/*             onClick={() => sideBoostersArrow(true)} />*/}
                                            {/*    </Row>*/}

                                            {/*    <Row style={{marginTop: 30, marginBottom: 30}}>*/}
                                            {/*        <img className={"arrow"} src={leftarrow} style={{filter: "contrast(0%)"}}*/}
                                            {/*             height="100px" alt={"left arrow"}*/}
                                            {/*             onMouseOver={() => this.setState({parentIndex: 3})}*/}
                                            {/*             onClick={() => engineArrow(true)} />*/}
                                            {/*    </Row>*/}
                                            {/*</Col>*/}

                                            <Col className={"col-4"}>
                                                <Row className={"justify-content-center"}>
                                                    <Col className={"col-2 align-self-end"}  style={{margin: 5, padding: 0}}>
                                                        <img className={"part-image"} src={this.state.sideBoosters[this.state.sideBoosterIndex].image} />
                                                    </Col>

                                                    <Col className={"col-3"} style={{margin: 5, padding: 0}}>
                                                        <Row className={"justify-content-center"} style={{margin: 5}}>
                                                            <img className={"part-image"} src={this.state.payloads[this.state.payloadIndex].image} />
                                                        </Row>

                                                        <Row className={"justify-content-center"} style={{margin: 5}}>
                                                            <img className={"part-image"} src={this.state.interstages[this.state.interstageIndex].image} />
                                                        </Row>

                                                        <Row className={"justify-content-center"} style={{margin: 5}}>
                                                            <img className={"part-image"} src={this.state.engines[this.state.engineIndex].image} />
                                                        </Row>
                                                    </Col>

                                                    <Col className={"col-2 align-self-end"}  style={{margin: 5, padding: 0}}>
                                                        <img className={"part-image"} src={this.state.sideBoosters[this.state.sideBoosterIndex].image} />
                                                    </Col>
                                                </Row>
                                            </Col>

                                            {/*<Col className={"col-1"}>*/}
                                            {/*    <Row style={{marginTop: 30, marginBottom: 30}}>*/}
                                            {/*        <img className={"arrow"} src={rightarrow} style={{filter: "contrast(0%)"}}*/}
                                            {/*             height="100px" alt={"left arrow"}*/}
                                            {/*             onMouseOver={() => this.setState({parentIndex: 0})}*/}
                                            {/*             onClick={() => payloadArrow(false)} />*/}
                                            {/*    </Row>*/}

                                            {/*    <Row style={{marginTop: 30, marginBottom: 30}}>*/}
                                            {/*        <img className={"arrow"} src={rightarrow} style={{filter: "contrast(0%)"}}*/}
                                            {/*             height="100px" alt={"left arrow"}*/}
                                            {/*             onMouseOver={() => this.setState({parentIndex: 1})}*/}
                                            {/*             onClick={() => interstageArrow(false)} />*/}
                                            {/*    </Row>*/}

                                            {/*    <Row style={{marginTop: 30, marginBottom: 30}}>*/}
                                            {/*        <img className={"arrow"} src={rightarrow} style={{filter: "contrast(0%)"}}*/}
                                            {/*             height="100px" alt={"right arrow"}*/}
                                            {/*             onMouseOver={() => this.setState({parentIndex: 2})}*/}
                                            {/*             onClick={() => sideBoostersArrow(false)} />*/}
                                            {/*    </Row>*/}

                                            {/*    <Row style={{marginTop: 30, marginBottom: 30}}>*/}
                                            {/*        <img className={"arrow"} src={rightarrow} style={{filter: "contrast(0%)"}}*/}
                                            {/*             height="100px" alt={"right arrow"}*/}
                                            {/*             onMouseOver={() => this.setState({parentIndex: 3})}*/}
                                            {/*             onClick={() => engineArrow(false)} />*/}
                                            {/*    </Row>*/}
                                            {/*</Col>*/}
                                        </Row>
                                    </Container>
                                </Row>

                                <Row style={{paddingRight: "0", marginRight: 0}}>
                                    <Col>
                                        <Button className={"green-button"} style={{float: "right", width: 200, marginBottom: 10,
                                            clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                onClick={() => this.props.history.push({
                                                    pathname: '/activity/flight-simulator',
                                                    state: {payload: this.state.payloads[this.state.payloadIndex],
                                                            interstage: this.state.interstages[this.state.interstageIndex],
                                                            sideBooster: this.state.sideBoosters[this.state.sideBoosterIndex],
                                                            engine: this.state.engines[this.state.engineIndex]}})}>Launch</Button>
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
export default RocketBuilding;