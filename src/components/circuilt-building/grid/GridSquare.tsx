import React, {useState} from 'react'
import {DragSourceMonitor, useDrag, useDrop} from 'react-dnd'
import { Square } from './Square'
import {canMoveComponent, getCurrentX, getCurrentY, moveComponent, setCurrentComponent} from './Functionality'
import { ComponentTypes } from '../../shared/models/ComponentTypes'
import { ColorOverlay } from './ColorOverlay'
import {DragItem} from "../../shared/models/DragItem";
import rotate from "./components/images/rotate.png";

export interface GridSquareProps {
    x: number
    y: number
    components: any
    children: any
    showGrid: boolean
    currentComponent: any
}

export const GridSquare: React.FC<GridSquareProps> = ({x, y, children, showGrid, currentComponent}) => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: [ComponentTypes.WIRE, ComponentTypes.BATTERY, ComponentTypes.RESISTOR
            ,ComponentTypes.SWITCH , ComponentTypes.INDUCTOR , ComponentTypes.CAPACITOR],
        canDrop: () => canMoveComponent(x, y),
        drop: (item: DragItem) => moveComponent(x, y, item.type),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    })

    let gridStyling: React.CSSProperties  = {
        position: 'relative',
        width: '100%',
        height: '100%',
    };

    let clicked = false;
    if(currentComponent !== undefined && currentComponent.x === x && currentComponent.y === y) {
        clicked = true;
    }

    const [rotateDeg, setRotateDeg] = useState<number>(0)
    const clickRotate = () => {
        if(rotateDeg + 90 > 360) {
            setRotateDeg(0)
        } else {
            setRotateDeg(rotateDeg+90)
        }
    }

    return (
        <div
            ref={drop}
            style={gridStyling}
            onMouseDown={() => setCurrentComponent(x, y)}>
            {children.length > 0 && clicked &&
                <div style={{position: "absolute", top: -35, right: -10, marginTop: 1, marginRight: 1}}>
                    <img src={rotate} onClick={clickRotate} />
                </div>
            }

            <Square rotateDeg={rotateDeg} clicked={clicked} showGrid={showGrid}>{children}</Square>
            {isOver && !canDrop && <ColorOverlay color="red" />}
            {!isOver && canDrop && <ColorOverlay color="yellow" />}
            {isOver && canDrop && <ColorOverlay color="green" />}
        </div>
    )
}
