const orderedCount = function (text) {
    let keys = [];
    let count = [];
    text.split("").forEach(x => {
      if (keys.includes(x))
        count[keys.indexOf(x)]++;
      else{
        keys.push(x);
        count.push(1);
      }
    })
    return keys.map((x, index) => [x, count[index]]);
}