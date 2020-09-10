import * as React from "react";
import {motion, useAnimation} from "framer-motion";
import { Container, Row, Col, Button } from 'react-bootstrap'
import {useState} from "react";
import cone_1 from "./images/cones/cone_1.png"
import body_1 from "./images/bodys/body_1.png"
import booster_4_middle from "./images/boosters/booster_4_middle.png"
import engine_1 from "./images/engines/engine_1.png"

export interface AnimationProps {
    setParentState: any
}

export const MoreInfoAnimation: React.FC<AnimationProps>  = ({setParentState}) => {
    const [open, setOpen] = useState<boolean>(true);
    const [animationStarted, setAnimatedStarted] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("CONE");
    const [description, setDescription] = useState<string>("The top piece of the rocket which encounters the most air resistance. Contains the payload being sent off into space. Also contains people sometimes.");


    const setClosed = () => {
        setOpen(false)
        setParentState()
    }

    const controls = useAnimation()
    const hideBox = () => {

        controls.start({
            x: ["0%", "100%"],
            opacity: [1, 0],
            transition: {
                duration: 1.5,
                ease: "easeOut",
            },
        })

        setTimeout(() => {  setClosed() }, 1000);
    }

    if(!animationStarted) {
        controls.start({
            x: ["100%", "0%"],
            opacity: [0, 1],
            transition: {
                duration: 1.5,
                ease: "easeInOut",
                times: [0, 1]
            },
        })
        setAnimatedStarted(true)
    }

    const changeInfo = (module: string) => {
        if (module === "Cone") {
            setTitle("CONE")
            setDescription("The top piece of the rocket which encounters the most air resistance. Contains the payload being sent off into space. Also contains people sometimes.")
        } else if (module === "Body") {
            setTitle("BODY")
            setDescription("Usually contains the majority of the rocket’s fuel, the oxidizer (useful for igniting fuel) as well as fuel injection and pump systems.")
        } else if (module === "SideBooster") {
            setTitle("SIDE BOOSTER")
            setDescription("Contains the combustion chamber and nozzle. The combustion chamber burns the fuel stored in the rocket and the nozzle lets out gas, propelling the rocket upward. ")
        } else if (module === "Engine") {
            setTitle("ENGINE")
            setDescription("Disposable boosters help give the rocket extra propulsion into space, and can be detached after use to decrease overall mass.")
        }
    }

    return (
        <>
            <div style={{position: "absolute", width: "100%", height: "100%",
                backgroundColor: "black", opacity: 0.5}} />

            <motion.div
                animate={controls}

                style={{height: "100%"}}>

                <Container fluid style={{height: "100%"}}>
                    <Row style={{height: "100%"}}>
                        <Col className={"col-2 ml-auto"} style={{padding: 0}}>
                                <Container fluid style={{padding: 0}}>
                                    <Row className={"justify-content-end"} style={{marginTop: 10}}>
                                        <Col className="col-10" onMouseOver={() => changeInfo("Cone")}
                                             style={{height: 100, backgroundColor: "#F8EDDD",
                                                 clipPath: "polygon(0 0, 100% 0, 100% 100%, 5% 100%)"}}>
                                            <img alt={"Cone"} src={cone_1} style={{height: "100%", display: "block", margin: "auto", padding: 5}}  />
                                        </Col>
                                    </Row>

                                    <Row className={"justify-content-end"} style={{marginTop: 10, marginLeft: 5}}>
                                        <Col className="col-10" onMouseOver={() => changeInfo("Body")}
                                             style={{height: 100, backgroundColor: "#F8EDDD",
                                                 clipPath: "polygon(0 0, 100% 0, 100% 100%, 5% 100%)"}}>
                                            <img alt={"Body"} src={body_1} style={{height: "100%", display: "block", margin: "auto", padding: 5}}  />
                                        </Col>
                                    </Row>

                                    <Row className={"justify-content-end"} style={{marginTop: 10, marginLeft: 20}}>
                                        <Col className="col-10" onMouseOver={() => changeInfo("SideBooster")}
                                             style={{height: 100, backgroundColor: "#F8EDDD",
                                                 clipPath: "polygon(0 0, 100% 0, 100% 100%, 5% 100%)"}}>
                                            <img alt={"Booster"} src={booster_4_middle} style={{height: "100%", display: "block", margin: "auto", padding: 5}}  />
                                        </Col>
                                    </Row>

                                    <Row className={"justify-content-end"} style={{marginTop: 10, marginLeft: 35}}>
                                        <Col className="col-10" onMouseOver={() => changeInfo("Engine")}
                                             style={{height: 100, backgroundColor: "#F8EDDD",
                                                 clipPath: "polygon(0 0, 100% 0, 100% 100%, 5% 100%)"}}>
                                            <img alt={"Engine"} src={engine_1} style={{height: "100%", display: "block", margin: "auto", padding: 5}} />
                                        </Col>
                                    </Row>
                                </Container>
                        </Col>

                        {/*clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)"*/}
                        <Col className={"col-8 col-md-8 col-lg-4"} style={{padding: 0}}>
                            <div style={{position: "absolute", width: "100%", height: "100%", backgroundColor: "#29405B",}} />

                            <Container fluid>
                                <Row>
                                    <Col className={"col-3 ml-auto"} style={{padding: 0}}>
                                        <Button className={"green-button"} style={{float: "right", width: "100%"}}
                                                onClick={() => hideBox()}><i className="fa fa-arrow-right" /></Button>
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"} style={{marginTop: 100}}>
                                    <Col className={"col-8"} style={{textAlign: "left", color: "white"}}>
                                        <h1>{title}</h1>
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"}>
                                    <Col className={"col-8"} style={{textAlign: "left", color: "white"}}>
                                        <p style={{whiteSpace: "pre-line"}}>{description}</p>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>

            </motion.div>
        </>
    );
};
