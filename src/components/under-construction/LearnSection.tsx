import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import circuitbuilding from './circuitbuilding.png';
import './Home.scss';
import {LearnSectionModel} from "../shared/models/LearnSectionModel";

class LearnSection extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            learnSelection: 0,
            imageSelection: 0
        }
    }

    render() {
        let learnSections: Array<LearnSectionModel> = [
            {
                Title: " Circuit Construction",
                Description: "Learn about circuit components to build one that can power your satellite. Demonstrate the flow of electrons in a circuit and how circuit components (capacitors, resistors, inductors, etc.) can affect their energy.",
            },
            {
                Title: "Lasers and Lenses",
                Description: "Learn how lenses manipulate light to understand how your telescope sees distant stars. Experiment with the variables that affect the image formed when shining light through a lens, and begin controlling the type of image you see by manipulating these variables. Understand how light moves through space and different mediums",
            },
            {
                Title: "To The Stars",
                Description: "Using the arrows on the left and right, create a rocket consisting of an engine, boosters, a body, and a cone. Make sure to account for fuel, air resistance, and weight as all affect the rocket’s motion greatly. Click LAUNCH  to send your rocket off into space with the telescope as the payload. Along the way, answer TEXT-based questions that determine the fate of your journey! Remember to answer the questions keeping in mind the cost of the rocket as well as the survival of its crew.",
            },
            {
                Title: "Stellar Life Cycle",
                Description: "Learn more about what your telescope sees, and a star’s life cycle from creation to destruction. Discover what each part of the life cycle can do, how it affects its surroundings, and when the phase transitions to the next. See how important certain variables such as mass and radius are in determining the next phase and the stellar events.",
            }
        ]

        const changeLearnSection = (index: number) => {
            this.setState({ learnSelection: index });
        }

        return (
            <>
               <Container fluid>
                   <h1 style={{color: "#002245;", margin: "5%"}}>What You'll Learn</h1>

                   <Row className={"justify-content-center"}>
                       <Col className="col-2" style={{color: "white"}}>
                            <Row className="justify-content-center" style={{margin: "10px"}}>
                                <div className={"number-block"} style={{width: "100px", height: "100px",
                                    backgroundColor: "#29405B"}} onMouseOver={() => changeLearnSection(0)}>
                                    <h1>01</h1>
                                </div>
                            </Row>

                           <Row className="justify-content-center" style={{margin: "10px"}}>
                               <div className={"number-block"} style={{width: "100px", height: "100px",
                                   backgroundColor: "#29405B"}} onMouseOver={() => changeLearnSection(1)}>
                                   <h1>02</h1>
                               </div>
                           </Row>

                           <Row className="justify-content-center" style={{margin: "10px"}}>
                               <div className={"number-block"} style={{width: "100px", height: "100px",
                                   backgroundColor: "#29405B"}} onMouseOver={() => changeLearnSection(2)}>
                                   <h1>03</h1>
                               </div>
                           </Row>

                           <Row className="justify-content-center" style={{margin: "10px"}}>
                               <div className={"number-block"} style={{width: "100px", height: "100px",
                                   backgroundColor: "#29405B"}} onMouseOver={() => changeLearnSection(3)}>
                                   <h1>04</h1>
                               </div>
                           </Row>
                       </Col>

                       <Col className="col-8" style={{width: "100px", backgroundColor: "#29405B", color: "white", marginBottom: "5%"}}>
                           <Row style={{padding: 25}} className={"justify-content-center"}>
                               <Col className={"col-8"}>
                                   <h1>{learnSections[this.state.learnSelection].Title}</h1>

                                   <p>{learnSections[this.state.learnSelection].Description}</p>
                               </Col>

                               {/*<Col style={{padding: "0"}}>*/}
                               {/*    <img src={images[this.state.learnSelection]}*/}
                               {/*        style={{objectFit: "cover", maxWidth: "100%",*/}
                               {/*            display: "block", height: "auto"}} />*/}
                               {/*</Col>*/}
                           </Row>
                       </Col>
                   </Row>
               </Container>
            </>
        )
    }
}
export default LearnSection;