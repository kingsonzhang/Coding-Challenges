var merge = function(nums1, m, nums2, n){
    nums1.splice(m);
    nums2.splice(n);
    firstPointer = 0;
    secondPointer = 0;
    while (firstPointer < nums1.length && secondPointer < nums2.length){
        if (nums2[secondPointer] < nums1[firstPointer]){
            nums1.splice(firstPointer, 0, nums2[secondPointer]);
            secondPointer++;
        }
        firstPointer++;
    }
    nums1.push(...nums2.slice(secondPointer))
};