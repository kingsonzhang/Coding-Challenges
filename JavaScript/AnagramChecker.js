var isAnagram = function(s, t) {
    if (s.length !== t.length)
        return false;
    let sLetters = {};
    let tLetters = {};
    s.split("").forEach(x => sLetters[x] = sLetters[x] ? sLetters[x] + 1 : 1);
    t.split("").forEach(x => tLetters[x] = tLetters[x] ? tLetters[x] + 1 : 1);
    
    return Object.keys(sLetters).every(x => sLetters[x] === tLetters[x])
};