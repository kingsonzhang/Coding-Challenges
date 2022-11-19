function removeConsecutiveDuplicates(s){
    return s.split(" ").filter((x, index, array) => x != array[index + 1]).join(" ");
}