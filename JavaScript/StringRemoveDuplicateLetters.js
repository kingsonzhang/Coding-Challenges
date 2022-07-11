function dup(s){
    return s.map(x =>{
      let temp = x.split("");
      for (let i = 0; i < temp.length; i++){
        if (temp[i] === temp[i + 1]){
          temp.splice(i, 1);
          i--;
        }
      }
      return temp.join("");
    })
};