import React from "react";
import {Container, Row, Col, Modal} from 'react-bootstrap'
import Sidebar from "./Sidebar";
import Button from "react-bootstrap/Button";
import 'font-awesome/css/font-awesome.min.css';
import Popup from "../shared/modals/Popup";
import leftarrow from "../stellar-cycle/leftarrow.png";
import rightarrow from "../stellar-cycle/rightarrow.png";

//Image imports
import payload_1 from "./images/payloads/payload_1.png"
import payload_2 from "./images/payloads/payload_2.png"
import payload_3 from "./images/payloads/payload_3.png"
import interstage_1 from "./images/interstages/interstage_1.png"
import interstage_2 from "./images/interstages/interstage_2.png"
import sideBooster_1 from "./images/sideBoosters/sideBooster_1.png"
import sideBooster_2 from "./images/sideBoosters/sideBooster_2.png"
import engine_1 from "./images/engines/engine_1.png"
import engine_2 from "./images/engines/engine_2.png"

class RocketBuilding extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            parentIndex: 0,
            popupOpened: true,
            payloads: [
                {
                    image: payload_1,
                    title: "Payload 1",
                    mass: 1000,
                    airResistance: 5,
                    fuelCapacity: 10
                },
                {
                    image: payload_2,
                    title: "Payload 2",
                    mass: 2222,
                    airResistance: 2,
                    fuelCapacity: 10
                },
                {
                    image: payload_3,
                    title: "Payload 3",
                    mass: 333,
                    airResistance: 5,
                    fuelCapacity: 9
                }
            ],
            payloadIndex: 0,
            interstages: [
                {
                    image: interstage_1,
                    title: "Interstage 1",
                    mass: 1000,
                    airResistance: 5,
                    fuelCapacity: 10
                },
                {
                    image: interstage_2,
                    title: "Interstage 2",
                    mass: 2222,
                    airResistance: 2,
                    fuelCapacity: 10
                }
            ],
            interstageIndex: 0,
            sideBoosters: [
                {
                    image: sideBooster_1,
                    title: "Side Booster 1",
                    mass: 1000,
                    airResistance: 5,
                    fuelCapacity: 10
                },
                {
                    image: sideBooster_2,
                    title: "Side Booster 2",
                    mass: 2222,
                    airResistance: 2,
                    fuelCapacity: 10
                }
            ],
            sideBoosterIndex: 0,
            engines: [
                {
                    image: engine_1,
                    title: "Engine 1",
                    mass: 1000,
                    airResistance: 5,
                    fuelCapacity: 10
                },
                {
                    image: engine_2,
                    title: "Engine 2",
                    mass: 2222,
                    airResistance: 2,
                    fuelCapacity: 10
                }
            ],
            engineIndex: 0
        };
    }

    render() {
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

        const insterstageArrow = (left: boolean) => {
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
                <Popup title={"03 To The Stars"}
                       open={this.state.popupOpened}
                       description={"description goes here"}
                       closePopup={cyclePopup} />

                <Container fluid className={"d-flex h-100 flex-column"} style={{margin: "0", padding: "0", backgroundColor: "#F8EDDD"}}>
                    <Row className={"flex-grow-1"}>
                        <Col className={"col-2 vh-100"} style={{color: "white"}}>
                            <Sidebar title={getSidebarObject().title}
                                     mass={getSidebarObject().mass}
                                     airResistance={getSidebarObject().airResistance}
                                     fuelCapacity={getSidebarObject().fuelCapacity} />
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
                                                }}>More Info</Button>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row style={{margin: 0}}>
                                    <Container fluid>
                                        <Row>
                                            <Col className={"col-2"}>
                                                <Row>
                                                    <img className={"arrow"} src={leftarrow} style={{filter: "contrast(0%)"}}
                                                         height="100px" alt={"left arrow"}
                                                         onMouseOver={() => this.setState({parentIndex: 0})}
                                                         onClick={() => payloadArrow(true)} />
                                                </Row>

                                                <Row>
                                                    <img className={"arrow"} src={leftarrow} style={{filter: "contrast(0%)"}}
                                                         height="100px" alt={"left arrow"}
                                                         onMouseOver={() => this.setState({parentIndex: 1})}
                                                         onClick={() => insterstageArrow(true)} />
                                                </Row>

                                                <Row>
                                                    <img className={"arrow"} src={leftarrow} style={{filter: "contrast(0%)"}}
                                                         height="100px" alt={"left arrow"}
                                                         onMouseOver={() => this.setState({parentIndex: 2})}
                                                         onClick={() => sideBoostersArrow(true)} />
                                                </Row>

                                                <Row>
                                                    <img className={"arrow"} src={leftarrow} style={{filter: "contrast(0%)"}}
                                                         height="100px" alt={"left arrow"}
                                                         onMouseOver={() => this.setState({parentIndex: 3})}
                                                         onClick={() => engineArrow(true)} />
                                                </Row>
                                            </Col>

                                            <Col>
                                                <Row className={"justify-content-center"}>
                                                    <Col className={"col-2 align-self-end"}>
                                                        <img src={this.state.sideBoosters[this.state.sideBoosterIndex].image} />
                                                    </Col>

                                                    <Col className={"col-1"} style={{margin: 5}}>
                                                        <Row className={"justify-content-center"} style={{margin: 5}}>
                                                            <img src={this.state.payloads[this.state.payloadIndex].image} />
                                                        </Row>

                                                        <Row className={"justify-content-center"} style={{margin: 5}}>
                                                            <img src={this.state.interstages[this.state.interstageIndex].image} />
                                                        </Row>

                                                        <Row className={"justify-content-center"} style={{margin: 5}}>
                                                            <img src={this.state.engines[this.state.engineIndex].image} />
                                                        </Row>
                                                    </Col>

                                                    <Col className={"col-2 align-self-end"}>
                                                        <img src={this.state.sideBoosters[this.state.sideBoosterIndex].image} />
                                                    </Col>
                                                </Row>
                                            </Col>

                                            <Col className={"col-2"}>
                                                <Row>
                                                    <img className={"arrow"} src={rightarrow} style={{filter: "contrast(0%)"}}
                                                         height="100px" alt={"left arrow"}
                                                         onMouseOver={() => this.setState({parentIndex: 0})}
                                                         onClick={() => payloadArrow(false)} />
                                                </Row>

                                                <Row>
                                                    <img className={"arrow"} src={rightarrow} style={{filter: "contrast(0%)"}}
                                                         height="100px" alt={"left arrow"}
                                                         onMouseOver={() => this.setState({parentIndex: 1})}
                                                         onClick={() => insterstageArrow(false)} />
                                                </Row>

                                                <Row>
                                                    <img className={"arrow"} src={rightarrow} style={{filter: "contrast(0%)"}}
                                                         height="100px" alt={"right arrow"}
                                                         onMouseOver={() => this.setState({parentIndex: 2})}
                                                         onClick={() => sideBoostersArrow(false)} />
                                                </Row>

                                                <Row>
                                                    <img className={"arrow"} src={rightarrow} style={{filter: "contrast(0%)"}}
                                                         height="100px" alt={"right arrow"}
                                                         onMouseOver={() => this.setState({parentIndex: 3})}
                                                         onClick={() => engineArrow(false)} />
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Row>

                                <Row style={{margin: "3%"}}>
                                    <Col>
                                        <Button className={"green-button"} style={{float: "right", width: 200,
                                            clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                onClick={() => this.props.history.push({
                                                    pathname: '/activity/flight-simulator',
                                                    state: {payload: this.state.payloads[this.state.payloadIndex],
                                                            interstage: this.state.interstages[this.state.interstageIndex],
                                                            sideBooster: this.state.sideBoosters[this.state.sideBoosterIndex],
                                                            engine: this.state.engines[this.state.engineIndex]}})}>Test Rocket</Button>
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