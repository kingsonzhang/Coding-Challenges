//Sort by last then first name
function meeting(s) {
    return s.split(";")
      .map(x => x.toUpperCase())
      .map(x => x.split(":"))
      .sort((a, b) => {
        if (a[1] > b[1]) return 1;
        if (a[1] < b[1]) return -1;
        if (a[0] > b[0]) return 1;
        if (a[0] < b[0]) return -1;
      })
      .map(x => `(${x[1].toUpperCase()}, ${x[0].toUpperCase()})`)
      .join("");
}