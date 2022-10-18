function gimme (triplet) {
    return (3 - (triplet.indexOf(Math.max(...triplet)) + triplet.indexOf(Math.min(...triplet))));
}