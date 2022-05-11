//Find duplicates in a string
function duplicateEncode(word){
    return word.toLowerCase().split("").map((letter, index, self) => self.indexOf(letter) == self.lastIndexOf(letter) ? "(" : ")").join("");
}