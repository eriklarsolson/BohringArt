import React, {useState} from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'
import { ComponentTypes } from '../../../shared/models/ComponentTypes'
import resistor from './images/resistor.png'
import rotate from './images/rotate.png'
import { Container, Row, Col } from 'react-bootstrap'
import {getComponentAtPos} from "../Functionality";

let style: React.CSSProperties = {
    cursor: 'move',
}
export interface ComponentProps {
    oneGridStyling: boolean,
    x: number,
    y: number,
    currentComponent: any
}

export const Resistor: React.FC<ComponentProps> = ({x, y, oneGridStyling, currentComponent}) => {
    //Set rotation degree of the image below if there is a component here (could be any component or currently selected one)
    let startingRotateDeg = 0
    const componentAtThisPosition = getComponentAtPos(x, y)

    if(componentAtThisPosition !== currentComponent) {
        if(componentAtThisPosition !== undefined) {
            startingRotateDeg = componentAtThisPosition.rotateDeg;
        }
    } else {
        if(componentAtThisPosition !== undefined) {
            startingRotateDeg = currentComponent.rotateDeg;
        }
    }

    const [rotateDeg, setRotateDeg] = useState<number>(startingRotateDeg)

    let gridStyling: React.CSSProperties  = {height: "100%"};
    if(!oneGridStyling) {
        gridStyling = {
            padding: 0,
        }
    }

    const setMonitor = (monitor: any) => {
        return monitor.isDragging()
    }

    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: ComponentTypes.RESISTOR },
        collect: (monitor) => ({
            isDragging: setMonitor(monitor),
        }),

    })

    return (
        <>
            <DragPreviewImage connect={preview} src={resistor} />
            <Container fluid style={{...gridStyling}}>
                <Row className={"justify-content-center align-content-center"}>
                    <Col ref={drag}
                         style={{
                             ...style,
                             opacity: isDragging ? 0.5 : 1,
                         }}>
                        <img src={resistor} width={"90%"} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
