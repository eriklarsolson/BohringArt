import {TelescopeTypes} from "../../shared/models/TelescopeTypes";
import {hasCircuit} from "../../circuilt-building/grid/Functionality";

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

export function getComponentAtPos(x: number, y: number) {
    return components.filter(component => component.x === x && component.y === y)[0];
}

export function getIndex(value: any, arr: string | any[]) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            return i;
        }
    }
    return -1; //to handle the case where the value doesn't exist
}

function getComponentsFromRow(row: number) {
    const samePlaceComponents = components.filter(component => component.y === row);

    if(row === 0) {
        const lastComponent = samePlaceComponents[samePlaceComponents.length - 1];
        console.log(lastComponent)
        // samePlaceComponents.splice(lastComponent, 1)
    }

    console.log(samePlaceComponents)

    return samePlaceComponents;
}

export function moveComponent(toX: number, toY: number, type: string): void {
    // const samePlaceComponents = components.filter(component => component.x === toX && component.y === toY);
    //
    // if(samePlaceComponents.length > 0) {
    //     const index = getIndex(samePlaceComponents[0], components);
    //     components[index] = {x: toX, y: toY, type: type, rotateDeg: components[currentComponent].rotateDeg}
    //
    //     //TODO - If you select an object on grid, and then drag from side bar to delete another grid space, it deletes the object you also had selected previously
    //     components.splice(currentComponent, 1);
    // } else {
    //     if(components[currentComponent] !== undefined) {
    //         components.push({
    //             x: toX,
    //             y: toY,
    //             type: type,
    //             rotateDeg: components[currentComponent].rotateDeg
    //         });
    //     } else {
    //         components.push({
    //             x: toX,
    //             y: toY,
    //             type: type,
    //             rotateDeg: 0
    //         });
    //     }
    //
    //     if(currentX !== -1 && currentY !== -1) {
    //         components.splice(currentComponent, 1);
    //     }
    // }
    //
    // currentComponent = components.length - 1;
    //
    // emitChange();

    const samePlaceComponents = components.filter(component => component.x === toX && component.y === toY);

    //TODO - Need to test to make sure this is working fully!
    // Note: It is not right now though, crashes after turning switch off and moving it
    if(components.length === 0) {
        components.push({
            x: toX,
            y: toY,
            type: type,
            rotateDeg: 180,
        });
    } else {
        if (samePlaceComponents.length > 0) {
            const index = getIndex(samePlaceComponents[0], components);
            components[index] = {
                x: toX,
                y: toY,
                type: type,
                rotateDeg: components[currentComponent].rotateDeg,
            }

            components.splice(currentComponent, 1);
        } else {
            components.push({
                x: toX,
                y: toY,
                type: type,
                rotateDeg: components[currentComponent].rotateDeg,
            });

            if (currentX !== -1 && currentY !== -1) {
                components.splice(currentComponent, 1);
            }
        }
    }

    currentComponent = components.length - 1;

    emitChange();

}

//TODO - Eventually, this laser will have to encounter the right edge of telescope and start coming backwards to interact with mirrors facing backwards
// before ending up in piece above first grid space (goal)
export function generatePaths(): string[] {
    let stringPath1 = "M0 230"; //NOTE: First val is x, second is y (y from top, so 300 down I believe?)
    let stringPath2 = "M0 330";
    let stringPath3 = "M0 430";

    //Initial straight line to get to first grid square
    let xPos1 = 250
    let xPos2 = 250
    let xPos3 = 250
    let yPos1 = 230
    let yPos2 = 330
    let yPos3 = 430

    stringPath1 += " L" + xPos1 + " " + yPos1
    stringPath2 += " L" + xPos2 + " " + yPos2
    stringPath3 += " L" + xPos3 + " " + yPos3

    let xChange1 = 0;
    let yChange1 = 0;
    let xChange2 = 0;
    let yChange2 = 0;
    let xChange3 = 0;
    let yChange3 = 0;

    for(let stringIndex = 0; stringIndex < 3; stringIndex++) {

        let i = 0;
        while(i <= 3) {

            //TOP LASER
            if(stringIndex === 0) {
                //TODO - Need to not just get componentsOnRow because the laser will get that component first (regardless of position)
                // and interact with it at beginning. I need to loop through each component spot on row (and get component at that x y position)
                // If not piece found, then move forward, but interact only at that spot if piece found
                const componentsOnRow = getComponentsFromRow(0);
                const component = componentsOnRow[i];

                if(component !== undefined) {
                    xChange1 = 0;
                    yChange1 = 0;

                    // //Check if piece is facing away from you, (so pass through going straight)
                    // if (component.rotateDeg !== 180 && component.rotateDeg !== 45 && component.rotateDeg !== 315) {
                    //     xChange1 = 200
                    //     i += 1
                    // } else {
                        if (component.type === TelescopeTypes.CONCAVE) {
                            xChange1 = 150
                            yChange1 = 10
                            i += 1
                        } else if (component.type === TelescopeTypes.CONVEX) {
                            xChange1 = 150
                            yChange1 = 80
                            i += 1
                        } else if (component.type === TelescopeTypes.FLATMIRROR) { //NOTE: Notice the minuses here for testing
                            xChange1 = -50
                            yChange1 = 0
                            //TODO - Needs to go to last grid square and interact with last piece as this will bounce it backwards
                            i = 5
                        } else if (component.type === TelescopeTypes.VIEWPOINT) {
                            xChange1 = 150
                            yChange1 = 25
                            i += 1
                        }
                    // }
                } else {
                    //If no component found in grid square, just go straight to next grid square
                    xChange1 = 200;
                    yChange1 = 0;
                    i += 1
                }

                xPos1 += xChange1 / 2;
                yPos1 += yChange1;

                stringPath1 += " L" + xPos1 + " " + yPos1
                console.log(stringPath1)

                xPos1 += xChange1 / 2;
                yPos1 -= yChange1;

                stringPath1 += " L" + xPos1 + " " + yPos1
                console.log(stringPath1)

                console.log("---------")
            } else if(stringIndex === 1) {
                const componentsOnRow = getComponentsFromRow(1);
                const component = componentsOnRow[i];

                if(component !== undefined) {
                    xChange2 = 0;
                    yChange2 = 0;

                    //Check if piece is facing away from you, (so pass through going straight)
                    // if (component.rotateDeg !== 0 && component.rotateDeg !== 45 && component.rotateDeg !== 315) {
                    //     xChange2 = 200
                    //     i += 1
                    // } else {
                        if (component.type === TelescopeTypes.CONCAVE) {
                            xChange2 = 150
                            yChange2 = 25
                            i += 1
                        } else if (component.type === TelescopeTypes.CONVEX) {
                            xChange2 = 150
                            yChange2 = 80
                            i += 1
                        } else if (component.type === TelescopeTypes.FLATMIRROR) { //NOTE: Notice the minuses here for testing
                            xChange2 = -150
                            yChange2 = 0
                            i = 5
                            //TODO - Needs to go to last grid square and interact with last piece as this will bounce it backwards
                        } else if (component.type === TelescopeTypes.VIEWPOINT) {
                            xChange2 = 150
                            yChange2 = 25
                            i += 1
                        }
                    // }
                } else {
                    //If no component found in grid square, just go straight to next grid square
                    xChange2 = 200;
                    yChange2 = 0;
                    i += 1
                }


                xPos2 += xChange2 / 2;
                yPos2 += yChange2;

                stringPath2 += " L" + xPos2 + " " + yPos2

                xPos2 += xChange2 / 2;
                yPos2 -= yChange2;

                stringPath2 += " L" + xPos2 + " " + yPos2
            } else if(stringIndex === 2) {
                const componentsOnRow = getComponentsFromRow(2);
                const component = componentsOnRow[i];

                if(component !== undefined) {
                    xChange3 = 0;
                    yChange3 = 0;

                    //Check if piece is facing away from you, (so pass through going straight)
                    // if (component.rotateDeg !== 0 && component.rotateDeg !== 45 && component.rotateDeg !== 315) {
                    //     xChange3 = 200
                    // } else {
                        if (component.type === TelescopeTypes.CONCAVE) {
                            xChange3 = 150
                            yChange3 = 45
                            i += 1
                        } else if (component.type === TelescopeTypes.CONVEX) {
                            xChange3 = 150
                            yChange3 = 80
                            i += 1
                        } else if (component.type === TelescopeTypes.FLATMIRROR) { //NOTE: Notice the minuses here for testing
                            xChange3 = -50
                            yChange3 = 0
                            i = 5
                            //TODO - Needs to go to last grid square and interact with last piece as this will bounce it backwards
                        } else if (component.type === TelescopeTypes.VIEWPOINT) {
                            xChange3 = 150
                            yChange3 = 25
                            i += 1
                        }
                    // }
                } else {
                    //If no component found in grid square, just go straight to next grid square
                    xChange3 = 200;
                    yChange3 = 0;
                    i += 1
                }

                xPos3 += xChange3 / 2;
                yPos3 += yChange3;

                stringPath3 += " L" + xPos3 + " " + yPos3

                xPos3 += xChange3 / 2;
                yPos3 -= yChange3;

                stringPath3 += " L" + xPos3 + " " + yPos3
            }
        }
    }

    //TODO - Handle the last grid square here (the big one) for all three lasers


    //TODO - Start interacting with pieces as we go backwards through grid


    return [stringPath1, stringPath2, stringPath3]
}

export function setComponentsList(newComponents: any): void {
    components = newComponents
    emitChange()
}