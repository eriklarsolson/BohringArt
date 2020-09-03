import React from 'react';
import './About.scss';
import { Container, Row, Col } from 'react-bootstrap'
import danny from "./images/danny.png"
import dena from "./images/dena.png"
import parisa from "./images/parisa.png"
import person1 from "./images/person1.png"
import person2 from "./images/person2.png"
import person3 from "./images/person3.png"
import person4 from "./images/person4.png"
import person5 from "./images/person5.png"
import lars from "./images/lars.png"
import niels from "./images/niels.png"
import emailjs from 'emailjs-com';
import {toast, ToastContainer} from "react-toastify";

class AboutUs extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phoneNum: "",
            message: "",
        }
    }


    render() {
        const handleSubmit = (event: any) => {
            event.preventDefault();

            emailjs.send('1234', 'template_cd5l4jm', {from_name: this.state.name, email: this.state.email, message: this.state.message}, 'user_4GY0SIFrayOWVCLxTbmk0')
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    toast("Thank you for contacting us! We will get back to you asap!")
                }, function(error) {
                    console.log('FAILED...', error);
                    toast("Message failed to send")
                });
        }

        //Initialize email
        // init("user_4GY0SIFrayOWVCLxTbmk0");

        return (
            <>
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

                    <Container fluid style={{margin: 0, backgroundColor: "#29405B"}}>
                        <Row className="justify-content-center">
                            <Container fluid>
                                <Row  className={"justify-content-center"}>
                                    <Col className={"col-10"}>
                                        <p style={{color: "white", fontSize: 55, fontWeight: "bold", textAlign: "left"}}>Our Team</p>
                                    </Col>
                                </Row>

                                <Row className={"justify-content-center"}>
                                    <Col className={"col-6"}>
                                        <Container fluid>
                                            <Row className={"justify-content-center"}>
                                                <Col style={{margin: 20, clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                     className="col-sm-12 col-md-3">
                                                    <img src={danny} />
                                                </Col>

                                                <Col style={{margin: 20, clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                     className="col-sm-12 col-md-3">
                                                    <img src={dena} />
                                                </Col>

                                                <Col style={{margin: 20, clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                     className="col-sm-12 col-md-3">
                                                    <img src={parisa} />
                                                </Col>

                                                <Col style={{margin: 20, clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                     className="col-sm-12 col-md-3">
                                                    <img src={person1} />
                                                </Col>

                                                <Col style={{margin: 20, clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                     className="col-sm-12 col-md-3">
                                                    <img src={person2} />
                                                </Col>

                                                <Col style={{margin: 20, clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                     className="col-sm-12 col-md-3">
                                                    <img src={person3} />
                                                </Col>

                                                <Col style={{margin: 20, clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                     className="col-sm-12 col-md-3">
                                                    <img src={person4} />
                                                </Col>

                                                <Col style={{margin: 20, clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                     className="col-sm-12 col-md-3">
                                                    <img src={person5} />
                                                </Col>

                                                <Col style={{margin: 20, clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                                     className="col-sm-12 col-md-3">
                                                    <img src={lars} style={{maxHeight: 250}} />
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                </Row>
                            </Container>
                        </Row>

                        <Row className={"justify-content-center"} style={{clipPath: "polygon(0 100px, 100% 0, 100% 95%, 0 100%)"}}>
                            <Col className={"col-6"} style={{padding: 100, backgroundColor: "#F8EDDD"}}>
                                <Container fluid>
                                    <Row  style={{textAlign: "left", padding: "5%"}}>
                                        <h1 style={{fontWeight: "bolder", color: "#29405B"}}>PROJECT PURPOSE</h1>
                                    </Row>

                                    <Row style={{textAlign: "left", display: "block", padding: "5%"}}>
                                        <p style={{color: "#29405B", fontWeight: "bold"}}>
                                            In this collaborative project, we propose to design an educational kiosk, using the principles of interactive design,
                                            that will convey physics concepts effectively to college students. The concepts are chosen
                                            from Introductory Physics courses. Depending on the number of students and mediators we hire,
                                            we will expand on the scientific visualization. We will recruit at least two undergraduate physics students,
                                            two undergraduate graphic designers, and two programmers from computer science & Engineering.
                                            The physics students (with Dena’s supervision) will be responsible for communicating selected
                                            physics concepts to the designers. The designers will then use their knowledge to create
                                            infographics that elucidate physics phenomena.
                                        </p>
                                    </Row>
                                </Container>
                            </Col>

                            <Col className={"col-6"} style={{backgroundColor: "rgba(82, 82, 82, 0.8)", paddingBottom: 100}}>
                                <Container fluid style={{padding: 100}}>
                                    <Row  style={{textAlign: "left", padding: "5%"}}>
                                        <h1 style={{fontWeight: "bolder", color: "white"}}>WHY BOHRING?</h1>
                                    </Row>

                                    <Row style={{textAlign: "left", display: "block", padding: "5%"}}>
                                        <p style={{color: "white"}}>
                                            Niels Bohr was one of the foremost scientists of modern physics, best known
                                            for his substantial contributions to quantum theory and his Nobel Prize-winning
                                            research on the structure of atoms. Born in Copenhagen in 1885 to well-educated
                                            parents, Bohr became interested in physics at a young age. He studied the subject
                                            throughout his undergraduate and graduate years and earned a doctorate in physics
                                            in 1911 from Copenhagen University. While still a student, Bohr won a contest
                                            put on by the Academy of Sciences in Copenhagen for his investigation into
                                            the measurements of liquid surface tension using oscillating fluid jets.
                                            Working in the laboratory of his father (a renowned physiologist),
                                            Bohr conducted several experiments and even made his own glass test tubes.
                                        </p>
                                    </Row>

                                    <Row>
                                        <img src={niels} alt={"Niels Bohr picture"} />
                                    </Row>
                                </Container>
                            </Col>
                        </Row>

                        <form onSubmit={handleSubmit}>
                        <Row style={{backgroundColor: "#29405B", color: "white", paddingTop: 100, textAlign: "left"}} className="justify-content-center">
                            <Container fluid>
                                <Row className="justify-content-center">
                                    <Col className={"col-4"}>
                                        <p style={{fontSize: 48, fontWeight: "bold"}}>CONTACT US</p>
                                    </Col>
                                </Row>

                                <Row className="justify-content-center">
                                    <Col className={"col-4"} style={{ clipPath: "polygon(0 0, 95% 0, 100% 100%, 0% 100%)", backgroundColor: "#F8EDDD", color: "black", padding: 25}}>
                                        <Container fluid style={{margin: 0}}>
                                                <Row className="justify-content-center">
                                                    <Col className={"col-12"}>
                                                        <Row>
                                                            <Col>
                                                                <div className={"form-group"}>
                                                                    <label style={{fontWeight: "bold"}}>Name:</label>
                                                                    <input className="form-control" type="text" required={true}
                                                                           value={this.state.name} style={{width: "100%"}}
                                                                           name={"from_name"}
                                                                           onChange={(event => this.setState({name: event.target.value}))} />
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>

                                                <Row className="justify-content-center">
                                                    <Col className={"col-12"}>
                                                        <Row>
                                                            <Col>
                                                                <div className={"form-group"}>
                                                                    <label style={{fontWeight: "bold"}}>Email:</label>
                                                                    <input className="form-control" type="email" required={true}
                                                                           value={this.state.email} style={{width: "100%"}}
                                                                           name={"email"}
                                                                           onChange={(event => this.setState({email: event.target.value}))} />
                                                                </div>
                                                            </Col>

                                                            {/*<Col>*/}
                                                            {/*    <div className={"form-group"}>*/}
                                                            {/*        <label>Phone #:</label>*/}
                                                            {/*        <input className="form-control" type="text"*/}
                                                            {/*               value={this.state.phoneNum} style={{width: "100%"}}*/}
                                                            {/*               onChange={(event => this.setState({phoneNum: event.target.value}))} />*/}
                                                            {/*    </div>*/}
                                                            {/*</Col>*/}
                                                        </Row>
                                                    </Col>
                                                </Row>

                                                <Row className="justify-content-center">
                                                    <Col className={"col-12"}>
                                                        <div className={"form-group"}>
                                                            <label style={{fontWeight: "bold"}}>Message:</label>

                                                            <textarea className="form-control" required={true}
                                                                      value={this.state.message} style={{width: "100%"}}
                                                                      name={"message"}
                                                                      onChange={(event => this.setState({message: event.target.value}))} />
                                                        </div>
                                                    </Col>
                                                </Row>
                                        </Container>
                                    </Col>
                                </Row>

                                <Row className="justify-content-center" style={{marginTop: 10}}>
                                    <Col className={"col-4"}>
                                        <input type={"submit"}  className={"green-button"} style={{float: "right", width: 200,
                                            clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)", color: "white"}} value={"Submit"} />
                                    </Col>
                                </Row>
                            </Container>
                        </Row>
                        </form>
                    </Container>
                {/*<div className="about-banner">*/}
                {/*    <img  className="about-banner" src={banner} width={"100%"} height={"100%"} />*/}
                {/*    <div className="about-text" style={{backgroundColor: "#29405B", height: "auto"}}>*/}
            </>
        );
    }
}

export default AboutUs;