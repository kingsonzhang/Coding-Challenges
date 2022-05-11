//Check if equal number of x's and o'x in string
function XO(str) {
    let dictionary = {};
    str.toLowerCase().split("").forEach(x => x in dictionary ? dictionary[x] += 1 : dictionary[x] = 1);
    return dictionary['x'] == dictionary['o'];
}  