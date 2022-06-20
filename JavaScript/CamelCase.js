//Convert to camelCase
function toCamelCase(str){
    let split = str.split(/[-_]+/);
    for (let i = 1; i < split.length; i++){
      let characters = split[i].split("");
      characters[0] = characters[0].toUpperCase();
      split[i] = characters.join("");
    }
    return split.join("");
}