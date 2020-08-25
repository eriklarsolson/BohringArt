import React, {useState} from 'react'
import {Col, Container, Row} from "react-bootstrap";
import lasercomponenticon from "./images/laser_COMPONENT.png";
import optics from "./images/optics.png";
import prism from "./images/prism.png";
import {TOOL_LASER, TOOL_OPTICS, TOOL_PRISM} from "./Sidebar";

export interface Props {
    tool: string
    toolToShow: any
    setTool: any
    title: string
    description: string
}

export const SidebarModule: React.FC<Props> = ({tool, toolToShow, setTool, title, description}) => {
    const [rightValue, setRightValue] = useState<number>(0)
    const [zIndex, setZIndex] = useState<number>(-1)
    const [tooltipShowing, setTooltipShowing] = useState<boolean>(false)

    let tooltipStyle: React.CSSProperties = {
        position: "absolute",
        right: rightValue,
        top: 0,
        width: 300,
        height: "auto",
        minHeight: 100,
        backgroundColor: "rgba(82, 82, 82, 0.9)",
        transition: ".3s ease-in-out",
        zIndex: zIndex,
        textAlign: "left",
    }

    const showTooltip = () => {
        if(tooltipShowing) {
            setRightValue(0)
            setZIndex(-1)
            setTooltipShowing(false)
        } else {
            setRightValue(-295)
            setZIndex(1)
            setTooltipShowing(true)
        }
    }

    const hideTooltip = () => {
        setRightValue(0)
        setZIndex(-1)
        setTooltipShowing(false)
    }

    const getToolImage = () => {
        if (toolToShow === TOOL_LASER) {
            return lasercomponenticon
        } else if (toolToShow === TOOL_OPTICS) {
            return optics
        } else if (toolToShow === TOOL_PRISM) {
            return prism
        }
    }

    return (
        <>

            <Col className={"col-8"} style={{backgroundColor: "white"}}
                 onMouseOver={showTooltip} onMouseOut={hideTooltip}>
                <img src={getToolImage()}
                     style={{width: "100px", height: "100px"}}
                     className={tool === toolToShow  ? 'item-active' : 'item'}
                     onClick={() => setTool(toolToShow)} />

                <div style={tooltipStyle}>
                    <Container fluid>
                        <Row style={{padding: 0}}>
                            <p style={{fontWeight: "bold", margin: 0}}>{title}</p>
                        </Row>
                        <Row style={{padding: 0}}>
                            {description}
                        </Row>
                    </Container>
                </div>
            </Col>
        </>
    )
}
