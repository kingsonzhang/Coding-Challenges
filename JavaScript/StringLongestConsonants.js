function solve(s){
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];
    let values = [0];
    for (let i = 0; i < s.length; i++){
      if (VOWELS.includes(s[i]))
        values.push(0);
      else
        values[values.length - 1] += s[i].charCodeAt(0) - 96;
    }
    return Math.max(...values);
}