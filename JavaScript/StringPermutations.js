function permutations(string) {
    function stringPermutations(str){
        if (str.length <= 2)
            return str.length === 2 ? [str, str[1] + str[0]] : [str];
        return str.split("").reduce((acc, letter, index) => acc.concat(stringPermutations(str.slice(0, index) + str.slice(index + 1)).map(val => letter + val)), [])
    }
  
    return [...new Set(stringPermutations(string))]
}