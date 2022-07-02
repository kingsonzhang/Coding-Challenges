/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/

//PREP
//Parameters: Given lengths a, b, c
//Return: If the triangle is not viable(0), acute(1), right(2), or obtuse(3)
//Examples: Check code war examples
//Psuedo
function triangleType(a, b, c){
    //Gonna need law of cosine
    //c^2 = a^2 + b^2 - 2abcos(angle);
    function lawOfCos(a, b, c){
      return Math.acos(- ((c * c) - (a * a) - (b * b)) / (2 * a * b)) * 180 / Math.PI;
    }
    
    //Before using lawOfCos, check if valid triangle, otherwise error
    if (Math.max(a, b, c) >= a + b + c - Math.max(a, b, c))
      return 0;
    let angles = [lawOfCos(a, b, c), lawOfCos(a, c, b), lawOfCos(b, c, a)];
    if (Math.max(...angles) > 90)
      return 3;
    else if (Math.max(...angles) == 90)
      return 2;
    else
      return 1;
}