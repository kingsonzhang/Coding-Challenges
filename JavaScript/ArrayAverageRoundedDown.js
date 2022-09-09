function getAverage(marks){
    return parseInt(marks.reduce((acc, x) => acc + x, 0) / marks.length);
}