import React, {useState, useEffect} from 'react'
import {getComponents, moveComponent, observe} from './Functionality'
import {TelescopeGrid} from "./TelescopeGrid";
import {Container, Row, Col} from "react-bootstrap";
import {ComponentTypes} from "../../shared/models/ComponentTypes";
import {TelescopeTypes} from "../../shared/models/TelescopeTypes";

const containerStyle: React.CSSProperties = {
    marginTop: 200,
    width: 750,
    height: 150,
}

export interface GridContainerProps {
    showGrid: boolean,
}

export const TelescopeGridContainer: React.FC<GridContainerProps> = ({showGrid}) => {

    //I don't actually use this currentComp variable, but I need the useEffect on observe below and it's working right now
    //and I don't want to change it
    const [currentComp, setCurrentComp] = useState<{x: number, y: number, type: string, rotateDeg: number}>(
        {x: 0, y: 0, type: TelescopeTypes.CONCAVE, rotateDeg: 0})

    useEffect(() => observe((component: any) => setCurrentComp(component)))

    return (
        <>
            <Container fluid>
                <Row className={"justify-content-center align-content-center align-items-center"}>
                    <Col style={{padding: "0", margin: "0"}}>
                        <div className={"d-flex justify-content-center align-content-center"}>
                            <div style={containerStyle}>
                                <TelescopeGrid components={getComponents()} showGrid={showGrid} currentComponent={currentComp} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
