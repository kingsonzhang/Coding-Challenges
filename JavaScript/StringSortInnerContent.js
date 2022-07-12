function sortTheInnerContent(words){
  return words.split(" ").map(x =>{
    return x = x[0] + x.slice(1, -1).split("").sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0)).join("") + (x.length > 1 ? x[x.length - 1] : "");
  }).join(" ");
}
