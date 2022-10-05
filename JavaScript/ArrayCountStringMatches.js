function well(x){
    let count = x.filter(temp => temp == "good").length;
    if (count > 2)
      return "I smell a series!"
    else if (count > 0)
      return "Publish!"
    else
      return "Fail!"
}