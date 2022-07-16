longestPalindrome=function(s){
    if (s.length === 0)
      return 0;
    let letters = s.split("");
    let max = 1;
    for (let i = 0; i < letters.length - 1; i++){
      for (let j = i + 1; j < letters.length; j++)
        if (s[i] === s[j]){
          let temp = letters.slice(i, j + 1);
          let forward = temp.join("");
          let backward = temp.reverse().join("");
          if (forward === backward)
            if (forward.length > max)
              max = forward.length;
        }
    }
    return max;
}