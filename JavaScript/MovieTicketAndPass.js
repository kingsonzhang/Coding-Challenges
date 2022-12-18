function movie(card, ticket, perc) {
    let count = 0;
    let A = 0;
    let B = card;
    while (A <= Math.ceil(B)){
      count++;
      A += ticket;
      B += ticket * Math.pow(perc, count);
    }
    return count;
}