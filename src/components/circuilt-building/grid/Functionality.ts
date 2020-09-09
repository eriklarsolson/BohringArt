import {ComponentTypes} from "../../shared/models/ComponentTypes";

let observers: PositionObserver[] = []
export type PositionObserver = ((component: {x: number, y: number, type: string, voltage: number, rotateDeg: number, componentType: number}) => void) | null

let currentComponent = 0;
let currentLevel = 0;
let passed = false;
let allSwitchesOn = true;
let boardCurrentIssues: string[] = [] //TODO - Should this be an array of strings instead for multiple issues. Or could I append to this string?
let boardHasIssues = false;
let currentX = -1;
let currentY = -1;
let components: { x: number; y: number; type: string, voltage: number, rotateDeg: number, componentType: number}[] =  []

//TODO - Not a bad idea to store seperate lists of each type of component as well to easily loop through, or just do function and pass in type to return?


//This variable is for wires and switches. If current comp is wire, this is changed with wire arrows to change between
// 3 different types of wires. For switch, it is for on/off status.
let componentType = 0; //Wire -> 0: straight, 1: corner, 3: tri

export function getComponents(): any {
    return components;
}

export function getCurrentComponent(): any {
    return components[currentComponent];
}

//This is for the switch when you click it to turn it off and on
export function setComponentTypeOnClick(type: number) {
    if (components.length > 0) {
        components[currentComponent].componentType = type;
    }
}

export function getAllSwitchesOn() {
    return allSwitchesOn;
}

export function setAllSwitchesOn(status: boolean, x: number, y: number) {

    if(status) {
        const samePlaceComponents = components.filter(component => component.x !== x && component.y !== y &&
            component.type === ComponentTypes.SWITCH && component.componentType === 1)
        console.log(samePlaceComponents)
        if(samePlaceComponents.length > 0) {
            console.log(samePlaceComponents)
            allSwitchesOn = false;
        } else {
            allSwitchesOn = status;
        }
    } else {
        allSwitchesOn = status;
    }
}

//This is for wire, where you use arrows to toggle. Sets what the next component type will be
export function setComponentType(type: number) {
    componentType = type;
}

export function getComponentType() {
    return componentType;
}

export function getBoardHasIssues(): boolean {
    return boardHasIssues;
}

export function getCurrentBoardIssues(): string[] {
    return boardCurrentIssues;
}

export function addBoardIssue(issue: string) {
    boardCurrentIssues.push(issue);
    emitChange()
}

export function setCurrentBoardIssues(issues: string[]) {
    boardCurrentIssues = issues;
}

export function setBoardHasIssue(issue: boolean) {
    boardHasIssues = issue;
}

export function deleteCurrentComponent() {
    components.splice(currentComponent, 1);
    currentComponent = currentComponent - 1

    emitChange();
    hasCircuit();
}

export function getCurrentX(): any {
    return currentX;
}

export function getCurrentY(): any {
    return currentY;
}

export function getPassed() {
    return passed;
}

export function setPassed(passedVal: boolean) {
    passed = passedVal;
}

export function setCurrentComponentsVoltage(voltage: number) {
    if (components.length > 0) {
        components[currentComponent].voltage = voltage;
        emitChange();
        hasCircuit()
    }
}

export function setCurrentComponentsRotation(rotateDeg: number) {
    if (components.length > 0) {
        components[currentComponent].rotateDeg = rotateDeg;
        console.log(components[currentComponent])
        emitChange();
        hasCircuit()
    }
}

export function getComponentAtPos(x: number, y: number) {
    return components.filter(component => component.x === x && component.y === y)[0];
}

export function getTotalVoltage(): number {
    //TODO - Need to pass in components list that only has ones from the circuit, so doesn't count components outside of circuit

    let total = 0;

    for(var i = 0; i < components.length; i++) {
        if(components[i].type === ComponentTypes.BATTERY) {
            total += components[i].voltage
        } else if(components[i].type === ComponentTypes.RESISTOR) {
            total -= components[i].voltage
        }
    }

    return total;
}

export function setCurrentLevel(newLevel: number) {
    currentLevel = newLevel
}

export function setCurrentComponent(x: number, y: number) {
    currentX = x;
    currentY = y;

    const samePlaceComponents = components.filter(component => component.x === x && component.y === y)
    console.log(samePlaceComponents)
    if(samePlaceComponents.length > 0) {
        currentComponent = getIndex(samePlaceComponents[0], components);
        console.log(currentComponent)
        emitChange();
    }
}

export function resetPositions() {
    currentX = -1;
    currentY = -1;
}

export function setComponentsList(newComponents: any): void {
    components = newComponents
    emitChange()
}

export function emitChange() {
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
        //TODO - Can crash here if you delete currentComponent
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

    if(components.length === 0) {
        components.push({
            x: toX,
            y: toY,
            type: type,
            voltage: 0,
            rotateDeg: 0,
            componentType: componentType
        });

    } else {
        if(samePlaceComponents.length > 0) {
            const index = getIndex(samePlaceComponents[0], components);
            components[index] = {
                x: toX,
                y: toY,
                type: type,
                voltage: components[currentComponent].voltage,
                rotateDeg: components[currentComponent].rotateDeg,
                componentType: componentType
            }

            components.splice(currentComponent, 1);
        } else {
            components.push({
                x: toX,
                y: toY,
                type: type,
                voltage: components[currentComponent].voltage,
                rotateDeg: components[currentComponent].rotateDeg,
                componentType: componentType
            });

            if(currentX !== -1 && currentY !== -1) {
                components.splice(currentComponent, 1);
            }
        }

    }

    currentComponent = components.length - 1;

    checkForErrors();
    hasCircuit()
    emitChange();
}

function checkForErrors() {
    //This (inefficient) method loops through each component in the list and finds all components around it
    //TODO - Need to get rid of square from +1 x, +1 y. Only check blocks from right next to components
    for(let i = 0; i < components.length; i++) {
        let componentsAroundCurrent = []
        for(let j = 0; j < components.length; j++) {
            if(components[i] !== components[j]) {
                if ((components[i].x + 1 === components[j].x || components[i].x - 1 === components[j].x || components[i].x === components[j].x) &&
                    (components[i].y + 1 === components[j].y || components[i].y - 1 === components[j].y || components[i].y === components[j].y)) {
                    componentsAroundCurrent.push(components[j])
                }
            }
        }
        console.log("components around: " + componentsAroundCurrent)

        for(let k = 0; k < componentsAroundCurrent.length; k++) {
            if(components[i].type === componentsAroundCurrent[k].type) {
                //TODO - Kinda works - BUT ALSO VERY BROKEN :)
                if(components[i].type === ComponentTypes.BATTERY && componentsAroundCurrent[k].type === ComponentTypes.BATTERY) {
                    if((components[i].rotateDeg % 180) !== (componentsAroundCurrent[k].rotateDeg % 180)) {
                        boardHasIssues = true;
                        if(!boardCurrentIssues.includes("Battery directions not correct")) {
                            boardCurrentIssues.push("Battery directions not correct")

                        }
                        passed = false;
                    }
                }
            }
        }
    }
}

function checkIfPassed(matrix: Array<Array<number>>, visited: Array<Array<boolean>>): void {
    //TODO - So take the matrix and visited variables and loop through to check each component at a time sorted by
    // where they appear in circuit. Might have to create array in hasCircuit() that adds the component if it is the next
    // one found in visited

    const currentTotalVoltage = getTotalVoltage();
    let neededVoltage = 0;

    if(currentTotalVoltage !== 0) {
        //Check here if the circuit only contains wires and batteries
        let boardOnlyContainsWiresAndBatteries = true;
        for(let i = 0; i < components.length; i++) {
            if (components[i].type !== ComponentTypes.WIRE && components[i].type !== ComponentTypes.BATTERY) {
                boardOnlyContainsWiresAndBatteries = false;
            }
        }

        if(boardOnlyContainsWiresAndBatteries) {
            boardHasIssues = true;
            boardCurrentIssues.push("Do not build a circuit that contains only wires and/or batteries!")
            passed = false;
        }

        if(!allSwitchesOn) {
            boardHasIssues = true;
            boardCurrentIssues.push("You have a switch that is turned off")
            passed = false;
        }

        //TODO - Check if all the pieces (especially wires) are in correct type and rotation deg <- THIS IS GOING TO BE THE HARDEST


        //Now that there is a path and you passed all the issues above, then check if you reached successful voltage
        // and other requirements needed for the level (used all needed pieces, etc...)
        //Setting needed voltage depending on level
        if(currentLevel === 0) {
            neededVoltage = 16;
        } else if(currentLevel === 1) {
            neededVoltage = 20;
        } else if(currentLevel === 2) {
            neededVoltage = 60;
        }

        if(neededVoltage === currentTotalVoltage) {
            //TODO


            if(!boardHasIssues) {
                // TODO - I'll need to switch the image of the object we are powering with the circuit to the "powered" version (gif?)
                passed = true;
                emitChange();
            }
        } else {
            passed = false;
        }
    } else {
        boardHasIssues = true;
        boardCurrentIssues.push("You built a circuit, but it has no voltage")
        passed = false;
    }

    emitChange();
}

// Function for finding whether a circuit exists or not
export function hasCircuit() {
    //Build matrix variable here
    let matrix: Array<Array<number>> = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ]

    for(var i = 0; i < components.length; i++) {
        matrix[components[i].y][components[i].x] = 3
    }

    matrix[1][6] = 1
    matrix[4][6] = 2

    // Defining visited array to keep
    // track of already visited indexes
    let visited: Array<Array<boolean>> = [
        [false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false],
    ]

    // Flag to indicate whether the
    // path exists or not
    let flag = false;

    //7 here on j variable for extra column on right side, that holds the beginning and end point for circuit (off the grid)
    for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
        // if matrix[i][j] is source
        // and it is not visited
        if (matrix[i][j] === 1 && !visited[i][j])

            // Starting from i, j and
            // then finding the path
            if (isPath(i, j, visited, matrix)) {
                // if path exists
                flag = true;
                break;
            }
    }
}
    if (flag) {
        console.log("yes there is a path")

        checkIfPassed(matrix, visited)
    } else {
        console.log("no path found brother")
        passed = false;
    }
}

// Method for checking boundaries
function isSafe(i: number, j: number, matrix: Array<Array<number>>) {
    return i >= 0 && i < matrix.length && j >= 0 && j < matrix[0].length;
}

// Returns true if there is a path from a source (a cell with value 1) to a destination (a cell with value 2)
function isPath(i: number, j: number, visited: Array<Array<boolean>>, matrix: Array<Array<number>>) {
    // Checking the boundaries, walls and, whether the cell is unvisited
    if (isSafe(i, j, matrix) && matrix[i][j] !== 0 && !visited[i][j]) {
        // Make the cell visited
        visited[i][j] = true;

        // If the cell is the required destination, then return true
        if (matrix[i][j] === 2) return true;

        const up = isPath(i - 1, j, visited, matrix);
        if (up) return true;

        const left = isPath(i, j - 1, visited, matrix);
        if (left) return true;

        const down = isPath(i + 1, j, visited, matrix);
        if (down) return true;

        const right = isPath(i, j + 1, visited, matrix);
        if (right) return true;
    }

    // No path has been found
    return false;
}

function getComponentsByType(type: string) {
    return components.filter(component => component.type === type);
}

// function getCurrentLevelPass(): any {
//     if(currentLevel === 0) {
//         let components: { x: number; y: number; type: string, voltage: number, rotateDeg: number}[] =  []
//         components.push({x: 0, y: 0, type: ComponentTypes.BATTERY, voltage: 0, rotateDeg: 0})
//         return components
//     } else if(currentLevel === 1) {
//         let components: { x: number; y: number; type: string, voltage: number, rotateDeg: number}[] =  []
//         components.push({x: 0, y: 0, type: ComponentTypes.BATTERY, voltage: 0, rotateDeg: 0})
//         return components
//     } else if(currentLevel === 2) {
//         let components: { x: number; y: number; type: string, voltage: number, rotateDeg: number}[] =  []
//         components.push({x: 0, y: 0, type: ComponentTypes.BATTERY, voltage: 0, rotateDeg: 0})
//         return components
//     }
//
//     return []
// }

