//PREP
//Parameters: Given a sentence as a string
//Return: Return the setence with all the even letters in each word capitalized
//and all the odd numbers lowercased
//Examples/Outputs: Check code war examples
//Pseudo
function toWeirdCase(string){
    //Split the sentence into words
    let words = string.split(" ");
    //Split each word into individual characters
    let letters = words.map(x => x.split(""));
    //For each individual word split into letters, capitalize even, lowercase odd
    return letters.map(x => x.map((letter, index) => index % 2 ? letter.toLowerCase() : letter.toUpperCase()).join("")).join(" ");
}