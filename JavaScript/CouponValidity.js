function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    const DATES = ["January", "February", "March", "April", "May", "June",
                   "July", "August", "September", "October", "November", "December"];
    if (enteredCode === correctCode){
      let current = currentDate.split(", ");
      let expire = expirationDate.split(", ");
      if (Number(current[1]) < Number(expire[1]))
        return true;
      else if (Number(current[1]) === Number(expire[1])){
        current = current[0].split(" ");
        expire = expire[0].split(" ");
        if (DATES.indexOf(current[0]) < DATES.indexOf(expire[0]))
          return true;
        else if (DATES.indexOf(current[0]) === DATES.indexOf(expire[0]))
          if (Number(current[1]) <= Number(expire[1]))
            return true;
      }
    }
    return false;
}