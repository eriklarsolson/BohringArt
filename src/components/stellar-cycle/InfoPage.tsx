import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
import stellarBackground from './stellarBackground.png';
import Button from "react-bootstrap/Button";
import avgstar from "./images/avgstar.png"
import blackhole from "./images/blackhole.png"
import massivestar from "./images/massivestar.png"
import nebula from "./images/nebula.png"
import neutronstar from "./images/neutronstar.png"
import planetarynebula from "./images/planetarynebula.png"
import redgiant from "./images/redgiant.png"
import redsupergiant from "./images/redsupergiant.png"
import supernova from "./images/supernova.png"
import whitedwarf from "./images/whitedwarf.png"

class InfoPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: this.props.location.state.title,
            description: "",
            image: null,
        };
    }

    componentDidMount() {
        const object = this.state.title;

        if(object === "Nebula") {
            this.setState({description: "A collection of dust and gas, specifically hydrogen, helium, and ionized " +
                    "gas resulting from supernovae pushing gas outwards into space. Nebulae are often large in size but " +
                    "can be extremely light and thinly spread out. Depending on the presence of stars or remnants, " +
                    "nebulae have been observed to be at temperatures from 1 Kelvin (K) to millions of K. For star " +
                    "formation specifically, cold, dense gas is needed as hot gas is too energetic to clump together " +
                    "to form a functioning star.", image: nebula})
        } else if(object === "Average Star") {
            this.setState({description: "Formed in Stellar Nebula from massive groups of collapsing dust and gas." +
                    "Hydrogen at the core of the star is fused together to form helium\n" +
                    "The process of fusion requires extremely high temperatures, during which hydrogen nuclei fuse together " +
                    "to form helium, and some matter is converted directly into energy", image: avgstar})
        } else if(object === "Red Giant") {
            this.setState({description: "Formed from an average star after some time. The average star puffs outwards and" +
                    " increases in brightness while maintaining the same mass.\n" + "The fusion reactions powering the star " +
                    "are from shell-based reactions. There is an outer shell of hydrogen burning into helium while the core is inert " +
                    "helium.", image: redgiant})
        } else if(object === "Planetary Nebula") {
            this.setState({description: "This is actually a misleading label, as there are no planets involved here. " +
                    "The nebula is a result of a red giant shedding its gaseous outer layers over a long period of time. Light " +
                    "coming from the remaining energetic core is able to remove electrons from their atoms, which pushes " +
                    "the star’s gaseous layers outward, thus revealing a white dwarf.\n" + "These stellar objects are " +
                    "rather short lived as the gas continues to move away from the core. The gaseous layers are crucial " +
                    "for providing the chemical elements needed for future stars and nebulae.", image: planetarynebula})
        } else if(object === "White Dwarf") {
            this.setState({description: "White Dwarfs are the very small and hot cores of average mass stars that " +
                    "have run out of hydrogen and helium to fuse.\n" + "White Dwarfs have much more mass than Earth, " +
                    "but are still the same size due to the strong gravitational force causing the dwarf to collapse inward. " +
                    "These two properties make white dwarfs extremely dense, with black holes and neutron stars being denser.\n" +
                    "White Dwarfs that are very massive are also very small because the electrons inside the dwarf must " +
                    "come closer together in order to create enough internal pressure to support the mass.", image: whitedwarf})
        } else if(object === "Massive Star") {
            this.setState({description: "Massive stars have minimum masses of 5 to 6 solar masses, but can be much " +
                    "bigger. As a result of their size, they are able to maintain more fuel for fusion but also use it " +
                    "at much faster rates, resulting in lifetimes on the order of hundreds of millions of years instead " +
                    "of billions like our Sun. \n" + "These stars are also able to fuse hydrogen into helium like " +
                    "average stars, but they also form shells of numerous fusion reactions, eventually creating iron. " +
                    "Once iron is formed, fusion is no longer a worthwhile process since more energy is needed to " +
                    "fuse iron than what is outputted, resulting in the fiery explosion known as a supernova.", image: massivestar})
        } else if(object === "Red Supergiant") {
            this.setState({description: "The next phase after the main sequence phase for a massive star. They " +
                    "are the most massive and typically the brightest stars present. \n" + "They are typically 8 solar " +
                    "masses and above while the maximum radius observed is about " + "1000 times that of the Sun. These " +
                    "stars undergo all sorts of fusion reactions, ultimately resulting in fusion into iron, at which " +
                    "point fusion becomes unsustainable.", image: redsupergiant})
        } else if(object === "Supernova") {
            this.setState({description: "A supernova is a celestial event that occurs when a supermassive star runs " +
                    "out of viable nuclear fuel (unable to fuse beyond iron) and collapses in on itself due to the force " +
                    "of gravity. This collapse happens very quickly within seconds, and causes a large shock wave that " +
                    "makes the outer layer of the star explode. \n" + "These explosions are so powerful that they " +
                    "shine brighter than the galaxy they take place in. Afterwards, a gaseous and hot nebula is what " +
                    "remains, along with the star’s small and dense core, which could be either a neutron star or " +
                    "black hole.", image: supernova})
        } else if(object === "Neutron Star") {
            this.setState({description: "Neutron stars are relatively small but extremely dense balls of " +
                    "neutrons and trace amounts of other elements. They can have more mass than our Sun but only be " +
                    "20km in diameter.\n" + "They are held together by an inward force of gravity and an outward " +
                    "pressure created by a quantum mechanical effect called neutron degeneracy pressure.They have " +
                    "magnetic fields trillions of times stronger than that of Earth, which form as a result of " +
                    "numerous electric charges moving in the star. If radiation is emitted as a result, then " +
                    "the object is known as a pulsar, a kind of cosmic lighthouse. \n", image: neutronstar})
        } else if(object === "Black Hole") {
            this.setState({description: "A stellar black hole is formed when a very, very massive star collapses " +
                    "in on itself during a supernova. Black holes are relatively small, but extremely massive, with " +
                    "black holes that are 10 miles in diameter having a mass 20 times that of the sun. \n" +
                    "Black holes are the most dense celestial bodies in existence, and the gravity around " +
                    "them is so strong that even light is not able to escape. When “swallowing” another star," +
                    "black holes can form an accretion disk in their outermost orbit, where that star’s mass emits " +
                    "high energy light. Scientists often use these disks to detect black holes since the black hole " +
                    "itself is not visible. \n", image: blackhole})
        } else {
            this.setState({description: "test no object found", image: nebula})
        }
    }

    render() {
        return (
            <>
                <Container fluid className={"d-flex h-100 flex-column"} style={{margin: "0", padding: "0",
                    backgroundImage:`url(${stellarBackground})`, textAlign: "left"}}>
                    <Row style={{margin: 0, padding: 0}}>
                        <Col className={"col-6 vh-100 align-items-center justify-content-center"} style={{display: "flex", margin: 0, padding: 0}}>
                                    <img src={this.state.image} />
                        </Col>

                        <Col className={"col-6 vh-100"} style={{margin: 0, padding: 0, backgroundColor: "#29405B",
                            color: "white", clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)"}}>
                            <Container fluid style={{margin: 0, padding: 0}}>

                                <Row style={{margin: 0, marginBottom: "5%"}}>
                                    <Col className={"col-2 ml-auto"} style={{padding: 0, marginTop: "3%"}}>
                                        <Row style={{margin: 0}} className={"justify-content-end"}>
                                            <Button className={"green-button"} style={{width: 200,
                                                clipPath: "polygon(10px 0, 100% 0, 100% 100%, 15% 100%)"}}
                                                onClick={() => this.props.history.push({
                                                    pathname: '/activity/object-page',
                                                    state: { title: this.state.title }
                                            })}>
                                                <i className="fa fa-arrow-right" />
                                            </Button>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row className="justify-content-center" style={{margin: 0, padding: 0}}>
                                    <Col className={"col-8"}>
                                        <h1>{this.state.title}</h1>
                                    </Col>
                                </Row>

                                <Row className="justify-content-center" style={{margin: 0, padding: 0}}>
                                    <Col className={"col-8"}>
                                        <p style={{fontSize: 20}}>{this.state.description}</p>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default InfoPage;