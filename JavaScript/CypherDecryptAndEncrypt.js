//Cypher to encrypt and decrypt string by odd and even indexes
function encrypt(text, n){
    function cypher(text){
      const split = text.split("");
      return split.filter((x, index) => index % 2).join("") + split.filter((x, index) => !(index % 2)).join("");
    }
  
    if (text == null)
      return text;
    for (let i = 0 ; i < n; i++)
      text = cypher(text);
    return text;
  }
  
  function decrypt(encryptedText, n){
    function decypher(text){
      const split = encryptedText.split("");
      const front = split.slice(0, Math.floor(split.length / 2));
      const back = split.slice(Math.floor(split.length / 2), split.length);
      let string = [];
      for (let i = 0; i < front.length; i++){
        string.push(back[i]);
        string.push(front[i]);
      }
      if (back.length > front.length)
        string.push(back[back.length - 1]);
      return string.join("");
    }
  
    if (encryptedText == null)
      return encryptedText;
    for (let i = 0; i < n; i++)
      encryptedText = decypher(encryptedText);
    return encryptedText;
  }