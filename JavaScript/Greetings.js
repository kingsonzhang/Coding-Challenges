function greet(name){
    return `Hello ${name.split("").map((x, index) => index ? x.toLowerCase() : x.toUpperCase()).join("")}!`
}