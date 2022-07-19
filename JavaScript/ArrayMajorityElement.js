function majorityElement(nums) {
    let dictionary = {};
    let max = 0;
    let number = 1;
    
    nums.forEach(x => {
        if (dictionary[x]){
            dictionary[x]++;
            if (dictionary[x] > max){
                max = dictionary[x];
                number = x;
            }
        }
        else
            dictionary[x] = 1;
    })
    return number;
}