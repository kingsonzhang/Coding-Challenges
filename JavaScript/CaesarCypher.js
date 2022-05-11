//Caesar cipher without brute force or regex
function rot13(message){
    let characters = message.split("");
    for (let i = 0; i < characters.length; i++){
      if (characters[i] >= 'a'  && characters[i] <= 'z'){
        let number = characters[i].charCodeAt(0) + 13;
        if (number > 122)
          number -= 26;
        characters[i] = String.fromCharCode(number);
      }
      else if (characters[i] >= 'A'  && characters[i] <= 'Z'){
        let number = characters[i].charCodeAt(0) + 13;
        if (number > 90)
          number -= 26;
        characters[i] = String.fromCharCode(number);
      }
    }
    return characters.join("");
}