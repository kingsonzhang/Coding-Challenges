//Find opposite DNA pairs in a string
function DNAStrand(dna){
    const dictionary = {'A': 'T', 'T': 'A', 'C' : 'G', 'G' : 'C'};
    return dna.split("").map(x => dictionary[x]).join("");
}