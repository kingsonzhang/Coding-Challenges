//Convert binary to ASCII using regex
function binaryToString(binary) {
    return binary.replace(/[01]{8}/g, x => String.fromCharCode(parseInt(x, 2)));
}  