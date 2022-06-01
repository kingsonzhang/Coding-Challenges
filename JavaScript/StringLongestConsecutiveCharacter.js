function longestRepetition(s) {
    let character = "";
    let max = 0;
    
    let temp = "";
    let length = 0;
    for (let i = 0; i < s.length; i++){
      if (temp != s[i]){
        if (length > max){
          character = temp;
          max = length;
        }
        temp = s[i];
        length = 1;
      }
      else
        length++;
    }
    
    return length > max ? [temp, length] : [character, max];
  }