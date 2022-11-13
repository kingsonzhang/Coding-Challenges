function switcheroo(x){
    return x.split("").map(letter => letter == "a" ? "b" : letter == "b" ? "a" : "c").join("");
}