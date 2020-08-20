import React, {useState} from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'
import { ComponentTypes } from '../../../shared/models/ComponentTypes'
import wire from './images/wire.png'
import rotate from './images/rotate.png'
import { Container, Row, Col } from 'react-bootstrap'

let style: React.CSSProperties = {
    cursor: 'move',
}
export interface ComponentProps {
    oneGridStyling: boolean,
}

export const Wire: React.FC<ComponentProps> = ({oneGridStyling}) => {

    const setMonitor = (monitor: any) => {
        return monitor.isDragging()
    }

    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: ComponentTypes.WIRE },
        collect: (monitor) => ({
            isDragging: setMonitor(monitor),
        }),

    })

    let gridStyling: React.CSSProperties  = {};
    const setGridStyling = () => {
        if(!oneGridStyling) {
            gridStyling = {
                padding: 0,
                marginTop: 5
            }
        }
    }
    setGridStyling();

    return (
        <>
            <DragPreviewImage connect={preview} src={wire} />
            <Container fluid style={{...gridStyling}}>
                <Row className={"justify-content-center align-content-center"}>
                    <Col ref={drag}
                         style={{
                             ...style,
                             opacity: isDragging ? 0.5 : 1,
                         }}>
                        {/*TODO - add rotate to button style={{transform: "rotate(90deg)"}} */}
                        <img src={wire} width={"90%"} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
