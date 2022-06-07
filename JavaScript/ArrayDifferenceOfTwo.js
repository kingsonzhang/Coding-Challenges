//PREP
//Parameters: Given an array of numbers
//Returns: An array filled with with tuples (array) of pairs of numbers where difference is 2
//Example/Output: Check codewar examples
//Psuedo

function twosDifference(input){
    //Create a pair array and return it
    let pairs = [];
    //Create a dictionary so I only need to loop through input once
    let dictionary = {};
    //Loop through the values of the array
    for (let i = 0; i < input.length; i++){
      let value = input[i];
      //Check if value - 2 was in the input array
      if (dictionary[value - 2])
        pairs.push([value - 2, value]);
      //Check if value + 2 was in the input array
      else if (dictionary[value + 2])
        pairs.push([value, value + 2]);
      //By default, the value must be added to the dictionary
      dictionary[value] = 1;
    }
    return pairs.sort((a, b) => a[0] - b[0]);
}