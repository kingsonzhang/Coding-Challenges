function switcheroo(x){
    return x.split("").map(x => x === "a" ? "b" : x === "b" ? "a" : "c").join("");
}