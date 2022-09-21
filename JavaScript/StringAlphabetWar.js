function alphabetWar(fight){
    const VALUES = {
      "w" : 4,
      "p" : 3,
      "b" : 2,
      "s" : 1,
      "m" : -4,
      "q" : -3,
      "d" : -2,
      "z" : -1,
    }
    let winner = fight.split("").filter(x => VALUES[x] !== undefined).reduce((acc, x) => acc + VALUES[x], 0);
    if (winner < 0)
      return "Right side wins!"
    else if (winner > 0)
      return "Left side wins!"
    return "Let's fight again!"
}