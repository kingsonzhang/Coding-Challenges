function DNAtoRNA(dna) {
    return dna.split("").map(x => x === 'T' ? 'U' : x).join("");
}