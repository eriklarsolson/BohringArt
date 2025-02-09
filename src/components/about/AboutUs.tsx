import React, { useState } from 'react';
import './About.css';
import { Container, Row, Col } from 'react-bootstrap';
import niels from "@/src/assets/AboutUs/niels.png";
import logo from "@/src/assets/AboutUs/logo.png";
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from "react-toastify";
import { AboutUsAnimation } from "./AboutUsAnimation";

export default function AboutUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        emailjs.send(
            '1234',
            'template_cd5l4jm',
            {
                from_name: formData.name,
                email: formData.email,
                message: formData.message
            },
            'user_4GY0SIFrayOWVCLxTbmk0'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                toast("Thank you for contacting us! We will get back to you asap!");
            })
            .catch((error) => {
                console.log('FAILED...', error);
                toast("Message failed to send");
            });
    };

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
                pauseOnHover
            />

            <Container fluid style={{ margin: 0, backgroundColor: "#29405B", overflow: "hidden" }}>
                <AboutUsAnimation />

                <Row className="justify-content-center" style={{ clipPath: "polygon(0 100px, 100% 0, 100% 95%, 0 100%)" }}>
                    <Col className="col-12 col-md-6 col-sm-12" style={{ padding: 100, backgroundColor: "#F8EDDD" }}>
                        <Container fluid>
                            <Row style={{ textAlign: "left", paddingLeft: "5%", paddingRight: "5%", paddingTop: "5%" }}>
                                <h1 style={{ fontWeight: "bolder", color: "#29405B" }}>PROJECT PURPOSE</h1>
                            </Row>

                            <Row style={{ textAlign: "left", paddingLeft: "5%", paddingRight: "5%", paddingTop: 10, paddingBottom: "5%" }}>
                                <p style={{ color: "#29405B" }}>
                                    Physical sciences explain the universe on a fundamental level. And constructing effective visualization of scientific concepts is just as important as their content. Blending physics and art via graphic design is an effective tool to engage the audience and provide new, modern ways of learning.
                                    <br /><br />
                                    This project is a collaboration between the physicist Dr. Dena Izadi, and Parisa Ghaderi, assistant professor of Graphic Design and includes a diverse team of physicists and artists, from different ethnicities and cultural backgrounds, working in partnership with Science Gallery Detroit as part of the 'Future Present: design in time of urgency' exhibition.
                                    <br /><br />
                                    Our educational website uses the principles of interactive design to convey physics concepts effectively to audiences of 15-25 years old, and can be used by anyone willing to learn and experience physics. Our goal is to create an interactive media for our audience to learn basic physics concepts in a more accessible and engaging way.
                                    In addition to the immediate goals for this project, our team is also interested in how this project allows for interdisciplinary collaboration between students of diverse fields of studies and how blending art and physics allows for multiple identities to be supported.
                                </p>
                            </Row>

                            <Row style={{ paddingLeft: "5%" }}>
                                <Col className="col-6 col-md-6 col-lg-4" style={{ backgroundColor: "#29405B", padding: 25 }}>
                                    <img alt="Logo" src={logo} width="100%" />
                                </Col>
                            </Row>
                        </Container>
                    </Col>

                    <Col className="col-12 col-md-6 col-sm-12" style={{ backgroundColor: "rgba(82, 82, 82, 0.8)", paddingBottom: 100 }}>
                        <Container fluid style={{ padding: 100 }}>
                            <Row style={{ textAlign: "left", paddingLeft: "5%", paddingRight: "5%", paddingTop: "5%" }}>
                                <h1 style={{ fontWeight: "bolder", color: "white" }}>WHY BOHRING?</h1>
                            </Row>

                            <Row style={{ textAlign: "left", display: "block", paddingLeft: "5%", paddingRight: "5%", paddingTop: 10, paddingBottom: "5%" }}>
                                <p style={{ color: "white" }}>
                                    Neils Bohr (1885-1962) was a Danish physicist who made significant contributions to understanding atomic structure. Bohr's dad was a professor of physiology and his mother came from a family known in the field of education. Bohr became interested in physics at a young age. He studied the subject throughout his undergraduate and graduate years and earned a doctorate in physics in 1911 from Copenhagen University.
                                    <br /><br />
                                    Bohr received the award of the Nobel Prize in Physics in 1922. He also contributed to the clarification of the problems encountered in quantum physics. He showed how the consequences of the changes in the field of physics reaches far beyond the scope of atomic physics and touches upon all domains of human knowledge.
                                    <br /><br />
                                    During World War II, Bohr took refuge in Sweden and spent the last two years of the war in England and the United States. In his later years, he devoted his work to the peaceful application of atomic physics, and received the first ever Atoms for Peace Award. During the last few years of his life, Bohr showed keen interest in the new developments of molecular biology, which led to his final (unfinished) article only published after his death.
                                </p>
                            </Row>

                            <Row style={{ paddingLeft: "5%" }}>
                                <img src={niels} alt="Niels Bohr person" />
                            </Row>
                        </Container>
                    </Col>
                </Row>

                <form onSubmit={handleSubmit}>
                    <Row style={{ backgroundColor: "#29405B", color: "white", paddingTop: 75, textAlign: "left" }} className="justify-content-center">
                        <Container fluid>
                            <Row className="justify-content-center">
                                <Col className="col-5">
                                    <p style={{ marginLeft: "7%", fontSize: 48, fontWeight: "bold" }}>CONTACT US</p>
                                </Col>
                            </Row>

                            <Row className="justify-content-center">
                                <Col className="col-8 col-md-8 col-lg-4" style={{ clipPath: "polygon(0 0, 95% 0, 100% 100%, 0% 100%)", backgroundColor: "#F8EDDD", color: "black", padding: 25 }}>
                                    <Container fluid style={{ margin: 0 }}>
                                        <Row className="justify-content-center">
                                            <Col className="col-12">
                                                <div className="form-group">
                                                    <label style={{ fontWeight: "bold", color: "#29405B" }}>Name:</label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        required
                                                        value={formData.name}
                                                        style={{ width: "100%" }}
                                                        name="from_name"
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row className="justify-content-center">
                                            <Col className="col-12">
                                                <div className="form-group">
                                                    <label style={{ fontWeight: "bold", color: "#29405B" }}>Email:</label>
                                                    <input
                                                        className="form-control"
                                                        type="email"
                                                        required
                                                        value={formData.email}
                                                        style={{ width: "100%" }}
                                                        name="email"
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row className="justify-content-center">
                                            <Col className="col-12">
                                                <div className="form-group">
                                                    <label style={{ fontWeight: "bold", color: "#29405B" }}>Message:</label>
                                                    <textarea
                                                        className="form-control"
                                                        required
                                                        value={formData.message}
                                                        style={{ width: "100%" }}
                                                        name="message"
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>

                            <Row className="justify-content-center" style={{ marginTop: 25 }}>
                                <Col className="col-8 col-md-8 col-lg-4" style={{ padding: 0, marginLeft: 10 }}>
                                    <input
                                        type="submit"
                                        className="green-button"
                                        style={{
                                            float: "right",
                                            width: 200,
                                            clipPath: "polygon(0 0, 98% 0, 100% 100%, 2% 100%)",
                                            color: "white"
                                        }}
                                        value="Submit"
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                </form>
            </Container>
        </>
    );
};