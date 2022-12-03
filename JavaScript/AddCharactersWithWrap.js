function addLetters(...letters){
    return String.fromCharCode(letters.reduce((acc, x) => acc += x.charCodeAt(0) - 96, 25) % 26 + 97);
}