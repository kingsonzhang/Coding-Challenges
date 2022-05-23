//Categorizing each book by letter and total amount in stock
function stockList(listOfArt, listOfCat){
    if (listOfArt.length == 0)
      return "";
    let dictionary = {};
    listOfArt.forEach(x => {
      let split = x.split(" ");
      split[0][0] in dictionary ? dictionary[split[0][0]] += Number(split[1]) : dictionary[split[0][0]] = Number(split[1]);
    })
    return listOfCat.map(x => `(${x} : ${x in dictionary ? dictionary[x] : 0})`).join(" - ")
}