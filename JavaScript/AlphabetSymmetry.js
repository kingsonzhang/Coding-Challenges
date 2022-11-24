function solve(arr){  
    return arr.map(word => {
        return word.split("").reduce((acc, letter, index) => acc += letter.toLowerCase().charCodeAt(0) == index + 97, 0)
    })
};