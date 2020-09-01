import * as React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Button } from 'react-bootstrap'
import {useState} from "react";
import interior from "./interior.png";
import convex from "./grid/components/images/convex.png";
import flatmirror from "./grid/components/images/flatmirror.png";
import viewpoint from "./grid/components/images/viewpoint.png";
import terms from "./terms.png";
import ccd from "./ccd.png";

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
        if (module === "Terminology") {
            setTitle("TERMINOLOGY")
            setDescription("Focal Point-Each mirror or lens will have a different focal point depending on its curvature. This is the point at which all of the reflected or refracted rays meet. The focal point can be calculated for any mirror or lens but for convex mirrors, the light rays do not physically meet at the focal point to form a real image, which means the real light rays never converge.  (Show pics)\n" +
                "Real image-An image formed by physically converging light rays, this image can be projected onto something like paper or a projector screen.\n" +
                "Virtual Image-A virtual image is an image that your eyes can see, but that cannot be projected onto a screen.\n")
        } else if (module === "Mirrors") {
            setTitle("MIRRORS")
            setDescription("Convex-These mirrors curve outward and will also reflect most incoming light rays outward at different angles. Because the rays are always reflected outward, convex mirrors can only create virtual images, and not real images.\n" +
                "Concave-These mirrors curve inward and will also reflect most incoming light rays inward at different angles. A concave mirror can create both real and virtual images, the image will be virtual when the object is very close to the mirror (between the mirror and its focal point).\n" +
                "Flat- A mirror lacking curves that is able to reflect all incoming light at the same angle (angle of incidence), resulting in a perfect image identical to the incoming light. The heights, distances, and orientations of all objects remain intact. \n")
        } else if (module === "Lens") {
            setTitle("LENS")
            setDescription("Convex/Converging-When light rays travel through a convex lens, they refract and converge at a single point where the light is more concentrated. This is what a magnifying glass does when you use it to burn a piece of wood or grass. This type of lens creates both real and virtual images, a virtual image is formed when the object is very close to the lens (between the lens and its focal point).")
        } else if (module === "Telescope") {
            setTitle("TELESCOPE")
            setDescription("Tool consisting usually of a metal tube with numerous mirrors or lenses in various configurations designed to help collect light from distant objects. The telescope is able to collect light better than what a human eye can and focuses the light onto an eyepiece for a user to see through. Popular configurations include Newtonian and Galilean telescopes. ")
        } else if (module === "CCD") {
            setTitle("CCD")
            setDescription("A CCD, or charge-coupled device, is one that is designed to help read incoming light. Light focused from a telescope can be absorbed by electrons, allowing them to move around in the circuit to then be captured by arrays of capacitors. The movement of these electrons are crucial for converting the light into data. ")
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
                    x: [1200, 400],
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

                                    <Row style={{margin: 5, marginLeft: 20, width: 175}}>
                                        <Col className="col-12" onMouseOver={() => changeInfo("Mirrors")}
                                             style={{height: 100, backgroundColor: "#F8EDDD", clipPath: "polygon(0 0, 93% 0, 100% 100%, 5% 100%)"}}>
                                            <img src={viewpoint} style={{height: "100%", padding: 10}} />
                                        </Col>
                                    </Row>

                                    <Row style={{margin: 5, marginLeft: 30, width: 175}}>
                                        <Col className="col-12" onMouseOver={() => changeInfo("Lens")}
                                             style={{height: 100, backgroundColor: "#F8EDDD", clipPath: "polygon(0 0, 93% 0, 100% 100%, 5% 100%)"}}>
                                            <img src={convex} style={{height: "100%", padding: 10}} />
                                        </Col>
                                    </Row>

                                    <Row style={{margin: 5, marginLeft: 40, width: 175}}>
                                        <Col className="col-12" onMouseOver={() => changeInfo("Telescope")}
                                             style={{height: 100, backgroundColor: "#F8EDDD", clipPath: "polygon(0 0, 93% 0, 100% 100%, 5% 100%)"}}>
                                            <img src={interior} style={{height: "100%", padding: 10}} />
                                        </Col>
                                    </Row>

                                    <Row style={{margin: 5, marginLeft: 50, width: 175}}>
                                        <Col className="col-12" onMouseOver={() => changeInfo("CCD")}
                                             style={{height: 100, backgroundColor: "#F8EDDD", clipPath: "polygon(0 0, 93% 0, 100% 100%, 5% 100%)"}}>
                                            <img src={ccd} style={{height: "100%", padding: 10}} />
                                        </Col>
                                    </Row>

                                    <Row style={{margin: 5, marginLeft: 65, width: 175}}>
                                        <Col className="col-12" onMouseOver={() => changeInfo("Terminology")}
                                             style={{height: 100, backgroundColor: "#F8EDDD", clipPath: "polygon(0 0, 93% 0, 100% 100%, 5% 100%)"}}>
                                            <img src={terms} style={{width: "75%", padding: 10, marginTop: 25}} />
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
