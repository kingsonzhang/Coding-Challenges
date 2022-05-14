//PREP
//Parameters
//Returns
//Examples/output
//Psuedocode


//Parameters: A 2D arrays is given, length 9. Each array in the 2D array will contain 9 integers
//Returns: If the Sudoku board is solved, return "Finished!", otherwise return "Try again!"
//Examples: Check the CodeWars output for valid and invalid sudoku boards
function doneOrNot(board){
    //First check rows and columns to see if they add up to 45
    //If they don't, immediately return "Try again!"
    for (let i = 0; i < board.length; i++){
      if (board[i].reduce((acc, x) => acc + x, 0) != 45)
        return "Try again!";
      let sum = 0;
      for (let j = 0; j < 9; j++)
        sum += board[j][i];
      if (sum != 45)
        return 'Try again!';
    }
    
    //Next, check each 3x3 boxes to see if they add up to 45
    //If they don't, immediately return "Try again!"
    for (let rows = 0; rows < board.length; rows += 3){
      for (let columns = 0; columns < board[rows].length; columns += 3){
        let sum = 0;
        sum += (board[rows].slice(columns, columns + 3)).reduce((acc, x) => acc + x, 0);
        sum += (board[rows + 1].slice(columns, columns + 3)).reduce((acc, x) => acc + x, 0);
        sum += (board[rows + 2].slice(columns, columns + 3)).reduce((acc, x) => acc + x, 0);
        if (sum != 45)
          return "Try again!";
      }
    }

    //Otherwise, since everythinga dded to 45, return "Finished!" because the board is valid
    return "Finished!";
  }