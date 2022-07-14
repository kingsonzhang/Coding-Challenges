function ipsBetween(start, end){
  function ipToInt32(ip){
    //Get each octet of the IP address
    //Convert the octet into binary, but remember to pad so there are 8 digits
    //Join the octet binaries into one 32 digit string
    //Convert the string into decimal format
    return parseInt(ip.split(".").map(x => Number(x).toString(2).padStart(8, '0')).join(""), 2);
  }
  
  return ipToInt32(end) - ipToInt32(start);
}
