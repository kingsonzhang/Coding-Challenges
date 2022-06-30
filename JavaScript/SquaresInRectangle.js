//Return squares that make up a rectangle
function sqInRect(lng, wdth){
    if (lng == wdth)
      return null;
    let total = [];
    while (lng > 0 && wdth > 0){
      total.push(Math.min(lng, wdth));
      lng > wdth ? lng -= wdth : wdth -= lng;
    }
    return total;
}