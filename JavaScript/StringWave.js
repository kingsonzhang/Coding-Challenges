//PREP
//Parameters: I will be given a lowercase string, that may include spaces
//Return: Return the string with one letter upper cased, string from the beginning
//of the string to the end of the string
//ignore all spaces
//Example/Output: Check codewar examples
//Pseudo

function wave(str){
    //Create an array to hold the wave
    let wave = [];
    
    //Loop through the length of the string
    for (let i = 0; i < str.length; i++){
      //Split the string to get individual letters
      let temp = str.split("");
      //Ignore spaces
      if (temp[i] != " "){
        //Capatilize the letter at the index in the for loop
        temp[i] = temp[i].toUpperCase();
        //Join the characters back together and push it into the wave array
        wave.push(temp.join(""));
      }
    }
    //Return the wave array
    return wave;
}