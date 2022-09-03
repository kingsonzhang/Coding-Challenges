function stringy(size) {
    let string = ""
    while (string.length < size)
      string += string.length % 2 ? '0' : '1';
    return string;
}