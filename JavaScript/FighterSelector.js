//Street Fighter selector using arrays
function streetFighterSelection(fighters, position, moves){
    let currentFighter = [];
    for (let i = 0; i < moves.length; i++){
      switch(moves[i]){
          case ("up"):
            position[0] = 0;
            break;
          case ("down"):
            position[0] = 1;
            break;
          case ("left"):
            position[1] == 0 ? position[1] = 5 : position[1] -= 1;
            break;
          case ("right"):
            position[1] == 5 ? position[1] = 0 : position[1] += 1;
            break;
      }
      currentFighter.push(fighters[position[0]][position[1]]);
    }
    return currentFighter;
}