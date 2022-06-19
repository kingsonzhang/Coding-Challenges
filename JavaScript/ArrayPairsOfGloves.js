//PREP
//Parameters: Given an array of colors
//Return: the total count of pairs of colors in the array
//Example: See codewar examples
//Psuedo:
function numberOfPairs(gloves){
    //Only loop through the gloves array once
    //Create an array to hold all encountered colors
    let found = [];
    //If color of gloves is not in found, add it
    //Otherwise, remove it and add 1 to the count
    let count = 0;
    for (let i = 0; i < gloves.length; i++){
      if (found.includes(gloves[i])){
        found.splice(found.indexOf(gloves[i]), 1);
        count++;
      }
      else
        found.push(gloves[i]);
    }
    return count
}