function twoOldestAges(ages){
    ages.sort((a, b) => a - b);
    return [ages[ages.length - 2], ages[ages.length - 1]];
}  