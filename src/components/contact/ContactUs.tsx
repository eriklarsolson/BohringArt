import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import {Button} from "@material-ui/core";

class ContactUs extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phoneNum: "",
            message: "",
        }
    }

    handleSubmit(event: any) {
        console.log(this.state.firstName)
        console.log(this.state.lastName)
        console.log(this.state.email)
        console.log(this.state.phoneNum)
        console.log(this.state.message)

        //TODO - Need to connect this to email so it actually sends

        event.preventDefault();
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <Container fluid style={{margin: 0}}>
                        <Row className="justify-content-center">
                            <Col className={"col-8 vh-100"} style={{padding: "10%", height: 500,
                                backgroundColor: "#29405B", color: "white",
                                clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}>
                                <Row style={{border: "2px solid white", padding: 15, borderRadius: 25}}>
                                    <Col>
                                        <Row className="justify-content-center" style={{marginBottom: 25}}>
                                            <Col>
                                                <h1>Contact Us</h1>
                                            </Col>
                                        </Row>

                                        <Row className="justify-content-center">
                                            <Col className={"col-10"}>
                                                <Row>
                                                    <Col>
                                                        <div className={"form-group"}>
                                                            <label>
                                                                First Name:
                                                            </label>
                                                            <input className="form-control" type="text" required={true}
                                                                   value={this.state.firstName} style={{width: "100%"}}
                                                                   onChange={(event => this.setState({firstName: event.target.value}))} />
                                                        </div>
                                                    </Col>

                                                    <Col>
                                                        <div className={"form-group"}>
                                                            <label>Last Name:</label>
                                                            <input className="form-control" type="text" required={true}
                                                                   value={this.state.lastName} style={{width: "100%"}}
                                                                   onChange={(event => this.setState({lastName: event.target.value}))} />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>

                                        <Row className="justify-content-center">
                                            <Col className={"col-10"}>
                                                <Row>
                                                    <Col>
                                                        <div className={"form-group"}>
                                                            <label>Email:</label>
                                                            <input className="form-control" type="text" required={true}
                                                                   value={this.state.email} style={{width: "100%"}}
                                                                   onChange={(event => this.setState({email: event.target.value}))} />
                                                        </div>
                                                    </Col>

                                                    <Col>
                                                        <div className={"form-group"}>
                                                            <label>Phone #:</label>
                                                            <input className="form-control" type="text"
                                                                   value={this.state.phoneNum} style={{width: "100%"}}
                                                                   onChange={(event => this.setState({phoneNum: event.target.value}))} />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>

                                        <Row className="justify-content-center">
                                            <Col className={"col-10"}>
                                                <div className={"form-group"}>
                                                    <label>Message:</label>

                                                    <textarea className="form-control" required={true}
                                                              value={this.state.message} style={{width: "100%"}}
                                                              onChange={(event => this.setState({message: event.target.value}))} />
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row className="justify-content-center">
                                            <Col>
                                                <input type={"submit"} className="btn"
                                                       style={{backgroundColor: "white", color: "29405B", width: "25%"}} value={"Submit"} />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </form>
            </>
        );
    }
}

export default ContactUs;