import React from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'
import viewpoint from './images/viewpoint.png'
import { Container, Row, Col } from 'react-bootstrap'
import {TelescopeTypes} from "../../../shared/models/TelescopeTypes";

let style: React.CSSProperties = {
    cursor: 'move',
}
export interface ComponentProps {
    oneGridStyling: boolean,
}

export const Viewpoint: React.FC<ComponentProps> = ({oneGridStyling}) => {
    const setMonitor = (monitor: any) => {
        return monitor.isDragging()
    }

    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: TelescopeTypes.VIEWPOINT },
        collect: (monitor) => ({
            isDragging: setMonitor(monitor),
        }),

    })

    let gridStyling: React.CSSProperties  = {height: "100%"};
    const setGridStyling = () => {
        if(!oneGridStyling) {
            gridStyling = {
                padding: 0,
                height: "100%"
            }
        }
    }
    setGridStyling();

    return (
        <>
            <DragPreviewImage connect={preview} src={viewpoint} />
            <Container fluid style={{...gridStyling}}>

                <Row className={"justify-content-center align-content-center"} style={{height: "100%"}}>
                    <Col ref={drag}
                         style={{
                             ...style,
                             opacity: isDragging ? 0.5 : 1,
                         }}>
                        <img alt={"Viewpoint"} src={viewpoint} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
