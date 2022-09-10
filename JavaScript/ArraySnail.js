//PREP
//Parameters: Given a 2D square array of numbers of unknown size
//Return: Return a 1D array of the elements in the 2D array in a snail pattern
//  Check codewar for more details
//Example: Check codewar for example
//Pseudo

snail = function(array) {
    //Initial 1D array with first array in the 2D array
    let snail = [...array[0]];
    //Get the length of the 2D array, and subtract one for distance to travel after first pass
    let distance = array.length - 1;
    //Set starting position
    let x = 0;
    let y = array.length - 1;
    //Set boolean for direction
    //If true, go down and left. If false, go up and right
    let direction = true;
    
    //Keep running the algorithm until the distance is 0
    while (distance > 0){
      //Check the direction
      if (direction){
        //Travel distance down
        for (let i = 1; i <= distance; i++)
          //Push number into 1D array
          snail.push(array[x + i][y]);
        //Set x position to x + distance
        x += distance
        //Travel distance left
        for (let i = 1; i <= distance; i++)
          //Push number into 1D array
          snail.push(array[x][y - i]);
        //Set y position to y - distance
        y -= distance;
        //Reverse direction
        direction = !direction;
      }
      else{
        //Do the same thing, but in opposite direciton
        //Travel distance up
        for (let i = 1; i <= distance; i++)
          //Push number into 1D array
          snail.push(array[x - i][y]);
        //Set x position to x - distance
        x -= distance
        //Travel distance left
        for (let i = 1; i <= distance; i++)
          //Push number into 1D array
          snail.push(array[x][y + i]);
        //Set y position to y - distance
        y += distance;
        //Reverse direction
        direction = !direction;
      }
      //Exit condition
      distance--;
    }
    return snail;
  }