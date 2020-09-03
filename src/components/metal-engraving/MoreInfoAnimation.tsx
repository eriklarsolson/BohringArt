import * as React from "react";
import { motion } from "framer-motion";
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
    const [description, setDescription] = useState<string>("A conducting, metal rod designed to transfer charges. Electrons can flow through these with little to no resistance, typically. However, making a wire longer increases resistance but thickening it decreases resistance.");

    const setClosed = () => {
        setOpen(false)
        setParentState()
    }

    const changeInfo = (module: string) => {
        if (module === "laser") {
            setTitle("LASER")
            setDescription("Light is a form of energy stored in the form of photons, particles of light, that are emitted from all objects such as stars and human bodies except black holes. \n" +
                "A laser, or Light Amplification by Stimulated Emission of Radiation, is a concentrated ray of photons emitted by an energetic object, typically a gas.")
        } else if (module === "optics") {
            setTitle("LENS")
            setDescription("LENS Converging/Convex A lens that focuses incoming light to a single point. This is due to the outward curvature of the lens itself; light is refracted towards a point of con vergence, forming an image. Refraction When light enters one medium different from the one it is currently traveling through, it will change its speed, resulting in a change in the direction of movement. An example of a change in medium is going from air to water. Snell’s Law Law comparing angles of entry of the light and indices of refraction of mediums Index of refraction-A measure of a medium’s ability to bend incoming light away from its angle of incidence, index of refraction of air is one.")
        } else if (module === "prism") {
            setTitle("PRISM")
            setDescription("Glass or other material usually made into a triangle shape in order to separate incoming light into separate colors. This occurs as a result of refraction of various colors, all of which have different indices of refraction inside prisms. \n" +
                "Spectrum or distribution of lights")
        }
    }

    return (
        <>
            <div style={{position: "absolute", width: "100%", height: "100%",
                backgroundColor: "black", opacity: 0.5}} />

            <motion.div
                animate={{
                    // scale: [1, 2, 2, 1, 1],
                    // rotate: [0, 0, 270, 270, 0],
                    // x: [100, 200, 300, 400, 500],
                    x: [1200, 350],
                    opacity: [0, 1]
                }}

                transition={{
                    duration: 1,
                    ease: "easeOut",
                    times: [0, 1],
                }}>

                <Container fluid>
                    <Row>
                        <Col className={"col-7 vh-100 ml-auto"}>
                            <div style={{position: "absolute", width: "100%", height: "100%", backgroundColor: "#29405B",
                                clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)"}} />

                            <div style={{position: "absolute", height: "100%", left: -165}}>
                                <Container fluid>
                                    <Row style={{margin: 5, marginLeft: 10, width: 175}}>
                                        <Col className="col-12" onMouseOver={() => changeInfo("laser")}
                                             style={{height: 100, backgroundColor: "#F8EDDD", clipPath: "polygon(0 0, 93% 0, 100% 100%, 5% 100%)"}}>
                                            <img alt={"Laser"} src={lasercomponenticon} />
                                        </Col>
                                    </Row>

                                    <Row style={{margin: 5, marginLeft: 20, width: 175}}>
                                        <Col className="col-12" onMouseOver={() => changeInfo("optics")}
                                             style={{height: 100, backgroundColor: "#F8EDDD", clipPath: "polygon(0 0, 93% 0, 100% 100%, 5% 100%)"}}>
                                            <img alt={"Lens"} src={optics} style={{height: "100%", padding: 15}} />
                                        </Col>
                                    </Row>

                                    <Row style={{margin: 5, marginLeft: 30, width: 175}}>
                                        <Col className="col-12" onMouseOver={() => changeInfo("prism")}
                                             style={{height: 100, backgroundColor: "#F8EDDD", clipPath: "polygon(0 0, 93% 0, 100% 100%, 5% 100%)"}}>
                                            <img alt={"Prism"} src={prism} style={{height: "100%", padding: 15}} />
                                        </Col>
                                    </Row>
                                </Container>
                            </div>

                            <Container fluid>
                                <Row>
                                    <Col className={"col-7"}>
                                        <Button className={"green-button"} style={{float: "right", width: 100,
                                            clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                onClick={() => setClosed()}><i className="fa fa-arrow-right" /></Button>
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"} style={{marginTop: 100}}>
                                    <Col className={"col-8"} style={{textAlign: "left", color: "white"}}>
                                        <h1>{title}</h1>
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"}>
                                    <Col className={"col-8"} style={{textAlign: "left", color: "white", paddingRight: 250}}>
                                        <p>{description}</p>
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
