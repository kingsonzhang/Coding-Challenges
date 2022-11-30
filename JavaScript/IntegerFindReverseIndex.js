function findDigit(num, nth){
    return nth <= 0 ? -1 : nth <= Math.abs(num).toString().length ? Number(Math.abs(num).toString().split("").reverse()[nth - 1]) : 0;
}