function sortMyString(S) {
    let even = "";
    let odd = "";
    S.split("").forEach((x, index) =>{
      if (index % 2)
        odd += x;
      else
        even += x;
    });
    return even + " " + odd;
}