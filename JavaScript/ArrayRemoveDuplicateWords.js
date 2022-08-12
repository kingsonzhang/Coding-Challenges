function removeDuplicateWords(s){
    let dictionary = {};
    s.split(" ").forEach(x => dictionary[x] ? dictionary[x] : dictionary[x] = 1);
    return Object.keys(dictionary).join(" ");
}