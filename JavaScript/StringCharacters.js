//Count the characters in a string
function count (string){ 
    let dictionary = {};
    string.split("").map((character) => character in dictionary ? dictionary[character]++ : dictionary[character] = 1)
    return dictionary;
}