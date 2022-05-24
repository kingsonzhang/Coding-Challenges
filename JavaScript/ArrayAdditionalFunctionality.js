Array.prototype.square = function(){
    return this.map(x => x * x);
}
  
  Array.prototype.cube = function(){
    return this.map(x => Math.pow(x, 3));
}
  
  Array.prototype.sum = function(){
    return this.reduce((acc, x) => acc + x, 0);
}
  
  Array.prototype.average = function(){
    return this.sum() / this.length;
}
  
  Array.prototype.even = function(){
    return this.filter(x => !(x % 2))
}
  
  Array.prototype.odd = function(){
    return this.filter(x => x % 2)
}