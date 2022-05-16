//String does not contain same character, uses Set as a dictionary
function isIsogram(str){
    return new Set(str.toLowerCase()).size == str.length;
}