function moveZeroes(nums) {
    let length = nums.length;
    for (let i = 0; i < nums.length; i++)
        if (!nums[i]){
            nums.splice(i, 1);
            i--;
        }
    while(nums.length < length)
        nums.push(0);
};