import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from "./Sidebar";
import Button from "react-bootstrap/Button";
import 'font-awesome/css/font-awesome.min.css';
import ObjectivePopup from "../shared/modals/ObjectivePopup";
import cone_1 from "./images/cones/cone_1.png"
import cone_2 from "./images/cones/cone_2.png"
import cone_3 from "./images/cones/cone_3.png"
import cone_4 from "./images/cones/cone_4.png"
import body_1 from "./images/bodys/body_1.png"
import body_2 from "./images/bodys/body_2.png"
import body_3 from "./images/bodys/body_3.png"
import body_4 from "./images/bodys/body_4.png"
import engine_1 from "./images/engines/engine_1.png"
import engine_2 from "./images/engines/engine_2.png"
import engine_3 from "./images/engines/engine_3.png"
import engine_4 from "./images/engines/engine_4.png"
import booster_1_left from "./images/boosters/booster_1_left.png"
import booster_1_right from "./images/boosters/booster_1_right.png"
import booster_2_left from "./images/boosters/booster_2_left.png"
import booster_2_right from "./images/boosters/booster_2_right.png"
import booster_3_left from "./images/boosters/booster_3_left.png"
import booster_3_right from "./images/boosters/booster_3_right.png"
import booster_4_left from "./images/boosters/booster_4_left.png"
import booster_4_middle from "./images/boosters/booster_4_middle.png"
import booster_4_right from "./images/boosters/booster_4_right.png"
import background from "./images/background.png";
import {MoreInfoAnimation} from "./MoreInfoAnimation";
import {ObjectiveSlideOut} from "../shared/modals/ObjectiveSlideOut";

class RocketBuilding extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            questionPopupOpened: false,
            parentIndex: 0,
            popupOpened: true,
            cones: [
                {
                    image: cone_1,
                    title: "Cone 1",
                    mass: 50,
                    airResistance: 5,
                },
                {
                    image: cone_2,
                    title: "Cone 2",
                    mass: 30,
                    airResistance: 12,
                },
                {
                    image: cone_3,
                    title: "Cone 3",
                    mass: 99,
                    airResistance: 23,
                },
                {
                    image: cone_4,
                    title: "Cone 4",
                    mass: 23,
                    airResistance: 23,
                }
            ],
            coneIndex: 0,
            bodys: [
                {
                    image: body_1,
                    title: "Body 1",
                    mass: 53,
                    fuelCapacity: 54
                },
                {
                    image: body_2,
                    title: "Body 2",
                    mass: 27,
                    fuelCapacity: 10
                },
                {
                    image: body_3,
                    title: "Body 3",
                    mass: 53,
                    fuelCapacity: 54
                },
                {
                    image: body_4,
                    title: "Body 4",
                    mass: 22,
                    fuelCapacity: 1
                }
            ],
            bodyIndex: 0,
            boosters: [
                {
                    leftImage: booster_1_left,
                    rightImage: booster_1_right,
                    middleImage: null,
                    title: "Booster 1",
                    mass: 24,
                    airResistance: 3,
                    fuelCapacity: 45,
                    thrust: 10
                },
                {
                    leftImage: booster_2_left,
                    rightImage: booster_2_right,
                    middleImage: null,
                    title: "Booster 3",
                    mass: 59,
                    airResistance: 9,
                    fuelCapacity: 23,
                    thrust: 25
                },
                {
                    leftImage: booster_3_left,
                    rightImage: booster_3_right,
                    middleImage: null,
                    title: "Booster 3",
                    mass: 67,
                    airResistance: 99,
                    fuelCapacity: 3,
                    thrust: 35
                },
                {
                    leftImage: booster_4_left,
                    rightImage: booster_4_right,
                    middleImage: booster_4_middle,
                    title: "Booster 4",
                    mass: 59,
                    airResistance: 9,
                    fuelCapacity: 23,
                    thrust: 45
                },
            ],
            boosterIndex: 0,
            engines: [
                {
                    image: engine_1,
                    title: "Engine 1",
                    mass: 85,
                    thrust: 15
                },
                {
                    image: engine_2,
                    title: "Engine 2",
                    mass: 33,
                    thrust: 25
                },
                {
                    image: engine_3,
                    title: "Engine 3",
                    mass: 85,
                    thrust: 35
                },
                {
                    image: engine_4,
                    title: "Engine 4",
                    mass: 33,
                    thrust: 45
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

        const changeCone = (index: number) => {
            this.setState({coneIndex: index})
            this.setState({parentIndex: 0})
        }

        // const payloadArrow = (left: boolean) => {
        //     this.setState({parentIndex: 0})
        //
        //     if(left) {
        //         if (this.state.coneIndex + 1 === this.state.cones.length) {
        //             this.setState({coneIndex: 0})
        //         } else {
        //             this.setState({coneIndex: this.state.coneIndex + 1})
        //         }
        //     } else {
        //         if (this.state.coneIndex - 1 === -1) {
        //             this.setState({coneIndex: this.state.cones.length - 1})
        //         } else {
        //             this.setState({coneIndex: this.state.coneIndex - 1})
        //         }
        //     }
        // }

        const changeBody = (index: number) => {
            this.setState({bodyIndex: index})
            this.setState({parentIndex: 1})
        }

        // const interstageArrow = (left: boolean) => {
        //     this.setState({parentIndex: 1})
        //
        //     if(left) {
        //         if (this.state.bodyIndex + 1 === this.state.bodys.length) {
        //             this.setState({bodyIndex: 0})
        //         } else {
        //             this.setState({bodyIndex: this.state.bodyIndex + 1})
        //         }
        //     } else {
        //         if (this.state.bodyIndex - 1 === -1) {
        //             this.setState({bodyIndex: this.state.bodys.length - 1})
        //         } else {
        //             this.setState({bodyIndex: this.state.bodyIndex - 1})
        //         }
        //     }
        // }

        const changeBooster = (index: number) => {
            this.setState({boosterIndex: index})
            this.setState({parentIndex: 2})
        }

        // const boostersArrow = (left: boolean) => {
        //     this.setState({parentIndex: 2})
        //
        //     if(left) {
        //         if (this.state.boosterIndex + 1 === this.state.boosters.length) {
        //             this.setState({boosterIndex: 0})
        //         } else {
        //             this.setState({boosterIndex: this.state.boosterIndex + 1})
        //         }
        //     } else {
        //         if (this.state.boosterIndex - 1 === -1) {
        //             this.setState({boosterIndex: this.state.boosters.length - 1})
        //         } else {
        //             this.setState({boosterIndex: this.state.boosterIndex - 1})
        //         }
        //     }
        // }

        const changeEngine = (index: number) => {
            this.setState({engineIndex: index})
            this.setState({parentIndex: 3})
        }

        // const engineArrow = (left: boolean) => {
        //     this.setState({parentIndex: 3})
        //
        //     if(left) {
        //         if (this.state.engineIndex + 1 === this.state.engines.length) {
        //             this.setState({engineIndex: 0})
        //         } else {
        //             this.setState({engineIndex: this.state.engineIndex + 1})
        //         }
        //     } else {
        //         if (this.state.engineIndex - 1 === -1) {
        //             this.setState({engineIndex: this.state.engines.length - 1})
        //         } else {
        //             this.setState({engineIndex: this.state.engineIndex - 1})
        //         }
        //     }
        // }

        const getTotalThrust = () => {
            let total = 0;
            total += (this.state.boosters[this.state.boosterIndex].thrust * 2); //Note: 2 side boosters
            total += this.state.engines[this.state.engineIndex].thrust;

            return total;
        }

        const getTotalFuelCapacity = () => {
            let total = 0;
            total += this.state.bodys[this.state.bodyIndex].fuelCapacity;
            total += (this.state.boosters[this.state.boosterIndex].fuelCapacity * 2); //Note: 2 side boosters

            return total;
        }

        const getTotalAirResistance = () => {
            let total = 0;
            total += this.state.cones[this.state.coneIndex].airResistance;
            total += (this.state.boosters[this.state.boosterIndex].airResistance * 2); //Note: 2 side boosters

            return total;
        }


        const getTotalMass = () => {
            let total = 0;
            total += this.state.cones[this.state.coneIndex].mass;
            total += this.state.bodys[this.state.bodyIndex].mass;
            total += (this.state.boosters[this.state.boosterIndex].mass * 2); //Note: 2 side boosters
            total += this.state.engines[this.state.engineIndex].mass;

            return total;
        }

        return (
            <>
                {/*<ObjectivePopup title={"03 To The Stars"}*/}
                {/*                open={this.state.popupOpened}*/}
                {/*                description={"Using the arrows on the left and right, create a rocket consisting of an engine, boosters, a body, and a cone. Make sure to account for fuel, air resistance, and weight as all affect the rocket’s motion greatly. Click LAUNCH  to send your rocket off into space with the telescope as the payload. Along the way, answer TEXT-based questions that determine the fate of your journey! Remember to answer the questions keeping in mind the cost of the rocket as well as the survival of its crew. \n"}*/}
                {/*                closePopup={cyclePopup} />*/}

                {this.state.popupOpened &&
                    <div style={{position: "absolute", width: "100%", height: "100%", zIndex: 4, overflow: "hidden"}}>
                        <ObjectiveSlideOut title={"03 To The Stars"}
                                           description={"Using the arrows on the left and right, create a rocket consisting of an engine, boosters, a body, and a cone. Make sure to account for fuel, air resistance, and weight as all affect the rocket’s motion greatly. Click LAUNCH  to send your rocket off into space with the telescope as the payload. Along the way, answer TEXT-based questions that determine the fate of your journey! Remember to answer the questions keeping in mind the cost of the rocket as well as the survival of its crew. \n"}
                                           setParentState={() => cyclePopup()} />
                    </div>
                }

                {/*<RocketBuildingQuestionPopup open={this.state.questionPopupOpened} closePopup={cycleQuestionPopup} />*/}

                {this.state.questionPopupOpened &&
                <div style={{position: "absolute", width: "100%", height: "100%", zIndex: 4, overflow: "hidden"}}>
                    <MoreInfoAnimation setParentState={() => cycleQuestionPopup()} />
                </div>
                }


                <Container fluid className={"d-flex h-100 flex-column"} style={{margin: "0", padding: "0", backgroundImage:`url(${background})`}}>
                    <Row style={{margin: 0}}>
                        <Col className={"col-2"} style={{color: "white", padding: 0}}>
                            <Sidebar cone={this.state.cones[this.state.coneIndex]}
                                     changeCone={changeCone}
                                     coneIndex={this.state.coneIndex}
                                     body={this.state.bodys[this.state.bodyIndex]}
                                     changeBody={changeBody}
                                     bodyIndex={this.state.bodyIndex}
                                     booster={this.state.boosters[this.state.boosterIndex]}
                                     changeBooster={changeBooster}
                                     boosterIndex={this.state.boosterIndex}
                                     engine={this.state.engines[this.state.engineIndex]}
                                     engineIndex={this.state.engineIndex}
                                     changeEngine={changeEngine}/>
                        </Col>

                        <Col className={"col-10"} style={{margin: "0", padding: "0"}}>
                            <Container fluid style={{margin: "0", padding: "0"}}>
                                <Row style={{margin: 0}}>
                                    <Col className="col-2" style={{margin: "2%"}}>
                                        <Button className={"green-button"} style={{float: "left", width: 100,
                                            clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                onClick={() => this.props.history.push('/activity/telescope-activity')}>
                                            <i className="fa fa-arrow-left" />
                                        </Button>
                                    </Col>

                                    <Col style={{margin: "2%"}}>
                                        <p style={{color: "#29405B", fontSize: "28px", fontWeight: "bold"}}>Rocket Assembly</p>
                                    </Col>

                                    <Col className={"col-2 ml-auto"} style={{padding: 0, marginTop: "2%"}}>
                                        <Row style={{margin: 0}} className={"justify-content-end"}>
                                            <Button className={"blue-button"} style={{width: 166, textAlign: "left",
                                                marginBottom: 15}} onClick={cycleQuestionPopup}>More Info</Button>
                                        </Row>

                                        <Row style={{margin: 0}} className={"justify-content-end"}>
                                            <Button className={"blue-button"} style={{width: 166, textAlign: "left"}}
                                                    onClick={cyclePopup}>Objective</Button>
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
                                            {/*             onClick={() => boostersArrow(true)} />*/}
                                            {/*    </Row>*/}

                                            {/*    <Row style={{marginTop: 30, marginBottom: 30}}>*/}
                                            {/*        <img className={"arrow"} src={leftarrow} style={{filter: "contrast(0%)"}}*/}
                                            {/*             height="100px" alt={"left arrow"}*/}
                                            {/*             onMouseOver={() => this.setState({parentIndex: 3})}*/}
                                            {/*             onClick={() => engineArrow(true)} />*/}
                                            {/*    </Row>*/}
                                            {/*</Col>*/}

                                            <Col className={"ml-auto col-4"}>
                                                <Row className={"justify-content-center"} style={{maxHeight: 1100}}>
                                                    {this.state.boosterIndex === 3 &&
                                                        <div style={{position: "absolute", width: "17%", left: "41.5%", top: "65%", zIndex: 10}}>
                                                            <img alt={"Booster Middle"} src={booster_4_middle} style={{width: "100%"}} />
                                                        </div>
                                                    }

                                                    <Col className={"col-2 align-self-end"}  style={{padding: 0}}>
                                                        <img alt={"Booster Left"} className={"part-image"}
                                                             src={this.state.boosters[this.state.boosterIndex].leftImage}
                                                             style={{width: "80%"}} />
                                                    </Col>

                                                    <Col className={"col-3"} style={{padding: 0}}>
                                                        <Row className={"justify-content-center"} style={{margin: 5}}>
                                                            <img alt={"Cone"} className={"part-image"}
                                                                 src={this.state.cones[this.state.coneIndex].image}
                                                                 style={{width: "80%"}} />
                                                        </Row>

                                                        <Row className={"justify-content-center"} style={{margin: 5}}>
                                                            <img alt={"Body"} className={"part-image"}
                                                                 src={this.state.bodys[this.state.bodyIndex].image}
                                                                 style={{width: "80%"}} />
                                                        </Row>

                                                        <Row className={"justify-content-center"} style={{margin: 5}}>
                                                            <img alt={"Engine"} className={"part-image"}
                                                                 src={this.state.engines[this.state.engineIndex].image}
                                                                 style={{width: "80%"}} />
                                                        </Row>
                                                    </Col>

                                                    <Col className={"col-2 align-self-end"}  style={{padding: 0}}>
                                                        <img alt={"Booster Right"} className={"part-image"}
                                                             src={this.state.boosters[this.state.boosterIndex].rightImage}
                                                             style={{width: "80%"}} />
                                                    </Col>
                                                </Row>
                                            </Col>

                                            <Col className={"ml-auto col-5 col-md-4"} style={{color: "white",
                                                textAlign: "left", marginTop: "20%", padding: 0}}>
                                                <Container fluid>
                                                    <Row>
                                                        <Col style={{backgroundColor: "#162F4C"}}>
                                                            <p style={{fontWeight: "bold", fontSize: 22, marginTop: 10}}>Totals</p>
                                                        </Col>
                                                    </Row>

                                                    <Row style={{backgroundColor: "#162F4C"}}>
                                                        <Col style={{backgroundColor: "#29405B", padding: 10,
                                                            marginLeft: 15, marginBottom: 15}}>
                                                            <Container fluid>
                                                                <Row>
                                                                    <Col style={{padding: 5}}>
                                                                        <p style={{fontWeight: "bold", fontSize: 18}}>
                                                                            Fuel Capacity: {getTotalFuelCapacity()}
                                                                        </p>
                                                                    </Col>
                                                                </Row>

                                                                <Row>
                                                                    <Col style={{padding: 5}}>
                                                                        <p style={{fontWeight: "bold", fontSize: 18}}>
                                                                            Air Resistance: {getTotalAirResistance()}
                                                                        </p>
                                                                    </Col>
                                                                </Row>

                                                                <Row>
                                                                    <Col style={{padding: 5}}>
                                                                        <p style={{fontWeight: "bold", fontSize: 18}}>
                                                                            Total Mass: {getTotalMass()}
                                                                        </p>
                                                                    </Col>
                                                                </Row>

                                                                <Row>
                                                                    <Col style={{padding: 5}}>
                                                                        <p style={{fontWeight: "bold", fontSize: 18}}>
                                                                            Thrust: {getTotalThrust()}
                                                                        </p>
                                                                    </Col>
                                                                </Row>
                                                            </Container>
                                                        </Col>
                                                    </Row>
                                                </Container>
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
                                            {/*             onClick={() => boostersArrow(false)} />*/}
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
                                        <Button className={"green-button"} style={{float: "right", width: 200,
                                            marginBottom: 10, marginTop: 10,
                                            clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                onClick={() => this.props.history.push({
                                                    pathname: '/activity/flight-simulator',
                                                    state: {cone: this.state.cones[this.state.coneIndex],
                                                        body: this.state.bodys[this.state.bodyIndex],
                                                        booster: this.state.boosters[this.state.boosterIndex],
                                                        engine: this.state.engines[this.state.engineIndex]}})}>
                                            Launch
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
export default RocketBuilding;