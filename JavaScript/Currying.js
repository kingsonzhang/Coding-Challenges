function add(firstParameter){
    function currying(additionalParameter){
      return firstParameter + additionalParameter;
    }
    return currying;
}  