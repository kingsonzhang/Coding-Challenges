//Remove an exclamation mark from the end of a string.
function remove(string){
    if (string.endsWith("!"))
      return string.slice(0, -1);
    return string;
}