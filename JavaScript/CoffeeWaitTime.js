//PREP
//Parameters: Array of integers that stands of the brew time of each customers coffee, can be empty
//Return: Return the total wait time of all the individual customers summed
//Examples/Output: [4, 3, 2] -> 22 because array needs to be sorted from least to greatest

function barista(coffees){
    //Sort the array from least to greatest in order to minimize wait time
    coffees.sort((a, b) => a - b);
    //Hold the total wait time
    let total = 0;
    //Loop through the sorted wait times
    for (let i = 0; i < coffees.length; i++){
      //Add all the previous brewing times up to current customers
      total += coffees.slice(0, i + 1).reduce((acc, x) => acc + x, 0);
      //Add 2 minute cleaning time for all previous customers
      total += i * 2
    }
    //Return the total wait time
    return total;
  }