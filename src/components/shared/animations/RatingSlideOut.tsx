import * as React from "react";
import {motion, useAnimation} from "framer-motion";
import { Container, Row, Col, Button } from 'react-bootstrap'
import {useState} from "react";
import bored from "../modals/Rate/bored.png";
import sad from "../modals/Rate/sad.png";
import neutral from "../modals/Rate/neutral.png";
import happy from "../modals/Rate/happy.png";
import smart from "../modals/Rate/smart.png";
import emailjs from "emailjs-com";
import {toast} from "react-toastify";
import '../modals/Rate/Rate.scss';

export interface AnimationProps {
    setParentState: any
}

export const RatingSlideOut: React.FC<AnimationProps>  = ({setParentState}) => {
    const [open, setOpen] = useState<boolean>(true);

    const setClosed = () => {
        setOpen(false)
        setParentState()
    }

    const submitRating = (selection: string) => {

        emailjs.send('1234', 'template_nu3qszb', {rating: selection}, 'user_4GY0SIFrayOWVCLxTbmk0')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                toast("Thank you for submitting a rating!");
            }, function(error) {
                console.log('FAILED...', error);
                toast("Your rating failed to send");
            });

        hideBox()
    }

    const controls = useAnimation()
    const hideBox = () => {
        controls.start({
            x: [0, -2000],
            opacity: [1, 0],
            transition: {
                duration: 1.5,
                ease: "easeOut",
            },
        })

        setTimeout(() => {  setClosed() }, 1200);
    }

    return (
        <>
            <div style={{position: "absolute", width: "100%", height: "100%",
                backgroundColor: "black", opacity: 0.5}} />

            <motion.div
                animate={controls}

                style={{height: "100%"}}>

                <Container fluid style={{height: "100%"}}>
                    <Row style={{height: "50%"}}>
                        <Col className={"align-self-center col-10 mr-auto"} style={{padding: 0}}>
                            <div style={{position: "absolute", width: "100%", height: "100%", backgroundColor: "#F8EDDD",
                                clipPath: "polygon(0 0, 95% 0, 100% 100%, 0 100%)"}} />

                            <Container fluid style={{padding: 100, margin: 50}}>
                                <Row className={"justify-content-center"}>
                                    <Col className={"col-10"}>
                                        <p style={{fontSize: 40, fontWeight: "bold", color: "#29405B", textAlign: "left"}}>Congratulations!</p>
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"}>
                                    <Col className={"col-10"}>
                                        <p style={{fontSize: 20, fontWeight: "bold", color: "#29405B", textAlign: "left"}}>You have successfully launched the telescope into space!
                                            How did you feel about these activities? Click an image to submit your vote!</p>
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center align-content-center"} style={{padding: "10px"}}>
                                    <Col className={"col-md-2 col-sm-4"} style={{textAlign: "center", margin: "10px"}}>
                                        <img alt={"Bored"} src={bored} className={"rate-img"} onClick={() => submitRating("bored")} />
                                        <p style={{color: "#29405B", fontWeight: "bold", fontSize: 18, marginTop: 10}}>Bored</p>
                                    </Col>

                                    <Col className={"col-md-2 col-sm-4"} style={{textAlign: "center", margin: "10px"}}>
                                        <img alt={"Sad"} src={sad} className={"rate-img"} onClick={() => submitRating("sad")} />
                                        <p style={{color: "#29405B", fontWeight: "bold", fontSize: 18, marginTop: 10}}>Sad</p>
                                    </Col>

                                    <Col className={"col-md-2 col-sm-4"} style={{textAlign: "center", margin: "10px"}}>
                                        <img alt={"Neutral"} src={neutral} className={"rate-img"} onClick={() => submitRating("neutral")} />
                                        <p style={{color: "#29405B", fontWeight: "bold", fontSize: 18, marginTop: 10}}>Neutral</p>
                                    </Col>

                                    <Col className={"col-md-2 col-sm-4"} style={{textAlign: "center", margin: "10px"}}>
                                        <img alt={"Happy"} src={happy} className={"rate-img"} onClick={() => submitRating("happy")} />
                                        <p style={{color: "#29405B", fontWeight: "bold", fontSize: 18, marginTop: 10}}>Happy</p>
                                    </Col>

                                    <Col className={"col-md-2 col-sm-4"} style={{textAlign: "center", margin: "10px"}}>
                                        <img alt={"Smart"} src={smart} className={"rate-img"} onClick={() => submitRating("smart")} />
                                        <p style={{color: "#29405B", fontWeight: "bold", fontSize: 18, marginTop: 10}}>Smart</p>
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center align-content-center"} style={{marginTop: 50}}>
                                    <Col className={"col-10"}>
                                        <Button variant="primary" className={"green-button"} style={{float: "right", width: "25%",
                                            clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}} onClick={() => hideBox()}>
                                            Close
                                        </Button>
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
