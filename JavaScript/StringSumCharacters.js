//If a = 1, b = 2, c = 3 ... z = 26, return the sum of a string
function wordsToMarks(string){
    return string.split("").reduce((acc, letter) => acc + letter.charCodeAt() - 96, 0)
}