//Loop through iterable and remove all instances of same element as preceding
var uniqueInOrder=function(iterable){
    let holder = [];
    for (let i = 0; i < iterable.length; i++)
      if (holder[holder.length - 1] != iterable[i])
        holder.push(iterable[i])
    return holder;
}