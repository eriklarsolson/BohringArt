import React, {useState, useEffect} from 'react'
import {getComponents, observe} from './Functionality'
import {TelescopeGrid} from "./TelescopeGrid";
import {Container, Row, Col} from "react-bootstrap";
import {TelescopeTypes} from "../../shared/models/TelescopeTypes";
import {GridSquare} from "./GridSquare";
import {Concave} from "./components/Concave";
import {Viewpoint} from "./components/Viewpoint";
import {Convex} from "./components/Convex";
import {FlatMirror} from "./components/FlatMirror";

const containerStyle: React.CSSProperties = {
    marginTop: 190,
    width: 600,
    height: 250,
}

const endContainerStyle: React.CSSProperties = {
    marginTop: 190,
    width: 250,
    height: 250,
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

    function renderPiece(x: number, y: number, compX: number, compY: number, type: string) {
        const isCompHere = x === compX && y === compY
        console.log(getComponents())

        switch (type) {
            case TelescopeTypes.CONCAVE:
                return isCompHere ? <Concave x={x} y={y} currentComponent={currentComp} oneGridStyling={false} /> : null
            case TelescopeTypes.VIEWPOINT:
                return isCompHere ? <Viewpoint x={x} y={y} currentComponent={currentComp} oneGridStyling={false} /> : null
            case TelescopeTypes.CONVEX:
                return isCompHere ? <Convex x={x} y={y} currentComponent={currentComp} oneGridStyling={false} /> : null
            case TelescopeTypes.FLATMIRROR:
                return isCompHere ? <FlatMirror x={x} y={y} currentComponent={currentComp} oneGridStyling={false} /> : null
            default:
                return isCompHere ? <Concave x={x} y={y} currentComponent={currentComp} oneGridStyling={false} /> : null
        }
    }

    return (
        <>
            <Container fluid>
                <Row className={"justify-content-center align-content-center align-items-center"}>
                    <Col style={{padding: 0}}>
                        <div className={"d-flex justify-content-center align-content-center"}>
                            <div style={containerStyle}>
                                <TelescopeGrid components={getComponents()} showGrid={showGrid} currentComponent={currentComp} />
                            </div>
                            <div style={endContainerStyle}>
                                <div style={{width: '100%', height: '100%'}}>
                                    <GridSquare x={4} y={0} components={getComponents()} currentComponent={currentComp} showGrid={showGrid}>
                                        {Object.keys(getComponents()).map((key, index) =>
                                            renderPiece(4, 0, getComponents()[key].x, getComponents()[key].y, getComponents()[key].type,))}
                                    </GridSquare>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
