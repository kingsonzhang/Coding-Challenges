//Take a string fraction and reduce it to mixed fraction form
function mixedFraction(s){
    const temp = s.split("/");
    let numer = temp[0];
    let denom = temp[1];
    if (denom == 0)
      throw new Error("Divided by Zero");
    let whole = ((numer >= 0 && denom > 0) || (numer < 0 && denom < 0)) ? Math.floor(numer/denom) : Math.ceil(numer/denom);
    numer = numer % denom;
    let reduce = gcd(numer, denom);
    if (numer == 0)
      return whole.toString();
    else if (whole != 0)
      return `${whole} ${Math.abs(numer / reduce)}/${Math.abs(denom / reduce)}`;
    else{
      return ((numer > 0 && denom > 0) || (numer < 0 && denom < 0)) ? `${numer / reduce}/${denom / reduce}` : `-${Math.abs(numer / reduce)}/${Math.abs(denom / reduce)}`;
    }
    
    
    function gcd(a, b){
      if (!b)
        return a;
      return gcd(b, a % b);
    }
}