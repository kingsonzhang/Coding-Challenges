function duplicateEncode(word){
    let dictionary = {};
    let temp = "";
    const split = word.toLowerCase().split("");
    split.forEach(x => x in dictionary ? dictionary[x] += 1 : dictionary[x] = 0);
    split.forEach(x => temp += dictionary[x] ? ")" : "(")
    return temp;
}