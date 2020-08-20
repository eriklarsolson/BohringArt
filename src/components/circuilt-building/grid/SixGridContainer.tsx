import React, {useState, useEffect, useCallback} from 'react'
import {
    getComponents,
    getCurrentComponent,
    getCurrentX,
    getPassed,
    getTotalVoltage,
    moveComponent,
    observe, setCurrentComponentsVoltage
} from './Functionality'
import {SixGrid} from "./SixGrid";
import {Container, Row, Col} from "react-bootstrap";
import update from 'immutability-helper'
import {ComponentTypes} from "../../shared/models/ComponentTypes";
import {Slider, Typography, withStyles} from "@material-ui/core";

const containerStyle: React.CSSProperties = {
    width: 500,
    height: 500,
}

export interface GridContainerProps {
    objectiveImage: any,
    showGrid: boolean,
}

export const SixGridContainer: React.FC<GridContainerProps> = ({objectiveImage, showGrid}) => {

    //I don't actually use this currentComp variable, but I need the useEffect on observe below and it's working right now
    //and I don't want to change it
    const [currentComp, setCurrentComp] = useState<{x: number, y: number, type: string, voltage: number, rotateDeg: number}>(
        {x: 0, y: 0, type: ComponentTypes.BATTERY, voltage: 0, rotateDeg: 0})

    const [totalVoltage, setTotalVoltage] = useState<number>(0)

    const didItPass = (component: {x: number, y: number, type: string, voltage: number, rotateDeg: number}) => {
        setCurrentComp(component)
        setTotalVoltage(getTotalVoltage())

        if(getPassed()) {
            console.log("PASSED!")
        }
    }

    //TODO - This current styling breaks the slider (doesn't slide smoothly)
    const VoltageSlider = withStyles({
        root: {
            color: '#29405B',
            height: 6,
        },
        thumb: {
            height: 24,
            width: 24,
            backgroundColor: '#29405B',
            border: '2px solid currentColor',
            marginTop: -10,
            marginLeft: -12,
            '&:focus, &:hover, &$active': {
                boxShadow: 'inherit',
            },
        },
        track: {
            height: 6,
            borderRadius: 2,
            backgroundColor: '#29405B',
        },
        rail: {
            height: 6,
            borderRadius: 2,
        },
    })(Slider);

    const handleVoltageChange = (event: any, newValue: number | number[]) => {
        setCurrentComponentsVoltage(newValue as number);
    };

    const changeVoltage = (increase: boolean) => {
        if(getComponents().length > 0) {
            if (increase && (getCurrentComponent().voltage + 1) <= 10) {
                setCurrentComponentsVoltage(getCurrentComponent().voltage + 1);
            } else if (!increase && (getCurrentComponent().voltage - 1) >= 0) {
                setCurrentComponentsVoltage(getCurrentComponent().voltage - 1);
            }
        }
    }

    useEffect(() => observe((component: any) => didItPass(component)))

    return (
        <>
            <Container fluid>
                <Row className={"justify-content-center align-content-center align-items-center"}>
                    <Col className={"col-4"} style={{padding: "0", margin: "0"}}>
                        <div className={"d-flex justify-content-center align-content-center"}>
                            <div style={containerStyle}>
                                <SixGrid showGrid={showGrid} components={getComponents()} currentComponent={currentComp} />
                            </div>
                        </div>
                    </Col>
                    <Col className={"col-2"} style={{padding: "0", margin: "0"}}>
                        <img src={objectiveImage} width={"200px"} />
                        <div style={{position: "absolute", top: "55%", right: "100px", transform: "translate(-50%, -50%)"}}>
                            <p style={{fontWeight: "bold", fontSize: "16px", color: "white"}}>{totalVoltage}v</p>
                        </div>
                    </Col>
                </Row>

                {currentComp !== undefined && currentComp.type === ComponentTypes.BATTERY &&
                    <Row className={"justify-content-center"} style={{marginTop: 25}}>
                        <Col className={"col-2 justify-content-center align-content center"}>
                            <Typography id="volt-slider" gutterBottom style={{color: "#29405B"}}>
                                Volt Selector
                            </Typography>
                                <Container fluid>
                                    <Row>
                                        <Col className={"col-1"}>
                                            <i className="fa fa-minus" style={{cursor: "pointer", color: "#29405B"}}
                                               onClick={() => changeVoltage(false)} />
                                        </Col>
                                        <Col>
                                            <VoltageSlider aria-labelledby="volt-slider" step={1}
                                                           marks min={0} max={10}
                                                           value={currentComp.voltage}
                                                           onChange={handleVoltageChange} />
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
                        </Col>
                    </Row>
                }
            </Container>
        </>
    )
}
