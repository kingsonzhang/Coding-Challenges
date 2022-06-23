function getParticipants(handshakes){
    let start = 0;
    let total = 0;
    while (total < handshakes){
      total += start;
      start++;
    }
    return start;
}