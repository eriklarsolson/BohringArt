import React from "react";
import {Button, Modal} from "react-bootstrap";
import { Container, Row, Col } from 'react-bootstrap'
import bored from './bored.png';
import happy from './happy.png';
import neutral from './neutral.png';
import sad from './sad.png';
import smart from './smart.png';
import './Rate.scss';
import {toast} from "react-toastify";
import emailjs from "emailjs-com";

class RatePopup extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            popupOpened: true,
        };
    }

    render() {
        const submitRating = (selection: string) => {

            emailjs.send('1234', 'template_nu3qszb', {rating: selection}, 'user_4GY0SIFrayOWVCLxTbmk0')
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    toast("Thank you for submitting a rating!");
                }, function(error) {
                    console.log('FAILED...', error);
                    toast("Your rating failed to send");
                });
            closePopup()
        }

        const closePopup = () => {
            this.setState({popupOpened: false})
        }

        return (
            <>
                <Modal show={this.state.popupOpened}
                       onClick={closePopup}
                       size="xl"
                        style={{paddingTop: "60px"}}>
                    <Modal.Body style={{color: "#29405B"}}>
                        <Container fluid>
                            <Row>
                                <Col className={"col-2 ml-auto"}>
                                    <Button className={"blue-button"} style={{float: "right", width: 50,
                                        clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)", fontWeight: "bold"}}>X</Button>
                                </Col>
                            </Row>

                            <Container fluid style={{padding: 100}}>
                                <Row style={{textAlign: "left"}}>
                                    <p style={{fontSize: "30px", fontWeight: "bold", color: "#29405B"}}>Congratulations!</p>
                                </Row>

                                <Row style={{textAlign: "left"}}>
                                    <p style={{color: "#29405B"}}>You have successfully launched the telescope into space!
                                        How did you feel about these activities? Click an image to submit your vote!</p>
                                </Row>

                                <Row className={"justify-content-center align-content-center"} style={{padding: "10px"}}>
                                    <Col className={"col-2"} style={{textAlign: "center", margin: "10px"}}>
                                        <img alt={"Bored"} src={bored} className={"rate-img"} onClick={() => submitRating("bored")} />
                                        <p style={{color: "#29405B", fontWeight: "bold", fontSize: "16px"}}>Bored</p>
                                    </Col>

                                    <Col className={"col-2"} style={{textAlign: "center", margin: "10px"}}>
                                        <img alt={"Sad"} src={sad} className={"rate-img"} onClick={() => submitRating("sad")} />
                                        <p style={{color: "#29405B", fontWeight: "bold", fontSize: "16px"}}>Sad</p>
                                    </Col>

                                    <Col className={"col-2"} style={{textAlign: "center", margin: "10px"}}>
                                        <img alt={"Neutral"} src={neutral} className={"rate-img"} onClick={() => submitRating("neutral")} />
                                        <p style={{color: "#29405B", fontWeight: "bold", fontSize: "16px"}}>Neutral</p>
                                    </Col>

                                    <Col className={"col-2"} style={{textAlign: "center", margin: "10px"}}>
                                        <img alt={"Happy"} src={happy} className={"rate-img"} onClick={() => submitRating("happy")} />
                                        <p style={{color: "#29405B", fontWeight: "bold", fontSize: "16px"}}>Happy</p>
                                    </Col>

                                    <Col className={"col-2"} style={{textAlign: "center", margin: "10px"}}>
                                        <img alt={"Smart"} src={smart} className={"rate-img"} onClick={() => submitRating("smart")} />
                                        <p style={{color: "#29405B", fontWeight: "bold"}}>Smart</p>
                                    </Col>
                                </Row>

                                {/*<Row className={"justify-content-center align-content-center"} style={{paddingBottom: "30px", float: "right"}}>*/}
                                {/*    <Button className={"green-button"} style={{backgroundColor: "#3BD186",*/}
                                {/*        width: 150, clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)",*/}
                                {/*        fontSize: "20px", fontWeight: "bold"}} onClick={closePopup}>*/}
                                {/*        Close*/}
                                {/*    </Button>*/}
                                {/*</Row>*/}
                            </Container>
                        </Container>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}
export default RatePopup;