//Sort by weight of a string number (add digits), and then by number alphabetically if weights are equal
function orderWeight(strng) {
    let orderPairs = [];
    strng.split(" ").forEach(x => orderPairs.push([x, x.split("").reduce((acc, value) => acc + Number(value), 0)]))
    return orderPairs.sort((a, b) => {
        if (a[1] > b[1]) return 1;
        if (a[1] < b[1]) return -1;
        if (a[0] > b[0]) return 1;
        if (a[0] < b[0]) return -1;
      })
      .map(x => x[0]).join(" ");
}