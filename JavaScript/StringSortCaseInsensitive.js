function sortme(names){
    return lowerCase = names.map((x, index) => [x.toLowerCase(), index]).sort((a, b) => a[0] >= b[0] ? 1 : -1).map(x => names[x[1]]);
}  