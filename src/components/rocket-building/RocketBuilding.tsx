import React from "react";
import {Container, Row, Col, Modal} from 'react-bootstrap'
import Sidebar from "./Sidebar";
import Button from "react-bootstrap/Button";
import 'font-awesome/css/font-awesome.min.css';
import Popup from "../shared/modals/Popup";
import leftarrow from "../stellar-cycle/leftarrow.png";
import rightarrow from "../stellar-cycle/rightarrow.png";

class RocketBuilding extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            popupOpened: true,
        };
    }

    render() {
        const cyclePopup = () => {
            this.setState({popupOpened: !this.state.popupOpened})
        }

        const payloadArrow = (left: boolean) => {
            if(left) {

            } else {

            }
        }

        const insterstageArrow = (left: boolean) => {
            if(left) {

            } else {

            }
        }

        const sideBoostersArrow = (left: boolean) => {
            if(left) {

            } else {

            }
        }

        const engineArrow = (left: boolean) => {
            if(left) {

            } else {

            }
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
                            <Sidebar />
                        </Col>

                        <Col className={"col-10"} style={{margin: "0", padding: "0"}}>
                            <Container fluid style={{margin: "0", padding: "0"}}>
                                <Row style={{margin: 0}}>
                                    <Col className="col-2" style={{margin: "3%"}}>
                                        <Button className={"green-button"} style={{float: "left", width: 100,
                                            clipPath: "polygon(0 0, 90% 0, 100% 100%, 10% 100%)"}}
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
                                        {/*Payload*/}
                                        <Row className={"justify-content-center"} style={{margin: 10}}>
                                            <Col style={{display: "flex"}} className={"col-2 align-items-center justify-content-end"}>
                                                <img className={"arrow"} src={leftarrow} style={{filter: "contrast(0%)"}}
                                                     height="100px" alt={"left arrow"}
                                                     onClick={() => payloadArrow(true)} />
                                            </Col>

                                            <Col className={"col-4"}>
                                                <div style={{width: 200, height: 200, backgroundColor: "black"}}></div>
                                            </Col>

                                            <Col style={{display: "flex"}} className={"col-2 align-items-center justify-content-start"}>
                                                <img className={"arrow"} src={rightarrow} style={{filter: "contrast(0%)"}}
                                                     height="100px" alt={"right arrow"}
                                                     onClick={() => payloadArrow(false)} />
                                            </Col>
                                        </Row>

                                        {/*Interstage*/}
                                        <Row className={"justify-content-center"} style={{margin: 10}}>
                                            <Col style={{display: "flex"}} className={"col-2 align-items-center justify-content-end"}>
                                                <img className={"arrow"} src={leftarrow} style={{filter: "contrast(0%)"}}
                                                     height="100px" alt={"left arrow"}
                                                     onClick={() => insterstageArrow(true)} />
                                            </Col>

                                            <Col className={"col-4"}>
                                                <div style={{width: 200, height: 200, backgroundColor: "black"}}></div>
                                            </Col>

                                            <Col style={{display: "flex"}} className={"col-2 align-items-center justify-content-start"}>
                                                <img className={"arrow"} src={rightarrow} style={{filter: "contrast(0%)"}}
                                                     height="100px" alt={"right arrow"}
                                                     onClick={() => insterstageArrow(false)} />
                                            </Col>
                                        </Row>

                                        {/*Side Boosters*/}
                                        <Row className={"justify-content-center"} style={{margin: 10}}>
                                            <Col style={{display: "flex"}} className={"col-2 align-items-center justify-content-end"}>
                                                <img className={"arrow"} src={leftarrow} style={{filter: "contrast(0%)"}}
                                                     height="100px" alt={"left arrow"}
                                                     onClick={() => sideBoostersArrow(true)} />
                                            </Col>

                                            <Col className={"col-4"}>
                                                <div style={{width: 200, height: 200, backgroundColor: "black"}}></div>
                                            </Col>

                                            <Col style={{display: "flex"}} className={"col-2 align-items-center justify-content-start"}>
                                                <img className={"arrow"} src={rightarrow} style={{filter: "contrast(0%)"}}
                                                     height="100px" alt={"right arrow"}
                                                     onClick={() => sideBoostersArrow(false)} />
                                            </Col>
                                        </Row>

                                        {/*Engine*/}
                                        <Row className={"justify-content-center"} style={{margin: 10}}>
                                            <Col style={{display: "flex"}} className={"col-2 align-items-center justify-content-end"}>
                                                <img className={"arrow"} src={leftarrow} style={{filter: "contrast(0%)"}}
                                                     height="100px" alt={"left arrow"}
                                                     onClick={() => engineArrow(true)} />
                                            </Col>

                                            <Col className={"col-4"}>
                                                <div style={{width: 200, height: 200, backgroundColor: "black"}}></div>
                                            </Col>

                                            <Col style={{display: "flex"}} className={"col-2 align-items-center justify-content-start"}>
                                                <img className={"arrow"} src={rightarrow} style={{filter: "contrast(0%)"}}
                                                     height="100px" alt={"right arrow"}
                                                     onClick={() => engineArrow(false)} />
                                            </Col>
                                        </Row>
                                    </Container>
                                </Row>

                                <Row style={{margin: "3%"}}>
                                    <Col>

                                    </Col>

                                    <Col>
                                        <Button className={"green-button"} style={{float: "right", width: 200,
                                            clipPath: "polygon(0 0, 90% 0, 100% 100%, 10% 100%)"}}
                                                onClick={() => this.props.history.push({
                                                    pathname: '/activity/object-page',
                                                    state: { title: "Nebula" }
                                                })}>Next</Button>
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