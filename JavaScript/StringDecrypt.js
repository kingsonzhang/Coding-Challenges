function decipherThis(str){
    const INTEGERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let words = str.split(" ");
    return words.map(x => {
      let decrypted = "";
      let value = x.slice(0, 2);
      if (INTEGERS.includes(x[2]))
        value += x[2];
      decrypted += String.fromCharCode(value)
      if (value.length !== x.length){
        let letters = x.slice(value.length, x.length).split("");
        let temp = letters[0];
        letters[0] = letters[letters.length - 1];
        letters[letters.length - 1] = temp;
        decrypted += letters.join("")
      }
      return decrypted;
    }).join(" ");
}; 