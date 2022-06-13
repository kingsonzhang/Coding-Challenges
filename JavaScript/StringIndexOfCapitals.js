var capitals = function (word) {
	return word.split("").reduce((acc, x, index) => x.toUpperCase() == x ? acc.concat(index) : acc, []);
}