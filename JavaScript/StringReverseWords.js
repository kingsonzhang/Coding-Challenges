//Return a sentence with all words greater than 5 characters reversed
function spinWords(string){
    return string.split(" ").map(x=>x.length>4? x.split("").reverse().join("") : x).join(" ")
}