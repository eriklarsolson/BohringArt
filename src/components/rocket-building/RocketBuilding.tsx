import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from "./Sidebar";
import Button from "react-bootstrap/Button";
import 'font-awesome/css/font-awesome.min.css';
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
import background from "./images/rocket_assembly_bg.jpg";
import {MoreInfoAnimation} from "./MoreInfoAnimation";
import {ObjectiveSlideOut} from "../shared/animations/ObjectiveSlideOut";
import PartPropertySlider from "./PartPropertySlider";

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
                    mass: 2007,
                    airResistance: 660000,
                },
                {
                    image: cone_2,
                    title: "Cone 2",
                    mass: 2316,
                    airResistance: 495000,
                },
                {
                    image: cone_3,
                    title: "Cone 3",
                    mass: 2659,
                    airResistance: 495000,
                },
                {
                    image: cone_4,
                    title: "Cone 4",
                    mass: 3003,
                    airResistance: 330000,
                }
            ],
            coneIndex: 0,
            bodys: [
                {
                    image: body_1,
                    title: "Body 1",
                    mass: 20210,
                    fuelCapacity: 277898
                },
                {
                    image: body_2,
                    title: "Body 2",
                    mass: 20544,
                    fuelCapacity: 282285
                },
                {
                    image: body_3,
                    title: "Body 3",
                    mass: 21054,
                    fuelCapacity: 284089
                },
                {
                    image: body_4,
                    title: "Body 4",
                    mass: 21630,
                    fuelCapacity: 286677
                }
            ],
            bodyIndex: 0,
            boosters: [
                {
                    leftImage: booster_1_left,
                    rightImage: booster_1_right,
                    middleImage: null,
                    title: "Booster 1",
                    mass: 3824,
                    airResistance: 330000,
                    fuelCapacity: 39774,
                    thrust: 3281.6
                },
                {
                    leftImage: booster_2_left,
                    rightImage: booster_2_right,
                    middleImage: null,
                    title: "Booster 2",
                    mass: 4067,
                    airResistance: 247500,
                    fuelCapacity: 42630,
                    thrust: 3376.8
                },
                {
                    leftImage: booster_3_left,
                    rightImage: booster_3_right,
                    middleImage: null,
                    title: "Booster 3",
                    mass: 4339,
                    airResistance: 247500,
                    fuelCapacity: 45129,
                    thrust: 3610.2
                },
                {
                    leftImage: booster_4_left,
                    rightImage: booster_4_right,
                    middleImage: booster_4_middle,
                    title: "Booster 4",
                    mass: 4620,
                    airResistance: 165000,
                    fuelCapacity: 48163,
                    thrust: 3690
                },
            ],
            boosterIndex: 0,
            engines: [
                {
                    image: engine_1,
                    title: "Engine 1",
                    mass: 5104,
                    thrust: 3950
                },
                {
                    image: engine_2,
                    title: "Engine 2",
                    mass: 5480,
                    thrust: 4151.2
                },
                {
                    image: engine_3,
                    title: "Engine 3",
                    mass: 5873,
                    thrust: 4255.4
                },
                {
                    image: engine_4,
                    title: "Engine 4",
                    mass: 6120,
                    thrust: 4300.1
                }
            ],
            engineIndex: 0
        };
    }

    render() {
        const maxFuelCapacity = 383003;
        const maxAirResistance = 1320000;
        const maxTotalMass = 51103;
        const maxThrust = 11680.1;

        // const minFuelCapacity = 357446;
        // const minAirResistance = 660000;
        // const minTotalMass = 34969;
        // const minThrust = 10513.2;

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
            total += 11110 //Telescope weight

            return total;
        }

        return (
            <>
                <div style={{position: "relative", height: "100%", width: "100%"}}>
                    {/*<ObjectivePopup title={"03 To The Stars"}*/}
                    {/*                open={this.state.popupOpened}*/}
                    {/*                description={"Using the arrows on the left and right, create a rocket consisting of an engine, boosters, a body, and a cone. Make sure to account for fuel, air resistance, and weight as all affect the rocket’s motion greatly. Click LAUNCH  to send your rocket off into space with the telescope as the payload. Along the way, answer TEXT-based questions that determine the fate of your journey! Remember to answer the questions keeping in mind the cost of the rocket as well as the survival of its crew. \n"}*/}
                    {/*                closePopup={cyclePopup} />*/}

                    {this.state.popupOpened &&
                    <div style={{position: "absolute", top: 0, bottom: 0, left: 0, right: 0, zIndex: 4, overflow: "hidden"}}>
                            <ObjectiveSlideOut title={"03 To The Stars"}
                                               description={"Using the rocket pieces in the sidebar, create a rocket consisting of an engine, boosters, a body, and a cone. Make sure to account for fuel, air resistance, and weight as all affect the rocket’s motion greatly. Click LAUNCH  to send your rocket off into space with the telescope as the payload. Along the way, answer TEXT-based questions that determine the fate of your journey! Remember to answer the questions keeping in mind the cost of the rocket as well as the survival of its crew."}
                                               setParentState={() => cyclePopup()} />
                        </div>
                    }
                    {/*<RocketBuildingQuestionPopup open={this.state.questionPopupOpened} closePopup={cycleQuestionPopup} />*/}

                    {this.state.questionPopupOpened &&
                    <div style={{position: "absolute", top: 0, bottom: 0, left: 0, right: 0, zIndex: 4, overflow: "hidden"}}>
                        <MoreInfoAnimation setParentState={() => cycleQuestionPopup()} />
                    </div>
                    }


                    <Container fluid className={"d-flex h-100 flex-column"} style={{margin: 0, padding: 0}}>
                        <div style={{position: "absolute", backgroundImage:`url(${background})`, backgroundSize: "cover",
                            top: 0, bottom: 0, left: 0, right: 0, height: "100%"}} />

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
                                                    onClick={() => this.props.history.push('/activity/circuit-building')}>
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

                                    <Row style={{margin: 0, alignItems: "flex-start"}}>
                                        <Container fluid style={{alignItems: "flex-start"}}>
                                            <Row className={"justify-content-center"} style={{alignItems: "flex-start"}}>
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

                                                <Col className={"ml-auto col-5"} style={{alignItems: "flex-start", marginBottom: 10}}>
                                                    <Row className={"justify-content-center"} style={{maxHeight: 1100, alignItems: "flex-start"}}>
                                                        {this.state.boosterIndex === 3 &&
                                                            <div style={{position: "absolute", width: "17%", left: "41.5%", top: "65%", zIndex: 10}}>
                                                                <img alt={"Booster Middle"} src={booster_4_middle} style={{width: "100%"}} />
                                                            </div>
                                                        }

                                                        <Col className={"col-2 align-self-end"} style={{left: "3%", padding: 0, alignItems: "flex-start"}}>
                                                            <img alt={"Booster Left"}
                                                                 src={this.state.boosters[this.state.boosterIndex].leftImage}
                                                                 style={{width: "100%"}} />
                                                        </Col>

                                                        <Col className={"col-3"} style={{padding: 0, alignItems: "flex-start"}}>
                                                            <Row className={"justify-content-center"} style={{alignItems: "flex-start"}}>
                                                                <img alt={"Cone"}
                                                                     src={this.state.cones[this.state.coneIndex].image}
                                                                     style={{width: "80%"}} />
                                                            </Row>

                                                            <Row className={"justify-content-center"} style={{alignItems: "flex-start"}}>
                                                                <img alt={"Body"}
                                                                     src={this.state.bodys[this.state.bodyIndex].image}
                                                                     style={{width: "80%"}} />
                                                            </Row>

                                                            <Row className={"justify-content-center"} style={{alignItems: "flex-start"}}>
                                                                <img alt={"Engine"}
                                                                     src={this.state.engines[this.state.engineIndex].image}
                                                                     style={{width: "80%"}} />
                                                            </Row>
                                                        </Col>

                                                        <Col className={"col-2 align-self-end"}  style={{right: "3%", padding: 0, alignItems: "flex-start"}}>
                                                            <img alt={"Booster Right"}
                                                                 src={this.state.boosters[this.state.boosterIndex].rightImage}
                                                                 style={{width: "100%"}} />
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
                                                                            <Container fluid>
                                                                                <Row>
                                                                                    <Col className="col-4">
                                                                                        <p style={{fontWeight: "bold", fontSize: 18, marginTop: 5, marginBottom: 0}}>Total Fuel Capacity:</p>

                                                                                    </Col>
                                                                                    <Col style={{padding: 0}}>
                                                                                        <PartPropertySlider
                                                                                            value={(getTotalFuelCapacity() / maxFuelCapacity) * 100} />
                                                                                    </Col>
                                                                                </Row>

                                                                                <Row>
                                                                                    <Col>
                                                                                        <p style={{fontWeight: "bold", fontSize: 14}}>{getTotalFuelCapacity()} kg</p>
                                                                                    </Col>
                                                                                </Row>
                                                                            </Container>
                                                                        </Col>
                                                                    </Row>

                                                                    <Row>
                                                                        <Col style={{padding: 5}}>
                                                                            <Container fluid>
                                                                                <Row>
                                                                                    <Col className="col-4">
                                                                                        <p style={{fontWeight: "bold", fontSize: 18, marginTop: 5, marginBottom: 0}}>Total Air Resistance:</p>

                                                                                    </Col>
                                                                                    <Col style={{padding: 0}}>
                                                                                        <PartPropertySlider
                                                                                            value={(getTotalAirResistance() / maxAirResistance) * 100} />
                                                                                    </Col>
                                                                                </Row>

                                                                                <Row>
                                                                                    <Col>
                                                                                        <p style={{fontWeight: "bold", fontSize: 14}}>{getTotalAirResistance()} N</p>
                                                                                    </Col>
                                                                                </Row>
                                                                            </Container>
                                                                        </Col>
                                                                    </Row>

                                                                    <Row>
                                                                        <Col style={{padding: 5}}>
                                                                            <Container fluid>
                                                                                <Row>
                                                                                    <Col className="col-4">
                                                                                        <p style={{fontWeight: "bold", fontSize: 18, marginTop: 5, marginBottom: 0}}>Total Mass:</p>

                                                                                    </Col>
                                                                                    <Col style={{padding: 0}}>
                                                                                        <PartPropertySlider
                                                                                            value={(getTotalMass() / maxTotalMass) * 100} />
                                                                                    </Col>
                                                                                </Row>

                                                                                <Row>
                                                                                    <Col>
                                                                                        <p style={{fontWeight: "bold", fontSize: 14}}>{getTotalMass()} kg</p>
                                                                                    </Col>
                                                                                </Row>
                                                                            </Container>
                                                                        </Col>
                                                                    </Row>

                                                                    <Row>
                                                                        <Col style={{padding: 5}}>
                                                                            <Container fluid>
                                                                                <Row>
                                                                                    <Col className="col-4">
                                                                                        <p style={{fontWeight: "bold", fontSize: 18, marginTop: 5, marginBottom: 0}}>Total Thrust:</p>

                                                                                    </Col>
                                                                                    <Col style={{padding: 0}}>
                                                                                        <PartPropertySlider
                                                                                            value={(getTotalThrust() / maxThrust) * 100} />
                                                                                    </Col>
                                                                                </Row>

                                                                                <Row>
                                                                                    <Col>
                                                                                        <p style={{fontWeight: "bold", fontSize: 14}}>{getTotalThrust()} kN</p>
                                                                                    </Col>
                                                                                </Row>
                                                                            </Container>
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

                                    <Row style={{margin: 10}}>
                                        <Col>
                                            <Button className={"green-button"} style={{float: "right", width: 200,
                                                marginBottom: 25, marginTop: 10,
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
                </div>
            </>
        )
    }
}
export default RocketBuilding;