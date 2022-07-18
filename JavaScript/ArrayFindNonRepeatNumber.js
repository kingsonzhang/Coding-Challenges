function singleNumber(nums) {
    let dictionary = {};
    nums.forEach(x => {
        if (dictionary[x])
            delete dictionary[x];
        else
            dictionary[x] = 1;
    })
    return Object.keys(dictionary);
};