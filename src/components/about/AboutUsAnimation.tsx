import * as React from "react";
import {motion, useAnimation} from "framer-motion";
import { Container, Row, Col, Button } from 'react-bootstrap'
import {useState} from "react";
import dena from "./images/dena.png";
import parisa from "./images/parisa2.jpg";
import brean from "./images/person3.png";
import danny from "./images/danny.png";
import wyatt from "./images/person1.png";
import pranav from "./images/person2.png";
import ray from "./images/person5.png";
import lars from "./images/lars.png";
import hueywen from "./images/person4.png";
import mohammad from "./images/mohammad.jpg"
import "./About.scss"

export interface AnimationProps {

}

export const AboutUsAnimation: React.FC<AnimationProps>  = ({}) => {
    const controls1 = useAnimation()
    const controls2 = useAnimation()

    const [image, setImage] = useState<string>(lars);
    const [name, setName] = useState<string>("Lars Olson");
    const [title, setTitle] = useState<string>("Programmer");
    const [description, setDescription] = useState<string>("This is a description about a person");

    const [infoStyles, setInfoStyles] = useState<React.CSSProperties>({
        display: "none"
    });

    const showInfo = () => {
        controls2.start({
            opacity: [0, 1],
            transition: {
                duration: 1,
                ease: "easeInOut",
            },
        })

        setInfoStyles({
            display: "block"
        })
    }

    const hideInfo = () => {
        controls2.start({
            opacity: [1, 0],
            transition: {
                duration: 1,
                ease: "easeInOut",
            },
        })

        setTimeout(() => {  showPeople() }, 500);
    }

    const showPeople = () => {
        controls1.start({
            x: ["100%", "0%"],
            transition: {
                duration: 1,
                ease: "easeInOut",
            },
        })

        setInfoStyles({
            display: "none"
        })
    }

    const hidePeople = () => {

        controls1.start({
            x: ["0%", "100%"],
            transition: {
                duration: 1,
                ease: "easeInOut",
            },
        })

        setTimeout(() => {  showInfo() }, 500);
    }
    const startAnimation = (person: string) => {
        if (person === "dena") {
            setImage(dena)
            setName("Dena Izadi (Supervisor and Creator)")
            setTitle("Postdoctoral Research Associate | Department of Physics and Astronomy | MSU")
            setDescription("Hi! I am Dena Izadi, a postdoctoral fellow in physics education research lab at MSU. Before that, I did my PhD in (bio)physics. As the Bohring Art supervisor and creator, my role is to facilitate the physics communication among the team members. Outside of physics, I am a hobby artist, a proud plant mom, love cooking (Persian and international!), and enjoy traveling. I grew up in Shiraz, Iran, moved to the United States in 2010 for graduate school and have lived mostly in Michigan ever since. If you have any questions for me, feel free to send me an email at: izadiden@msu.edu")
        } else if (person === "parisa") {
            setImage(parisa)
            setName("Parisa Ghaderi (Supervisor and Creator)")
            setTitle("Assistant Professor | Graphic Design | MSU")
            setDescription("Being a visual artist, curator, designer and educator, I am interested in interdisciplinary approaches and finding ways to connect with people through art.")
        } else if (person === "brean") {
            setImage(brean)
            setName("Brean Prefontaine")
            setTitle("Graduate Student | MSU")
            setDescription("Hi! I am Brean Prefontaine and I am a physics graduate student working with the Bohring Art team! My role on the project was primarily being a researcher to understand how this project turned out. However, I loved being involved in a creative project that allowed me to see how art and physics could be blended together! Outside of physics, I explore my creative side through figure skating/ice dancing and cooking! I grew up in Southern California, went to college at Drexel University in Philadelphia, and then headed to Michigan State for graduate school.")
        } else if (person === "danny") {
            setImage(danny)
            setName("Danny Brandwein")
            setTitle("Graphic Design Student | MSU")
            setDescription("This is a description about a person")
        } else if (person === "wyatt") {
            setImage(wyatt)
            setName("Wyatt Stonhouse")
            setTitle("Graphic Design Student | MSU")
            setDescription("Hi! I am Wyatt Stonhouse and I am a graphic design student at MSU. My role with Bohring Art working along the other students and creating the visuals throughout our site and activities. Besides this project, my graphic design interests are towards sustainable and environmental design. Outside of design, I enjoy cycling and reading comics. I grew up in northern Michigan and will be graduating MSU December 2020. \n")
        } else if (person === "pranav") {
            setImage(pranav)
            setName("Pranav Nalamwar")
            setTitle("Physics Student | MSU")
            setDescription("Hi everyone! I'm Pranav Nalamwar, a senior at MSU studying Physics and Astrophysics. I work at the Facility for Rare Isotope Beams studying Nuclear Astrophysics and the origin of the elements on the periodic table as well as work at Abrams Planetarium as a show presenter. For Bohring Art, I am one of the Physics students involved in teaching others about numerous Physics topics. In my free time, I love reading books, fencing, biking, and hiking.")
        } else if (person === "ray") {
            setImage(ray)
            setName("Ray Smith")
            setTitle("Physics Student | MSU")
            setDescription("I'm Raymond Smith, a sophomore student at MSU. As a physics major working on the project, my role is to help teach and make sure the concepts are shown in interesting ways. I'm a movie buff, so in my free time I like to catch up on movies and shows. I also skateboard and read comic books.")
        } else if (person === "lars") {
            setImage(lars)
            setName("Lars Olson")
            setTitle("Developer")
            setDescription("Hey there! My name is Lars Olson, I am from Indianapolis, IN and am the website developer for BohringArt! I am a 2020 graduate from Indiana University with a BS in Computer Science specializing in Artificial Intelligence. Outside of software development, I also played rugby for 8 years & also manage a record label focused primarily on releasing electronic music.")
        } else if (person === "hueywen") {
            setImage(hueywen)
            setName("Huey-Wen Lin (Participating Faculty)")
            setTitle("Assistant Professor | Department of Physics and Astronomy | MSU")
            setDescription("This is a description about a person")
        } else if (person === "mohammad") {
            setImage(mohammad)
            setName("Mohammad Maghrebi (Faculty Sponsor)")
            setTitle("Sponsor MSU Physics Faculty | MSU")
            setDescription("Hi! I am Mohammad Maghrebi, a physics faculty at MSU. I received my PhD from MIT, and am the Bohring Art faculty sponsor. I have been actively involved in finding ways to communicate physics with the public audience. Outside of physics, I like reading history, philosophy and poetry (Persian/English). For more information, see my webpage: https://web.pa.msu.edu/people/maghrebi/")
        }

        hidePeople()
    }

    return (
        <>
            <motion.div
                animate={controls1}

                style={{height: "100%"}}>
                <Row className="justify-content-center">
                    <Container fluid>
                        <Row className={"justify-content-center"}>
                            <Col className={"col-12"}>
                                <Row  className={"justify-content-center"}>
                                    <Col className={"col-8"}>
                                        <p style={{color: "white", fontSize: 55, fontWeight: "bold", textAlign: "left"}}>Our Team</p>
                                    </Col>
                                </Row>

                                <Container fluid>
                                    <Row className={"justify-content-center"} style={{marginBottom: 30}}>
                                        <Col className="col-8 col-md-8 col-lg-2 person" style={{margin: 5}} onClick={() => startAnimation("dena")}>
                                            <Container fluid style={{clipPath: "polygon(0 0, 90% 0, 100% 100%, 10% 100%)"}}>
                                                <Row>
                                                    <div style={{overflow: "hidden", padding: 0, width: "100%", minWidth: 225}}>
                                                        <img alt={"About Us Person"} src={dena} style={{width: "100%"}} />
                                                    </div>
                                                </Row>

                                                <Row style={{backgroundColor: "#F8EDDD", color: "#29405B", minHeight: 65}}>
                                                    <Col>
                                                        <p style={{marginLeft: "8%", marginTop: 10, fontSize: "1.5vh", fontWeight: "bold"}}>Dena Izadi</p>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>

                                        <Col className="col-8 col-md-8 col-lg-2 person" style={{margin: 5}} onClick={() => startAnimation("parisa")}>
                                            <Container fluid style={{clipPath: "polygon(0 0, 90% 0, 100% 100%, 10% 100%)"}}>
                                                <Row>
                                                    <div style={{overflow: "hidden", padding: 0, width: "100%", minWidth: 225}}>
                                                        <img alt={"About Us Person"} src={parisa} style={{width: "100%"}} />
                                                    </div>
                                                </Row>

                                                <Row style={{backgroundColor: "#F8EDDD", color: "#29405B", minHeight: 65}}>
                                                    <Col>
                                                        <p style={{marginLeft: "8%", marginTop: 10, fontSize: "1.5vh", fontWeight: "bold"}}>Parisa Ghaderi</p>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>

                                        <Col className="col-8 col-md-8 col-lg-2 person" style={{margin: 5}} onClick={() => startAnimation("brean")}>
                                            <Container fluid style={{clipPath: "polygon(0 0, 90% 0, 100% 100%, 10% 100%)"}}>
                                                <Row>
                                                    <div style={{overflow: "hidden", padding: 0, width: "100%", minWidth: 225}}>
                                                        <img alt={"About Us Person"} src={brean} style={{width: "100%"}} />
                                                    </div>
                                                </Row>

                                                <Row style={{backgroundColor: "#F8EDDD", color: "#29405B", minHeight: 65}}>
                                                    <Col>
                                                        <p style={{marginLeft: "8%", marginTop: 10, fontSize: "1.5vh", fontWeight: "bold"}}>Brean Prefontaine</p>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>

                                        <Col className="col-8 col-md-8 col-lg-2 person" style={{margin: 5}} onClick={() => startAnimation("danny")}>
                                            <Container fluid style={{clipPath: "polygon(0 0, 90% 0, 100% 100%, 10% 100%)"}}>
                                                <Row>
                                                    <div style={{overflow: "hidden", padding: 0, width: "100%", minWidth: 225}}>
                                                        <img alt={"About Us Person"} src={danny} style={{width: "100%"}} />
                                                    </div>
                                                </Row>

                                                <Row style={{backgroundColor: "#F8EDDD", color: "#29405B", minHeight: 65}}>
                                                    <Col>
                                                        <p style={{marginLeft: "8%", marginTop: 10, fontSize: "1.5vh", fontWeight: "bold"}}>Danny Brandwein</p>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>
                                    </Row>

                                    <Row className={"justify-content-center"} style={{marginLeft: "2.7%", marginBottom: 30}}>
                                        <Col className="col-8 col-md-8 col-lg-2 person" style={{margin: 5, marginRight: "1%"}} onClick={() => startAnimation("wyatt")}>
                                            <Container fluid style={{clipPath: "polygon(0 0, 90% 0, 100% 100%, 10% 100%)"}}>
                                                <Row>
                                                    <div style={{overflow: "hidden", padding: 0, width: "100%", minWidth: 225}}>
                                                        <img alt={"About Us Person"} src={wyatt} style={{width: "100%"}} />
                                                    </div>
                                                </Row>

                                                <Row style={{backgroundColor: "#F8EDDD", color: "#29405B", minHeight: 65}}>
                                                    <Col>
                                                        <p style={{marginLeft: "8%", marginTop: 10, fontSize: "1.5vh", fontWeight: "bold"}}>Wyatt Stonhouse</p>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>

                                        <Col className="col-8 col-md-8 col-lg-2 person" style={{margin: 5, marginRight: "1%"}} onClick={() => startAnimation("pranav")}>
                                            <Container fluid style={{clipPath: "polygon(0 0, 90% 0, 100% 100%, 10% 100%)"}}>
                                                <Row>
                                                    <div style={{overflow: "hidden", padding: 0, width: "100%", minWidth: 225}}>
                                                        <img alt={"About Us Person"} src={pranav} style={{width: "100%"}} />
                                                    </div>
                                                </Row>

                                                <Row style={{backgroundColor: "#F8EDDD", color: "#29405B", minHeight: 65}}>
                                                    <Col>
                                                        <p style={{marginLeft: "8%", marginTop: 10, fontSize: "1.5vh", fontWeight: "bold"}}>Pranav Nalamwar</p>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>

                                        <Col className="col-8 col-md-8 col-lg-2 person" style={{margin: 5, marginRight: "1%"}} onClick={() => startAnimation("ray")}>
                                            <Container fluid style={{clipPath: "polygon(0 0, 90% 0, 100% 100%, 10% 100%)"}}>
                                                <Row>
                                                    <div style={{overflow: "hidden", padding: 0, width: "100%", minWidth: 225}}>
                                                        <img alt={"About Us Person"} src={ray} style={{width: "100%"}} />
                                                    </div>
                                                </Row>

                                                <Row style={{backgroundColor: "#F8EDDD", color: "#29405B", minHeight: 65}}>
                                                    <Col>
                                                        <p style={{marginLeft: "8%", marginTop: 10, fontSize: "1.5vh", fontWeight: "bold"}}>Ray Smith</p>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>

                                        <Col className="col-8 col-md-8 col-lg-2 person" style={{margin: 5}} onClick={() => startAnimation("lars")}>
                                            <Container fluid style={{clipPath: "polygon(0 0, 90% 0, 100% 100%, 10% 100%)"}}>
                                                <Row>
                                                    <div style={{overflow: "hidden", padding: 0, width: "100%", minWidth: 225}}>
                                                        <img alt={"About Us Person"} src={lars} style={{width: "100%"}} />
                                                    </div>
                                                </Row>

                                                <Row style={{backgroundColor: "#F8EDDD", color: "#29405B", minHeight: 65}}>
                                                    <Col>
                                                        <p style={{marginLeft: "8%", marginTop: 10, fontSize: "1.5vh", fontWeight: "bold"}}>Lars Olson</p>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>
                                    </Row>

                                    <Row className={"justify-content-center"} style={{marginLeft: "6%"}}>
                                        <Col className="col-8 col-md-8 col-lg-2 person" style={{margin: 5, marginRight: "2%"}} onClick={() => startAnimation("hueywen")}>
                                            <Container fluid style={{clipPath: "polygon(0 0, 90% 0, 100% 100%, 10% 100%)"}}>
                                                <Row>
                                                    <div style={{overflow: "hidden", padding: 0, width: "100%", minWidth: 225}}>
                                                        <img alt={"About Us Person"} src={hueywen} style={{width: "100%"}} />
                                                    </div>
                                                </Row>

                                                <Row style={{backgroundColor: "#F8EDDD", color: "#29405B", minHeight: 65}}>
                                                    <Col>
                                                        <p style={{marginLeft: "8%", marginTop: 10, fontSize: "1.5vh", fontWeight: "bold"}}>Huey-Wen Lin</p>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>

                                        <Col className="col-8 col-md-8 col-lg-2 person"  style={{margin: 5}} onClick={() => startAnimation("mohammad")}>
                                            <Container fluid style={{clipPath: "polygon(0 0, 90% 0, 100% 100%, 10% 100%)"}}>
                                                <Row>
                                                    <div style={{overflow: "hidden", padding: 0, width: "100%", minWidth: 225}}>
                                                        <img alt={"About Us Person"} src={mohammad} style={{width: "100%"}} />
                                                    </div>
                                                </Row>

                                                <Row style={{backgroundColor: "#F8EDDD", color: "#29405B", minHeight: 65}}>
                                                    <Col>
                                                        <p style={{marginLeft: "8%", marginTop: 10, fontSize: "1.5vh", fontWeight: "bold"}}>Mohammad Maghrebi</p>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </motion.div>

            <motion.div
                animate={controls2}

                style={{position: "absolute", top: 250, bottom: 0, right: 0, left: 0, opacity: 0, ...infoStyles}}>

                <Row  className={"justify-content-center"}>
                    <Col className={"col-10"}>
                        <p style={{marginLeft: "4%", color: "white", fontSize: 45, fontWeight: "bold", textAlign: "left"}}>Meet The Team</p>
                    </Col>
                </Row>

                <Row className={"justify-content-center"} style={{padding: 5}}>
                    <Col className={"col-3"} style={{padding: 0, minHeight: 250}}>
                        <Container fluid style={{height: "100%", clipPath: "polygon(0 0, 100% 0, 100% 100%, 15% 100%)"}}>
                            <Row style={{height: "100%"}}>
                                <img alt={"About Us Person"} src={image} style={{width: "100%", objectFit: "cover"}} />
                            </Row>
                        </Container>
                    </Col>

                    <Col className={"col-6"} style={{padding: 0, backgroundColor: "#F8EDDD", minHeight: 250,
                        clipPath: "polygon(0 0, 93% 0, 100% 100%, 0% 100%)"}}>
                        <Container fluid style={{textAlign: "left", margin: "3%", color: "#29405B"}}>
                            <Row className={"justify-content-center"}>
                                <Col className={"col-9"}>
                                    <Button className={"green-button"} style={{float: "right", width: 100,
                                        clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
                                            onClick={() => hideInfo()}>
                                        <i className="fa fa-arrow-right" />
                                    </Button>
                                </Col>
                            </Row>

                            <Row className={"justify-content-center"}>
                                <Col className={"col-9"}>
                                    <p style={{marginBottom: 0, fontSize: 30, fontWeight: "bold"}}>{name}</p>
                                </Col>
                            </Row>
                            <Row className={"justify-content-center"}>
                                <Col className={"col-9"}>
                                    <p style={{fontSize: 20, fontWeight: "bold"}}>{title}</p>
                                </Col>
                            </Row>
                            <Row className={"justify-content-center"}>
                                <Col className={"col-9"}>
                                    <p style={{marginBottom: 0, fontSize: 16, fontWeight: "bold"}}>{description}</p>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </motion.div>
        </>
    );
};
