import React, {useState} from 'react'
import {DragSourceMonitor, useDrag, useDrop} from 'react-dnd'
import { Square } from './Square'
import {canMoveComponent, moveComponent, setCurrentComponent} from './Functionality'
import { ColorOverlay } from './ColorOverlay'
import {DragItem} from "../../shared/models/DragItem";
import {TelescopeTypes} from "../../shared/models/TelescopeTypes";

export interface GridSquareProps {
    x: number
    y: number
    components: any
    children: any
}

export const GridSquare: React.FC<GridSquareProps> = ({x, y, children}: GridSquareProps) => {


    const [{ isOver, canDrop }, drop] = useDrop({
        accept: [TelescopeTypes.CONCAVE, TelescopeTypes.CONVEX, TelescopeTypes.VIEWPOINT, TelescopeTypes.FLATMIRROR],
        canDrop: () => canMoveComponent(x, y),
        drop: (item: DragItem) => moveComponent(x, y, item.type),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    })

    //TODO Add border around selected piece
    let gridStyling: React.CSSProperties  = {
        position: 'relative',
        width: '100%',
        height: '100%',
    };

    return (
        <div
            ref={drop}
            style={{...gridStyling}}
            onMouseDown={() => setCurrentComponent(x, y)}
        >
            <Square>{children}</Square>
            {isOver && !canDrop && <ColorOverlay color="red" />}
            {!isOver && canDrop && <ColorOverlay color="yellow" />}
            {isOver && canDrop && <ColorOverlay color="green" />}
        </div>
    )
}
