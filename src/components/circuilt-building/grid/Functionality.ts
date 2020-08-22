import {ComponentTypes} from "../../shared/models/ComponentTypes";

let observers: PositionObserver[] = []
export type PositionObserver = ((component: {x: number, y: number, type: string, voltage: number, rotateDeg: number, }) => void) | null

//TODO - what new fields are needed for activity to work?
// 1. componentType used for wires (straight, corner, 3-4 prong) & switch (toggle on/off)
// 2.

let currentComponent = 0;
let currentLevel = 0;
let passed = false;
let currentX = -1;
let currentY = -1;
let components: { x: number; y: number; type: string, voltage: number, rotateDeg: number}[] =  []

export function getComponents(): any {
    return components;
}

export function getCurrentComponent(): any {
    return components[currentComponent];
}

export function deleteCurrentComponent() {
    components.splice(currentComponent, 1);
    currentComponent = currentComponent - 1
    emitChange();
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

export function setCurrentComponentsVoltage(voltage: number) {
    if (components.length > 0) {
        components[currentComponent].voltage = voltage;
        emitChange();
    }
}
export function getTotalVoltage(): number {
    let total = 0;

    for(var i = 0; i < components.length; i++) {
        total += components[i].voltage
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
    if(samePlaceComponents.length > 0) {
        const index = getIndex(samePlaceComponents[0], components);
        currentComponent = index;
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
        components.splice(currentComponent, 1);
        const index = getIndex(samePlaceComponents[0], components);
        components[index] = {x: toX, y: toY, type: type, voltage: 0, rotateDeg: 0}
    } else {
        //TODO - Need to make this only delete the old object if dragging and dropping from grid, not from comps on side bar
        // components.splice(currentComponent, 1);
        if(currentX !== -1 && currentY !== -1) {
            components.splice(currentComponent, 1);
        }
        components.push({x: toX, y: toY, type: type, voltage: 0, rotateDeg: 0});
    }

    currentComponent = components.length - 1;

    checkIfPassed();

    emitChange();
}

//TODO - Properties of objects
// NOTE: Can resistance just be negative voltage?
// Battery
//  1. Can change voltage here
//  2. If batteries place directly next to each other in same direction, voltages add up
//  3. If batteries placed in parallel, voltage stays same but currents add up
// Resistor -> NEED EXPLANATION ON THIS!
//  1. Slows down electrons (decrease voltage) Set voltage to -1 on these
//  2. When put in series, resistances are just added normally
//  3. When put in parallel, resistances are added inversely. Take the inverse of each resistance, add it up,
//      and then take the inverse of the sum. The total resistance will be less than each individual one.
//  4. CAN CHANGE RESISTANCE HERE SO NEED NEW SLIDER
// Capacitor
//  1. Stores electricity (for a certain time, so time component needed - great)
//  2. In series, capacitance is added using inverse rule
//  3. Put in parallel, capacitances are added normally, but the voltage would add together to produce the total voltage from the battery
//  4. Can change voltage here I believe
// Inductor
//  1. Useful in resisting additional flow of current initially (Requires another time component, yay)
//  2. CAN CHANGE RESISTANCE HERE SO NEED NEW SLIDER
// Switch
//  1. Can toggle on and off to disable/enable circuit

//Check if you short circuited the board
//TODO
// Current list of things to check for:
//  1. Check if circuit is only wires and battery and if so, short-circuit
//  2. If two batteries in parallel not same voltage, short circuit
//  3.
function checkAcceptance() {

}

function checkIfPassed(): void {
    const passingLevel: { x: number; y: number; type: string, voltage: number, rotateDeg: number}[] = getCurrentLevelPass()

    console.log(components)
    console.log(passingLevel)

    //TODO - Doesn't work
    if(passingLevel.every(v => components.includes(v))) {
        passed = true;
    }
}

function getCurrentLevelPass(): any {
    if(currentLevel === 0) {
        let components: { x: number; y: number; type: string, voltage: number, rotateDeg: number}[] =  []
        components.push({x: 0, y: 0, type: ComponentTypes.BATTERY, voltage: 0, rotateDeg: 0})
        return components
    } else if(currentLevel === 1) {
        let components: { x: number; y: number; type: string, voltage: number, rotateDeg: number}[] =  []
        components.push({x: 0, y: 0, type: ComponentTypes.BATTERY, voltage: 0, rotateDeg: 0})
        return components
    } else if(currentLevel === 2) {
        let components: { x: number; y: number; type: string, voltage: number, rotateDeg: number}[] =  []
        components.push({x: 0, y: 0, type: ComponentTypes.BATTERY, voltage: 0, rotateDeg: 0})
        return components
    }

    return []
}

