//Convert only characters to numbers, remove all special character
function alphabetPosition(text) {
    return text.toUpperCase().split("").filter(x => x >= "A" && x <= "Z").map(x => x.charCodeAt() - 64).join(" ");
}