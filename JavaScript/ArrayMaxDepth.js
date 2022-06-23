function deepCount(a){
    return a.reduce((acc, x) => acc + (Array.isArray(x)?deepCount(x) : 0),a.length);
}