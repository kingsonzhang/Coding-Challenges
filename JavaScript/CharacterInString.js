//Checking loterry winner if character is in string
function bingo(ticket, win){
    let count = 0;
    ticket.forEach(
      x => {
        x[0].split("").map(character => character.charCodeAt(0)).includes(x[1]) ? count++ : count;
      }
    )
    return count >= win ? "Winner!" : "Loser!"
}