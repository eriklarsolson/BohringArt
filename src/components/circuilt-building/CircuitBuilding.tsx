import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from "./Sidebar";
import Button from "react-bootstrap/Button";
import ObjectivePopup from "../shared/modals/ObjectivePopup";
import {SixGridContainer} from "./grid/SixGridContainer";
import objective1wire from './objective1wire.png'
import objective2wire from './objective2wire.png'
import objective3wire from './objective3wire.png'
import {
    setComponentsList,
    setCurrentLevel, setPassed
} from "./grid/Functionality";
import 'font-awesome/css/font-awesome.min.css';
import {ToastContainer} from "react-toastify";
import {MoreInfoAnimation} from "./MoreInfoAnimation";
import {ObjectiveSlideOut} from "../shared/animations/ObjectiveSlideOut";

class CircuitBuilding extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            circuitPopupOpened: false,
            popupOpened: true,
            popupTitle: "Level 1 Objective",
            popupDescriptions: ["Energize the motor of the satellite so the solar panels can face the " +
                "sun and start collecting more energy. Make sure your circuit can deliver enough power to start the motor " +
                "and rotate the panels. We recommend using a series circuit, so consult the help page if needed. " +
                "If you need to make changes to parts of your circuit, click the component you would like to remove " +
                "and then press the TRASH icon.", "Power up the lights on the satellite so that " +
            "everyone can see its location as it orbits Earth at high velocities. To best reveal the craft’s position use " +
            "a flickering light, which typically utilizes a capacitor. We recommend using a parallel circuit, so consult " +
            "the help page if needed. If you need to make changes to parts of your circuit, click the component you would " +
            "like to remove and then press the TRASH icon", "Power up the satellite’s radio dish so you can send the " +
            "collected images and information to mission control back on Earth. Use both series and parallel circuits " +
            "along with your knowledge from the previous levels to ensure the transmission. Consult the help page if " +
            "needed. If you need to make changes to parts of your circuit, click the component you would like to remove " +
            "and then press the TRASH icon."],
            currentLevel: 1,
            showGrid: true,
            gridImages: [objective1wire, objective2wire, objective3wire],
            neededVoltages: [16, 20, 60]
        };
    }

    render() {
        const goToNextLevel = () => {
            const nextLevel = this.state.currentLevel + 1;

            if(nextLevel === 4) {
                this.props.history.push('/activity/rocket-building');
            } else {
                this.setState({currentLevel: nextLevel})
            }

            const titleString = "Level " + nextLevel + " Objective"
            this.setState({popupTitle: titleString})
            setPassed(false)
            setCurrentLevel(nextLevel)
            setComponentsList([])
            cyclePopup()
        }

        const goToLastLevel = () => {
            const pastLevel = this.state.currentLevel - 1;

            if(pastLevel === 0) {
                this.props.history.push('/activity/metal-engraving');
            } else {
                this.setState({currentLevel: pastLevel})
            }

            const titleString = "Level " + pastLevel + " Objective"
            this.setState({popupTitle: titleString})
            setPassed(false)
            setCurrentLevel(pastLevel)
            setComponentsList([])
            cyclePopup()
        }

        const cyclePopup = () => {
            this.setState({popupOpened: !this.state.popupOpened})
        }

        const cycleCircuitPopup = () => {
            this.setState({circuitPopupOpened: !this.state.circuitPopupOpened})
        }

        const cycleGrid = () => {
            this.setState({showGrid: !this.state.showGrid})
        }

        const skipActivity = () => {
            this.props.history.push('/activity/rocket-building');
        }

        return (
            <>
                <div style={{position: "relative", height: "100%", width: "100%"}}>
                    {/*<CircuitPopup open={this.state.circuitPopupOpened} closeCircuitPopup={cycleCircuitPopup} />*/}

                    {/*<ObjectivePopup open={this.state.popupOpened} title={this.state.popupTitle}*/}
                    {/*                description={this.state.popupDescriptions[this.state.currentLevel - 1]}*/}
                    {/*                closePopup={cyclePopup} />*/}

                    {this.state.popupOpened &&
                        <div style={{position: "absolute", top: 0, bottom: 0, left: 0, right: 0, zIndex: 4, overflow: "hidden"}}>
                            <ObjectiveSlideOut title={"02 Circuit Construction Objective"}
                                               description={this.state.popupDescriptions[this.state.currentLevel - 1]}
                                               setParentState={() => cyclePopup()} />
                        </div>
                    }

                    {this.state.circuitPopupOpened &&
                        <div style={{position: "absolute", top: 0, bottom: 0, left: 0, right: 0, zIndex: 4, overflow: "hidden"}}>
                            <MoreInfoAnimation setParentState={() => cycleCircuitPopup()} />
                        </div>
                    }

                        <Container fluid className={"d-flex h-100 flex-column"} style={{margin: "0", padding: "0", backgroundColor: "#F8EDDD"}}>

                            <Row className={"flex-grow-1"} style={{margin: "0"}}>
                                <Col className={"col-12 col-sm-3"} style={{color: "white", padding: "0"}}>
                                    <Sidebar currentLevel={this.state.currentLevel} />
                                </Col>

                                <Col className={"col-12 col-sm-9"} style={{margin: "0", padding: "0"}}>
                                    <Container fluid style={{margin: "0", padding: "0"}}>
                                        <Row style={{margin: 0}}>
                                            <Col className="col-2" style={{margin: "3%"}}>
                                                <Button className={"green-button"} style={{float: "left", width: 100,
                                                    clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                        onClick={goToLastLevel}><i className="fa fa-arrow-left" /></Button>
                                            </Col>

                                            <Col className="col-5" style={{margin: "3%"}}>
                                                <Row className={"justify-content-center"}>
                                                    <p style={{color: "#29405B", fontSize: 28, fontWeight: "bold", marginBottom: 0}}>Circuit Board</p> {/*level {this.state.currentLevel}*/}
                                                </Row>

                                                <Row className={"justify-content-center"}>
                                                    <p style={{color: "#29405B", fontSize: 14, fontWeight: "bold", marginBottom: 0}}>Needed voltage: {this.state.neededVoltages[this.state.currentLevel - 1]}</p>
                                                </Row>

                                                <Row className={"justify-content-center"}>
                                                    <Col className={"col-7"}>
                                                        <p style={{color: "#29405B", fontSize: 14, marginBottom: 0}}>
                                                            Warning: This activity contains some bugs and may not function properly.
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </Col>

                                            <Col className={"col-2 ml-auto"} style={{padding: 0, marginTop: "3%"}}>
                                                <Row style={{margin: 0}} className={"justify-content-end"}>
                                                    <Button className={"blue-button"} style={{width: 166, textAlign: "left",
                                                        marginBottom: 15}} onClick={cycleCircuitPopup}>More Info</Button>
                                                </Row>
                                                <Row style={{margin: 0}} className={"justify-content-end"}>
                                                    <Button className={"blue-button"} style={{width: 166, textAlign: "left",
                                                        marginBottom: 15}}  onClick={cyclePopup}>Objective</Button>
                                                </Row>
                                                <Row style={{margin: 0}} className={"justify-content-end"}>
                                                    <Button className={"blue-button"} style={{width: 166, textAlign: "left"}}
                                                            onClick={cycleGrid}>Toggle Grid</Button>
                                                </Row>
                                            </Col>
                                        </Row>

                                        <Row style={{margin: "0"}}>
                                            <Col>
                                                <SixGridContainer objectiveImage={this.state.gridImages[this.state.currentLevel - 1]}
                                                                  showGrid={this.state.showGrid}
                                                                  skipActivity={skipActivity}
                                                                  goToNextLevel={goToNextLevel} />
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                        </Container>

                    <ToastContainer
                        position="top-center"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover />
                </div>
            </>
        )
    }
}

export default CircuitBuilding;