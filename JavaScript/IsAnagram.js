function anagrams(word, words){
    let letters = {};
    let anagrams = [];
    word.split("").forEach(x => letters[x] ? letters[x]++ : letters[x] = 1);
    words.forEach(anagram =>{
      let anagramLetters = {};
      anagram.split("").forEach(x => anagramLetters[x] ? anagramLetters[x]++ : anagramLetters[x] = 1);
      let keys = Object.keys(anagramLetters);
      if (keys.every(x => letters[x] === anagramLetters[x]))
        anagrams.push(anagram);
    });
    return anagrams;
}