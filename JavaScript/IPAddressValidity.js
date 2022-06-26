//Valid IP Numbers
function isValidIP(str) {
    const VALUES = str.split(".");
    console.log(VALUES);
    //If there are only 4 numbers in the string seperated by periods
    if (VALUES.length == 4)
      //If every number only contains numbers (no letters)
      if (VALUES.every(x => x.split("").every(character => character >= '0' && character <= '9')))
        //If every number does not have leading 0's
        if (VALUES.every(y => y == Number(y).toString()))
          //Return true if the numbers are between 0 and 255 inclusive
          return VALUES.every(z => Number(z) >= 0 && Number(z) <= 255);
    //Otherwise by default return false
    return false;
}