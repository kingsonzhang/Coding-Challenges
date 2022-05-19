//PREP
//Parameters: Given a sentence as a string
//Return the string with the following encryption
//1. Each word has its first character changed to ASCII code
//2. Swap the first character after the ASCII code with the last character
//Example/Outputs: Check codewar examples
//Psuedo:

var encryptThis = function(text) {
    //Split the sentence into words
    let words = text.split(" ");
    //Split each individual words into letters and
    //Apply the encryption onto each word
    for (let i = 0; i < words.length; i++){
      let letters = words[i].split("");
      //If letters is only one character
      letters[0] = letters[0].charCodeAt(0);
      //Else apply the encryption to the other characters
      if (letters.length > 1){
        let temp = letters[1]
        letters[1] = letters[letters.length - 1];
        letters[letters.length - 1] = temp;
      }
      words[i] = letters.join("");
    }
    return words.join(" ");
}