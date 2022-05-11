//Return amount of valid smiley faces, without regex and with regex
function countSmileys(arr){
    const valid = [':', ';', '-', '~', ')', 'D'];
    let count = 0;
    for (let i = 0; i < arr.length; i++){
      const split = arr[i].split("");
      if (split.length < 4 && split.every(x => valid.includes(x))){
        if ((split.includes(':') || split.includes(';')) && (split.includes(')') || split.includes('D')))
          count++
      }
    }
    console.log(arr)
    return count;
}
  
  function countSmileys(arr) {
    return arr.reduce((acc, x) => acc + /^[:;][-~]?[)D]$/.test(x), 0);
}