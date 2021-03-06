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
    flex: string
    maxWidth: string
}

export const SidebarModule: React.FC<Props> = ({tool, toolToShow, setTool, title, description, flex, maxWidth}) => {
    const [rightValue, setRightValue] = useState<string>("0%")
    const [zIndex, setZIndex] = useState<number>(-1)
    const [tooltipShowing, setTooltipShowing] = useState<boolean>(false)

    let tooltipStyle: React.CSSProperties = {
        position: "absolute",
        left: rightValue,
        top: 0,
        width: 400,
        height: "auto",
        minHeight: 100,
        backgroundColor: "rgba(82, 82, 82, 0.9)",
        transition: ".3s ease-in-out",
        zIndex: zIndex,
        textAlign: "left",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 4% 100%)"
    }

    const showTooltip = () => {
        if(tooltipShowing) {
            setRightValue("0%")
            setZIndex(-1)
            setTooltipShowing(false)
        } else {
            setRightValue("90%")
            setZIndex(1)
            setTooltipShowing(true)
        }
    }

    const hideTooltip = () => {
        setRightValue("0%")
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
            <Col className={"col-10"} style={{backgroundColor: "transparent", flex: flex, maxWidth: maxWidth, minWidth: 150}}
                 onMouseOver={showTooltip} onMouseOut={hideTooltip}>
                <div className={"clickable-image"} style={{backgroundColor: "#F8EDDD", clipPath: "polygon(0 0, 95% 0, 100% 100%, 0 100%)"}}
                     onClick={() => setTool(toolToShow)} >
                    <img alt={"Engraving Tool"} src={getToolImage()}
                         style={{width: "auto", height: "100px", margin: 10}}
                         className={tool === toolToShow  ? 'item-active' : 'item'} />
                </div>

                <div style={tooltipStyle}>
                    <Container fluid style={{margin: 10}}>
                        <Row style={{padding: 0}}>
                            <p style={{fontWeight: "bold", marginLeft: 10}}>{title}</p>
                        </Row>
                        <Row style={{marginLeft: 10, marginRight: 10}}>
                            {description}
                        </Row>
                    </Container>
                </div>
            </Col>
        </>
    )
}
