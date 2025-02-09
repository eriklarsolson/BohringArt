import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from "./Sidebar";
import Button from "react-bootstrap/Button";
import { SixGridContainer } from "./grid/SixGridContainer";
import objective1wire from '@/src/assets/CircuitBuilding/objective1wire.png';
import objective2wire from '@/src/assets/CircuitBuilding/objective2wire.png';
import objective3wire from '@/src/assets/CircuitBuilding/objective3wire.png';
import {
    setComponentsList,
    setCurrentLevel,
    setPassed
} from "./grid/Functionality";
import { ToastContainer } from "react-toastify";
import { MoreInfoAnimation } from "./MoreInfoAnimation";
import { ObjectiveSlideOut } from "../shared/animations/ObjectiveSlideOut";

export default function CircuitBuilding({ history }: {
    history: { push: (path: string) => void; }
}) {
    const [state, setState] = useState({
        circuitPopupOpened: false,
        popupOpened: true,
        popupTitle: "Level 1 Objective",
        popupDescriptions: [
            "1. Energize the motor of the satellite so the solar panels can face the " +
            "sun and start collecting more energy. \n\n 2. Make sure your circuit can deliver enough power to start the motor " +
            "and rotate the panels. \n\n 3. We recommend using a series circuit, so consult the help page if needed. " +
            "\n\n 4. If you need to make changes to parts of your circuit, click the component you would like to remove " +
            "and then press the TRASH icon.",

            "Power up the lights on the satellite so that " +
            "everyone can see its location as it orbits Earth at high velocities. To best reveal the craft's position use " +
            "a flickering light, which typically utilizes a capacitor. We recommend using a parallel circuit, so consult " +
            "the help page if needed. If you need to make changes to parts of your circuit, click the component you would " +
            "like to remove and then press the TRASH icon",

            "Power up the satellite's radio dish so you can send the " +
            "collected images and information to mission control back on Earth. Use both series and parallel circuits " +
            "along with your knowledge from the previous levels to ensure the transmission. Consult the help page if " +
            "needed. If you need to make changes to parts of your circuit, click the component you would like to remove " +
            "and then press the TRASH icon."
        ],
        currentLevel: 1,
        showGrid: true,
        gridImages: [objective1wire, objective2wire, objective3wire],
        neededVoltages: [16, 20, 60]
    });

    const goToNextLevel = () => {
        const nextLevel = state.currentLevel + 1;

        if (nextLevel === 4) {
            history.push('/activity/rocket-building');
        } else {
            setState(prev => ({
                ...prev,
                currentLevel: nextLevel,
                popupTitle: `Level ${nextLevel} Objective`
            }));
        }

        setPassed(false);
        setCurrentLevel(nextLevel);
        setComponentsList([]);
        cyclePopup();
    };

    const goToLastLevel = () => {
        const pastLevel = state.currentLevel - 1;

        if (pastLevel === 0) {
            history.push('/activity/metal-engraving');
        } else {
            setState(prev => ({
                ...prev,
                currentLevel: pastLevel,
                popupTitle: `Level ${pastLevel} Objective`
            }));
        }

        setPassed(false);
        setCurrentLevel(pastLevel);
        setComponentsList([]);
        cyclePopup();
    };

    const cyclePopup = () => {
        setState(prev => ({
            ...prev,
            popupOpened: !prev.popupOpened
        }));
    };

    const cycleCircuitPopup = () => {
        setState(prev => ({
            ...prev,
            circuitPopupOpened: !prev.circuitPopupOpened
        }));
    };

    const cycleGrid = () => {
        setState(prev => ({
            ...prev,
            showGrid: !prev.showGrid
        }));
    };

    const skipActivity = () => {
        history.push('/activity/rocket-building');
    };

    return (
        <>
            <div style={{ position: "relative", height: "100%", width: "100%" }}>
                {state.popupOpened && (
                    <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, zIndex: 4, overflow: "hidden" }}>
                        <ObjectiveSlideOut
                            title="02 Circuit Construction Objective"
                            description={state.popupDescriptions[state.currentLevel - 1]}
                            setParentState={cyclePopup}
                        />
                    </div>
                )}

                {state.circuitPopupOpened && (
                    <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, zIndex: 4, overflow: "hidden" }}>
                        <MoreInfoAnimation setParentState={cycleCircuitPopup} />
                    </div>
                )}

                <Container fluid className="d-flex h-100 flex-column" style={{ margin: "0", padding: "0", backgroundColor: "#F8EDDD" }}>
                    <Row className="flex-grow-1" style={{ margin: "0" }}>
                        <Col className="col-12 col-sm-3" style={{ color: "white", padding: "0" }}>
                            <Sidebar currentLevel={state.currentLevel} />
                        </Col>

                        <Col className="col-12 col-sm-9" style={{ margin: "0", padding: "0" }}>
                            <Container fluid style={{ margin: "0", padding: "0" }}>
                                <Row style={{ margin: 0 }}>
                                    <Col className="col-2" style={{ margin: "3%" }}>
                                        <Button
                                            className="green-button"
                                            style={{
                                                float: "left",
                                                width: 100,
                                                clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"
                                            }}
                                            onClick={goToLastLevel}
                                        >
                                            <i className="fa fa-arrow-left" />
                                        </Button>
                                    </Col>

                                    <Col className="col-5" style={{ margin: "3%" }}>
                                        <Row className="justify-content-center">
                                            <p style={{ color: "#29405B", fontSize: 28, fontWeight: "bold", marginBottom: 0 }}>
                                                Circuit Board
                                            </p>
                                        </Row>

                                        <Row className="justify-content-center">
                                            <p style={{ color: "#29405B", fontSize: 14, fontWeight: "bold", marginBottom: 0 }}>
                                                Needed voltage: {state.neededVoltages[state.currentLevel - 1]}
                                            </p>
                                        </Row>

                                        <Row className="justify-content-center">
                                            <Col className="col-7">
                                                <p style={{ color: "#29405B", fontSize: 14, marginBottom: 0 }}>
                                                    Warning: This activity contains some bugs and may not function properly.
                                                </p>
                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col className="col-2 ml-auto" style={{ padding: 0, marginTop: "3%" }}>
                                        <Row style={{ margin: 0 }} className="justify-content-end">
                                            <Button
                                                className="blue-button"
                                                style={{ width: 166, textAlign: "left", marginBottom: 15 }}
                                                onClick={cycleCircuitPopup}
                                            >
                                                More Info
                                            </Button>
                                        </Row>
                                        <Row style={{ margin: 0 }} className="justify-content-end">
                                            <Button
                                                className="blue-button"
                                                style={{ width: 166, textAlign: "left", marginBottom: 15 }}
                                                onClick={cyclePopup}
                                            >
                                                Objective
                                            </Button>
                                        </Row>
                                        <Row style={{ margin: 0 }} className="justify-content-end">
                                            <Button
                                                className="blue-button"
                                                style={{ width: 166, textAlign: "left" }}
                                                onClick={cycleGrid}
                                            >
                                                Toggle Grid
                                            </Button>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row style={{ margin: "0" }}>
                                    <Col>
                                        <SixGridContainer
                                            objectiveImage={state.gridImages[state.currentLevel - 1]}
                                            showGrid={state.showGrid}
                                            skipActivity={skipActivity}
                                            goToNextLevel={goToNextLevel}
                                        />
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
                    pauseOnHover
                />
            </div>
        </>
    );
};