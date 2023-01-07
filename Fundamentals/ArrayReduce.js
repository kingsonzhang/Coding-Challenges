function findAverage(nums){
    return nums.reduce((acc, x) => acc + x, 0) / nums.length;
}