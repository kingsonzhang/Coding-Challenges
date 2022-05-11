//Capitalize a book title
function titleCase(title, minorWords){
    if (title != ""){
      const lowerTitle = title.toLowerCase().split(" ");
      let lowerMinor = []
      if (minorWords !== undefined)
        lowerMinor = minorWords.toLowerCase().split(" ");
      
      return lowerTitle.map((word, index) => (lowerMinor.includes(word) && index != 0) ? word.toLowerCase(): word[0].toUpperCase() + word.substring(1)).join(" ");
    }
    return "";
}