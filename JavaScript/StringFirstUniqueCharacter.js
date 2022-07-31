function firstUniqChar(s){
    let found = {};
    let unique = {};
    for (let i = 0; i < s.length; i++){
        let character = s[i];
        if (found[character])
            found[character]++;
        else{
            if (unique[character]){
                found[character] = 1;
                delete unique[character];
            }
            else
                unique[character] = 1;
        }
    }
    let uniqueCharacters = Object.keys(unique);
    return uniqueCharacters.length ? Math.min(...uniqueCharacters.map(x => s.indexOf(x))): -1
};