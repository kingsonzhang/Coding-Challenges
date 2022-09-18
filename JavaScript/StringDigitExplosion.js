function explode(s) {
    let number = "";
    s.split("").forEach(x => number += x.repeat(Number(x)));
    return number;
}