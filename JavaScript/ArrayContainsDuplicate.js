var containsDuplicate = function(nums) {
    let dictionary = {};
    for (let i = 0; i < nums.length; i++){
        if (! dictionary[nums[i].toString()])
            dictionary[nums[i].toString()] = "1";
        else
            return true;
    }
    return false;
};