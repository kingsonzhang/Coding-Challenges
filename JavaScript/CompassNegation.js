//Cancel out NORTH/SOUTH and EAST/WEST in a given array
function dirReduc(arr){
    const OPPOSITE = {"NORTH":"SOUTH", "SOUTH":"NORTH", "WEST":"EAST", "EAST":"WEST"};
    return arr.reduce((acc, direction) => {direction == OPPOSITE[acc.slice(-1)] ? acc.pop() : acc.push(direction); return acc}, []);
}