import {TelescopeTypes} from "../../shared/models/TelescopeTypes";

let observers: PositionObserver[] = []
export type PositionObserver = ((component: {x: number, y: number, type: string, rotateDeg: number}) => void) | null
let currentComponent = 0;
let currentX = -1;
let currentY = -1;
let components: { x: number; y: number; type: string, rotateDeg: number}[] =  []

export function getComponents(): any {
    return components;
}

export function getCurrentComponent(): any {
    return components[currentComponent];
}

export function setCurrentComponent(x: number, y: number) {
    currentX = x;
    currentY = y;

    console.log(currentX)
    console.log(currentY)

    const samePlaceComponents = components.filter(component => component.x === x && component.y === y)
    if(samePlaceComponents.length > 0) {
        currentComponent = getIndex(samePlaceComponents[0], components);
    }

    emitChange();
}

export function deleteCurrentComponent() {
    components.splice(currentComponent, 1);
    currentComponent = currentComponent - 1
    emitChange();
}

export function setCurrentComponentsRotation(rotateDeg: number) {
    if (components.length > 0) {
        components[currentComponent].rotateDeg = rotateDeg;
        console.log(components[currentComponent])
        emitChange();
    }
}

export function resetPositions() {
    currentX = -1;
    currentY = -1;
}

function emitChange() {
    observers.forEach((o) => o && o(components[currentComponent]))
}

export function observe(o: PositionObserver): () => void {
    observers.push(o)
    emitChange()

    return (): void => {
        observers = observers.filter((t) => t !== o)
    }
}

//TODO - Occasionally can't put in position 0,0 if other object is there. Tried different logic with return statement
// before but breaks app (can't move existing comps), so coming back later
export function canMoveComponent(toX: number, toY: number): boolean {
    if(components.length ===  0) {
        const x = 0
        const y = 0
        const dx = toX - x
        const dy = toY - y

        //Can move anywhere on grid
        return (Math.abs(dx) >= 0 || Math.abs(dy) >= 0)
    } else {
        const x = components[currentComponent].x
        const y = components[currentComponent].y
        const dx = toX - x
        const dy = toY - y


        //Can move anywhere on grid
        return (Math.abs(dx) > 0 || Math.abs(dy) > 0)
    }
}

export function getIndex(value: any, arr: string | any[]) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            return i;
        }
    }
    return -1; //to handle the case where the value doesn't exist
}

export function moveComponent(toX: number, toY: number, type: string): void {
    const samePlaceComponents = components.filter(component => component.x === toX && component.y === toY);

    if(samePlaceComponents.length > 0) {
        const index = getIndex(samePlaceComponents[0], components);
        components[index] = {x: toX, y: toY, type: type, rotateDeg: components[currentComponent].rotateDeg}

        //TODO - If you select an object on grid, and then drag from side bar to delete another grid space, it deletes the object you also had selected previously
        components.splice(currentComponent, 1);
    } else {
        if(components[currentComponent] !== undefined) {
            components.push({
                x: toX,
                y: toY,
                type: type,
                rotateDeg: components[currentComponent].rotateDeg
            });
        } else {
            components.push({
                x: toX,
                y: toY,
                type: type,
                rotateDeg: 0
            });
        }

        if(currentX !== -1 && currentY !== -1) {
            components.splice(currentComponent, 1);
        }
    }

    currentComponent = components.length - 1;

    emitChange();
}

//TODO - Eventually, this laser will have to encounter the right edge of telescope and start coming backwards to interact with mirrors facing backwards
// before ending up in piece above first grid space (goal)
export function generatePaths(): string[] {
    let stringPath1 = "M0 250"; //NOTE: First val is x, second is y (y from top, so 300 down I believe?)
    let stringPath2 = "M0 350";
    let stringPath3 = "M0 450";

    //Initial straight line to get to first grid square
    let xPos = 190
    let yPos1 = 250
    let yPos2 = 350
    let yPos3 = 450

    stringPath1 += " L" + xPos + " " + yPos1
    stringPath2 += " L" + xPos + " " + yPos2
    stringPath3 += " L" + xPos + " " + yPos3

    let xChange = 0;
    let yChange = 0;

    for(let i = 0; i < 5; i++) {
        const component = components[i];

        if(component !== undefined) {
            console.log(component.type)
            console.log(component.rotateDeg)

            xChange = 0;
            yChange = 0;

            //Check if piece is facing away from you, (so pass through going straight)
            if (component.rotateDeg !== 0 && component.rotateDeg !== 45 && component.rotateDeg !== 315) {
                xChange = 200
            } else {
                //TODO - Check rotation here as well (if doesnt' fail above)
                // ALSO Some pieces are technically supposed to make the piece reflect backwards, so do we go backwards in array to interact with last piece????????
                if (component.type === TelescopeTypes.CONCAVE) {
                    xChange = 150
                    yChange = 10
                } else if (component.type === TelescopeTypes.CONVEX) {
                    xChange = 150
                    yChange = 80
                } else if (component.type === TelescopeTypes.FLATMIRROR) { //NOTE: Notice the minuses here for testing
                    xChange = 150
                    yChange = -80
                } else if (component.type === TelescopeTypes.VIEWPOINT) {
                    xChange = 150
                    yChange = 25
                }
            }
        } else {
            //If no component found in grid square, just go straight to next grid square
            xChange = 200;
            yChange = 0;
        }

        xPos += xChange / 2;
        //TODO
        yPos1 += yChange;
        yPos2 += yChange;
        yPos3 += yChange;

        stringPath1 += " L" + xPos + " " + yPos1
        stringPath2 += " L" + xPos + " " + yPos2
        stringPath3 += " L" + xPos + " " + yPos3
        console.log(stringPath1)

        xPos += xChange / 2;
        //TODO
        yPos1 -= yChange;
        yPos2 -= yChange;
        yPos3 -= yChange;

        stringPath1 += " L" + xPos + " " + yPos1
        stringPath2 += " L" + xPos + " " + yPos2
        stringPath3 += " L" + xPos + " " + yPos3
        console.log(stringPath1)

        console.log("---------")
    }

    return [stringPath1, stringPath2, stringPath3]
}

export function setComponentsList(newComponents: any): void {
    components = newComponents
    emitChange()
}