function vowelIndices(word){
    const VOWEL = ['a', 'e', 'i', 'o', 'u', 'y'];
    let indexes = [];
    word.toLowerCase().split("").forEach((x, index) => VOWEL.includes(x) ? indexes.push(index + 1) : undefined);
    return indexes;
}