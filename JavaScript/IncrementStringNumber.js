//Increment string number at the end by one, do not change length of string number, and reappend to end
function incrementString(strng){
    let i = strng.length;
    while (strng[i - 1] >= '0' && strng[i - 1] <= '9')
      i--;
    let text = strng.substring(0, i);
    let original = strng.substring(i);
    let update = (Number(original) + 1).toString();
    while (update.length < original.length)
      update = "0" + update;
    return text + update;
}