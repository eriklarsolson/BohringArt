import React, {useState} from 'react'
import {DragSourceMonitor, useDrag, useDrop} from 'react-dnd'
import { Square } from './Square'
import {canMoveComponent, getCurrentX, getCurrentY, moveComponent, setCurrentComponent} from './Functionality'
import { ComponentTypes } from '../../shared/models/ComponentTypes'
import { ColorOverlay } from './ColorOverlay'
import {DragItem} from "../../shared/models/DragItem";

export interface GridSquareProps {
    x: number
    y: number
    components: any
    children: any
    showGrid: boolean
}

export const GridSquare: React.FC<GridSquareProps> = ({x, y, children, showGrid}: GridSquareProps) => {
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

    const [clicked, setClicked] = useState<boolean>(false)

    const clickGridSquare = () => {
        setCurrentComponent(x, y)

        if(children.length > 0) {
            setClicked(true)
        }
    }

    //TODO - Doesn't deselect other squares
    // if(getCurrentX() === x && getCurrentY() === y) {
    //     setClicked(true)
    // } else {
    //     setClicked(false)
    // }

    return (
        <div
            ref={drop}
            style={gridStyling}
            onMouseDown={() => clickGridSquare()}
        >
            <Square clicked={clicked} showGrid={showGrid}>{children}</Square>
            {isOver && !canDrop && <ColorOverlay color="red" />}
            {!isOver && canDrop && <ColorOverlay color="yellow" />}
            {isOver && canDrop && <ColorOverlay color="green" />}
        </div>
    )
}
