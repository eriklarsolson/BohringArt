import React, {useState} from 'react'
import {useDrop} from 'react-dnd'
import { Square } from './Square'
import {
    canMoveComponent,
    moveComponent,
    setCurrentComponent,
    setCurrentComponentsRotation
} from './Functionality'
import { ComponentTypes } from '../../shared/models/ComponentTypes'
import { ColorOverlay } from './ColorOverlay'
import {DragItem} from "../../shared/models/DragItem";
import rotate from "./components/images/rotate.png";
import {start} from "repl";

export interface GridSquareProps {
    x: number
    y: number
    components: any
    children: any
    showGrid: boolean
    currentComponent: any
}

export const GridSquare: React.FC<GridSquareProps> = ({x, y, children, showGrid, currentComponent}) => {
    let startingRotateDeg = 0
    if(currentComponent !== undefined) {
        startingRotateDeg = currentComponent.rotateDeg;
    }
    const [rotateDeg, setRotateDeg] = useState<number>(startingRotateDeg)

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

    const clickRotate = () => {
        console.log("Rotate deg: " + rotateDeg)
        if (rotateDeg + 90 === 360) {
            setRotateDeg(0)
            setCurrentComponentsRotation(0)
        } else {
            setRotateDeg(rotateDeg + 90)
            setCurrentComponentsRotation(rotateDeg + 90)
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

            <Square clicked={clicked} showGrid={showGrid}>
                {currentComponent !== undefined && currentComponent.x === x && currentComponent.y === y ?
                    <div style={{transform: "rotate(" + currentComponent.rotateDeg + "deg)"}}>
                        {children}
                    </div>
                    :
                    <div>{children}</div>
                }
            </Square>
            {isOver && !canDrop && <ColorOverlay color="red" />}
            {!isOver && canDrop && <ColorOverlay color="yellow" />}
            {isOver && canDrop && <ColorOverlay color="green" />}
        </div>
    )
}
