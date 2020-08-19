import React from 'react';
import './About.scss';
import { Container, Row, Col } from 'react-bootstrap'
import 'react-toastify/dist/ReactToastify.css';

class AboutUs extends React.Component<any, any> {
    render() {
        return (
            <>
                    <Container fluid style={{margin: 0}}>
                        <Row className="justify-content-center" style={{height: "auto", paddingBottom: "10%", backgroundColor: "#29405B",
                            clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)"}}>
                            <Col style={{margin: 20}} className="col-sm-8 col-md-6 col-lg-2">
                                <div style={{width: "250px", height: "250px", backgroundColor: "white", borderRadius: "15px"}} />
                            </Col>

                            <Col style={{margin: 20}} className="col-sm-8 col-md-6 col-lg-2">
                                <div style={{width: "250px", height: "250px", backgroundColor: "white", borderRadius: "15px"}} />
                            </Col>

                            <Col style={{margin: 20}} className="col-sm-8 col-md-6 col-lg-2">
                                <div style={{width: "250px", height: "250px", backgroundColor: "white", borderRadius: "15px"}} />
                            </Col>

                            <Col style={{margin: 20}} className="col-sm-8 col-md-65 col-lg-2">
                                <div style={{width: "250px", height: "250px", backgroundColor: "white", borderRadius: "15px"}} />
                            </Col>

                            <Col style={{margin: 20}} className="col-sm-8 col-md-6 col-lg-2">
                                <div style={{width: "250px", height: "250px", backgroundColor: "white", borderRadius: "15px"}} />
                            </Col>

                            <Col style={{margin: 20}} className="col-sm-8 col-md-6 col-lg-2">
                                <div style={{width: "250px", height: "250px", backgroundColor: "white", borderRadius: "15px"}} />
                            </Col>

                            <Col style={{margin: 20}} className="col-sm-8 col-md-6 col-lg-2">
                                <div style={{width: "250px", height: "250px", backgroundColor: "white", borderRadius: "15px"}} />
                            </Col>
                        </Row>

                        <Row style={{display: "block"}}>
                            <h1>Project Purpose</h1>
                        </Row>

                        <Row style={{textAlign: "left", display: "block", padding: "5%"}}>
                            <p style={{fontWeight: "bold"}}>
                                Dena, Parisa, Brena fill<br />
                                Explanation, website to science gallery
                            </p>
                            <p>
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
                {/*<div className="about-banner">*/}
                {/*    <img  className="about-banner" src={banner} width={"100%"} height={"100%"} />*/}
                {/*    <div className="about-text" style={{backgroundColor: "#29405B", height: "auto"}}>*/}
            </>
        );
    }
}

export default AboutUs;