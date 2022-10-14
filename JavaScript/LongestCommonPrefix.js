var longestCommonPrefix = function(strs){
    let max = strs[0].length;
    for (let i = 1; i < strs.length; i++){
        let start = 0;
        while (strs[i][start] && strs[0][start] && (strs[0][start] === strs[i][start]))
            start++;
        if (start < max)
            max = start;
    }
    return strs[0].slice(0, max);
};