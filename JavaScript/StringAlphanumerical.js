function alphanumeric(string){
    if (string === "")
      return false;
    return string.split("").every(x =>{
      const ASCIIVALUE = x.charCodeAt(0);
      return (ASCIIVALUE >= '0'.charCodeAt(0) && ASCIIVALUE <= '9'.charCodeAt(0)) 
                || (ASCIIVALUE >= 'A'.charCodeAt(0) && ASCIIVALUE <= 'Z'.charCodeAt(0))
                    || (ASCIIVALUE >= 'a'.charCodeAt(0) && ASCIIVALUE <= 'z'.charCodeAt(0));
    });
}