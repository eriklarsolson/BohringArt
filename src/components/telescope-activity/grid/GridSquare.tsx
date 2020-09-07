import React, {useState} from 'react'
import {useDrop} from 'react-dnd'
import { Square } from './Square'
import {canMoveComponent, moveComponent, setCurrentComponent, setCurrentComponentsRotation} from './Functionality'
import { ColorOverlay } from './ColorOverlay'
import {DragItem} from "../../shared/models/DragItem";
import {TelescopeTypes} from "../../shared/models/TelescopeTypes";
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
        accept: [TelescopeTypes.CONCAVE, TelescopeTypes.CONVEX, TelescopeTypes.VIEWPOINT, TelescopeTypes.FLATMIRROR],
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

    return (
        <div
            ref={drop}
            style={{...gridStyling}}
            onMouseDown={() => setCurrentComponent(x, y)}>

            <Square clicked={clicked} showGrid={showGrid}>
                <div style={{height: "100%"}}>{children}</div>
            </Square>
            {isOver && !canDrop && <ColorOverlay color="red" />}
            {!isOver && canDrop && <ColorOverlay color="yellow" />}
            {isOver && canDrop && <ColorOverlay color="green" />}
        </div>
    )
}
