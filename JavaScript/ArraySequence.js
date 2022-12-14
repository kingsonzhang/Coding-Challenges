function sumOfN(n){
    let sequence = [0];
    for (let i = 1; i <= Math.abs(n); i++)
      sequence.push(sequence[i - 1] + (n > 0 ? i : -i));
    return sequence;
}