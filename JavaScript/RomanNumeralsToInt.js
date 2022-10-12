function romanToInt(s){
    let sum = 0;
    const VALUES = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    for (let i = 0; i < s.length; i++){
        if (VALUES[s[i+1]] > VALUES[s[i]])
            sum -= VALUES[s[i]]
        else
            sum += VALUES[s[i]];
    }
    return sum;
}