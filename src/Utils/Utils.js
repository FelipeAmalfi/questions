


// export function randomizeArray(array) {

// }

export function compareObjects(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2)
}

export function upperCaseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}