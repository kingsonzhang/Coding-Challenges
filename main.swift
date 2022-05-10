//Simple conditional check
func great(_ name: String, _ owner: String) -> String {
  if (name == owner){
    return "Hello boss"
  }
  return "Hello guest"
}

//Switch conditional check
//Default is mandatory unless switch statement is exhuastive (covers all cases);
func switchItUp(_ number: Int) -> String {
  /*switch (number){
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
    default:
      return "Nope";
  }*/
  return ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][number];
}

//Ternary operator
func simpleMultiplication(_ num: Int) -> Int {
  return num * (num % 2 == 1 ? 9 : 8);
}

//Subarray from index 0 to n
func take(_ arr: [Int], _ n: Int) -> [Int] {
  return Array(arr.prefix(n));
}

//Index of element in an array
func warnTheSheep(_ queue: [String]) -> String {
  let index = queue.firstIndex(where: {$0 == "wolf"});
  return index == queue.count - 1 ? "Pls go away and stop eating my sheep" : "Oi! Sheep number \(queue.count - index! - 1)! You are about to be eaten by a wolf!"
}