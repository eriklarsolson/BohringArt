import React, {useState, useEffect} from 'react'
import {
    getBoardHasIssues,
    deleteCurrentComponent,
    getComponents,
    getCurrentBoardIssues,
    getCurrentComponent,
    getPassed,
    getTotalVoltage,
    observe,
    setBoardHasIssue,
    setCurrentComponentsVoltage,
    setCurrentBoardIssues,
    addBoardIssue,
} from './Functionality'
import {SixGrid} from "./SixGrid";
import {Container, Row, Col} from "react-bootstrap";
import {ComponentTypes} from "../../shared/models/ComponentTypes";
import {Slider, Typography, withStyles} from "@material-ui/core";
import ErrorPopup from "../../shared/modals/ErrorPopup";
import Button from "react-bootstrap/Button";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import trashcan from "../../shared/images/trashcan.png";
import {ErrorSlideOut} from "../../shared/animations/ErrorSlideOut";
import CircuitSlider from "./CircuitSlider";

const containerStyle: React.CSSProperties = {
    width: 500,
    height: 500,
}

export interface GridContainerProps {
    objectiveImage: any,
    showGrid: boolean,
    goToNextLevel: any
    skipActivity: any
}

export const SixGridContainer: React.FC<GridContainerProps> = ({objectiveImage, showGrid, goToNextLevel, skipActivity}) => {
    const [currentComp, setCurrentComp] = useState<{x: number, y: number, type: string, voltage: number, rotateDeg: number}>(
        {x: 0, y: 0, type: ComponentTypes.BATTERY, voltage: 0, rotateDeg: 0})

    const [totalVoltage, setTotalVoltage] = useState<number>(0)
    const [errorPopup, setErrorPopup] = useState<boolean>(false)
    const [popupCalled, setPopupCalled] = useState<boolean>(false)

    const didItPass = (component: {x: number, y: number, type: string, voltage: number, rotateDeg: number}) => {
        setCurrentComp(component)
        setTotalVoltage(getTotalVoltage())

        if(getPassed()) {
            if(!popupCalled) {
                setPopupCalled(true)
                toast("You have successfully completed the circuit!");
                //TODO - This shows up multiple times on being called
            }
        }

        if(getBoardHasIssues()) {
            setErrorPopup(true)
        }
    }

    //Reset issues every time they see error popup so they can make changes and have new errors be re-generated
    const setErrorsOff = () => {
        setErrorPopup(false)
        setCurrentBoardIssues([])
        setBoardHasIssue(false)
    }

    const handleVoltageChange = (event: any, newValue: number | number[]) => {
        setCurrentComponentsVoltage(newValue as number);
    };

    const changeVoltage = (increase: boolean) => {
        if(getComponents().length > 0) {
            if (increase && (getCurrentComponent().voltage + 1) <= 10) {

                if(getCurrentComponent().type === ComponentTypes.RESISTOR) {
                    let total = getTotalVoltage();
                    total = total - 1;

                    console.log(total)

                    if(total < 0) {
                        setBoardHasIssue(true)
                        addBoardIssue("You cannot have negative voltage")
                        // setPassed(false)
                    } else {
                        setCurrentComponentsVoltage(getCurrentComponent().voltage + 1);
                    }
                } else {
                    setCurrentComponentsVoltage(getCurrentComponent().voltage + 1);
                }
            } else if (!increase && (getCurrentComponent().voltage - 1) >= 0) {
                setCurrentComponentsVoltage(getCurrentComponent().voltage - 1);
            }
        }
    }

    useEffect(() => observe((component: any) => didItPass(component)))

    return (
        <>
            <div style={{position: "relative", height: "100%", width: "100%"}}>
            <Container fluid>
                <Row className={"justify-content-center align-content-center align-items-center"}>
                    <Col className={"col-4"} style={{maxWidth: 500, flex: "0 0 500px", padding: "0", margin: "0"}}>
                        <div className={"d-flex justify-content-center align-content-center"}>
                            <div style={containerStyle}>
                                <SixGrid showGrid={showGrid} components={getComponents()} currentComponent={currentComp} />
                            </div>
                        </div>
                    </Col>
                    <Col className={"col-1"} style={{padding: "0", margin: "0"}}>
                        <img alt={"Circuit Objective"} src={objectiveImage} style={{height: 260}} />
                        <div style={{position: "absolute", top: "55%", right: 0, transform: "translate(-50%, -50%)"}}>
                            <p style={{fontWeight: "bold", fontSize: "16px", color: "white"}}>{totalVoltage}v</p>
                        </div>
                    </Col>
                </Row>

                <Row style={{margin: "3%"}}>
                    <Col className={"col-2"}>
                        <Button style={{float: "left", backgroundColor: "transparent", fontSize: "20px",
                            fontWeight: "bold", border: 0}}
                                onClick={deleteCurrentComponent}>
                            <img src={trashcan} alt={"Trash Can"} style={{width: "90%"}} />
                            {/*<i className="fa fa-trash-o" style={{color: "black"}} />*/}
                        </Button>
                    </Col>

                    <Col className={"ml-auto col-4 justify-content-center align-content center"}>
                        {currentComp !== undefined && (currentComp.type === ComponentTypes.BATTERY ||
                            currentComp.type === ComponentTypes.RESISTOR) &&
                            <>
                                <Typography id="volt-slider" gutterBottom style={{color: "#29405B"}}>
                                    {currentComp.type === ComponentTypes.BATTERY ?
                                        <p>Voltage</p>
                                    :
                                        <p>Resistance</p>
                                    }
                                </Typography>
                                <Container fluid>
                                    <Row>
                                        <Col className={"col-1"}>
                                            <i className="fa fa-minus" style={{cursor: "pointer", color: "#29405B"}}
                                            onClick={() => changeVoltage(false)} />
                                        </Col>
                                        <Col>
                                            <CircuitSlider voltage={currentComp.voltage}
                                                           handleVoltageChange={handleVoltageChange} />
                                        </Col>
                                        <Col className={"col-1"}>
                                            <i className="fa fa-plus" style={{cursor: "pointer", color: "#29405B"}}
                                            onClick={() => changeVoltage(true)} />
                                        </Col>
                                        <Col className={"col-1"}>
                                            <p style={{color: "#29405B", fontWeight: "bold"}}>
                                            {currentComp.voltage}v
                                            </p>
                                        </Col>
                                    </Row>
                                </Container>
                            </>
                        }
                    </Col>

                    {/*TODO - this is somehow not picking up when getPassed gets updated?*/}
                    <Col className={"ml-auto col-2"}>
                        {/*{getPassed() ?*/}
                        {/*    <Button className={"green-button"} style={{float: "right", width: 200,*/}
                        {/*        clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}*/}
                        {/*            onClick={goToNextLevel}>Next</Button>*/}
                        {/*    :*/}
                            <Button className={"green-button"} style={{float: "right", width: 200,
                                clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                    onClick={skipActivity}>Next Activity</Button>
                        {/*}*/}
                    </Col>
                </Row>
            </Container>

            {errorPopup &&
            <div style={{position: "absolute", top: 0, bottom: 0, left: 0, right: 0, zIndex: 4, overflow: "hidden"}}>
                <ErrorSlideOut closePopup={() => setErrorsOff()} title={"Circuit Error!"} description={getCurrentBoardIssues()} />
            </div>
            }

            {/*<ErrorPopup title={"Error!"} description={getCurrentBoardIssues()} open={errorPopup} closePopup={() => setErrorsOff()} />*/}
            </div>
        </>
    )
}
