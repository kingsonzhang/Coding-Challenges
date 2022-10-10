function isLeapYear(year) {
    if (year % 4)
      return false
    if (!(year % 100))
      if (year % 400)
        return false;
    return true;
}