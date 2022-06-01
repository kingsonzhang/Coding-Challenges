function reverse(str){
    return str.split(" ").map((x, index) => index % 2 ? x.split("").reverse().join("") : x).join(" ").trim();
}