//Very import to know this
//Return a function that applies f(g(a)) on given argument a
//Example: compose(addOne, addAnotherOne)(0) should return 2;
function compose(f,g) {
    return function() {
      return f(g.apply(this, arguments))
    }
}