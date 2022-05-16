//Morse Code decoder
decodeMorse = function(morseCode){
    return morseCode.trim().split("   ").map(x => x.split(" ").map(y => MORSE_CODE[y]).join("")).join(" ")
}