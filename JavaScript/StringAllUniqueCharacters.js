function hasUniqueChars(str){
    return new Set(str.split("")).size === str.length;
}