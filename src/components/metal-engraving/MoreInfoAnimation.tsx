import * as React from "react";
import {motion, useAnimation} from "framer-motion";
import { Container, Row, Col, Button } from 'react-bootstrap'
import {useState} from "react";
import lasercomponenticon from "./images/laser_COMPONENT.png";
import optics from "./images/optics.png";
import prism from "./images/prism.png";

export interface AnimationProps {
    setParentState: any
}

export const MoreInfoAnimation: React.FC<AnimationProps>  = ({setParentState}) => {
    const [open, setOpen] = useState<boolean>(true);
    const [title, setTitle] = useState<string>("WIRE");
    const [description, setDescription] = useState<string>(
        "Light is a form of energy stored in the form of photons, particles of light, that are emitted from all objects such as stars and human bodies except black holes. A laser, or Light Amplification by Stimulated Emission of Radiation, is a concentrated ray of photons emitted by an energetic object, typically a gas."
    );
    const [animationStarted, setAnimatedStarted] = useState<boolean>(false);


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
        if (module === "laser") {
            setTitle("LASER")
            setDescription("Light is a form of energy stored in the form of photons, particles of light, that are emitted from all objects such as stars and human bodies except black holes.\n\n" +
                "A laser, or Light Amplification by Stimulated Emission of Radiation, is a concentrated ray of photons emitted by an energetic object, typically a gas.")
        } else if (module === "optics") {
            setTitle("LENS")
            setDescription("Converging/Convex\nA lens that focuses incoming light to a single point. This is due to the outward curvature of the lens itself; light is refracted towards a point of convergence, forming an image. \n\nRefraction \nWhen light enters one medium different from the one it is currently traveling through, it will change its speed, resulting in a change in the direction of movement. An example of a change in medium is going from air to water. \n\nSnell’s Law \nLaw comparing angles of entry of the light and indices of refraction of mediums.\n Index of refraction-A measure of a medium’s ability to bend incoming light away from its angle of incidence, index of refraction of air is one.")
        } else if (module === "prism") {
            setTitle("PRISM")
            setDescription("Glass or other material usually made into a triangle shape in order to separate incoming light into separate colors. This occurs as a result of refraction of various colors, all of which have different indices of refraction inside prisms. \n\n" +
                "Spectrum or distribution of lights")
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
                                    <Col className="col-10" onMouseOver={() => changeInfo("laser")}
                                         style={{height: 100, backgroundColor: "#F8EDDD",
                                             clipPath: "polygon(0 0, 100% 0, 100% 100%, 5% 100%)"}}>
                                        <img alt={"Laser"} src={lasercomponenticon} style={{height: "100%", display: "block", margin: "auto", padding: 5}} />
                                    </Col>
                                </Row>

                                <Row className={"justify-content-end"} style={{marginTop: 10, marginLeft: 5}}>
                                    <Col className="col-10" onMouseOver={() => changeInfo("optics")}
                                         style={{height: 100, backgroundColor: "#F8EDDD",
                                             clipPath: "polygon(0 0, 100% 0, 100% 100%, 5% 100%)"}}>
                                        <img alt={"Lens"} src={optics} style={{height: "100%", display: "block", margin: "auto", padding: 5}} />
                                    </Col>
                                </Row>

                                <Row className={"justify-content-end"} style={{marginTop: 10, marginLeft: 20}}>
                                    <Col className="col-10" onMouseOver={() => changeInfo("prism")}
                                         style={{height: 100, backgroundColor: "#F8EDDD",
                                             clipPath: "polygon(0 0, 100% 0, 100% 100%, 5% 100%)"}}>
                                        <img alt={"Prism"} src={prism} style={{height: "100%", display: "block", margin: "auto", padding: 5}} />
                                    </Col>
                                </Row>
                            </Container>
                        </Col>

                        {/*clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)"*/}
                        <Col className={"col-8 col-md-8 col-lg-4"} style={{padding: 0}}>
                            <div style={{position: "absolute", width: "100%", height: "100%", backgroundColor: "#29405B"}} />

                            <Container fluid style={{marginTop: 10}}>
                                <Row>
                                    <Col className={"col-3 ml-auto"} style={{padding: 0}}>
                                        <Button className={"green-button"} style={{float: "right", width: "100%"}}
                                                onClick={() => hideBox()}><i className="fa fa-arrow-right" /></Button>
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"} style={{marginTop: 10}}>
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
