//Zoo Hunger Games
//Some pretty awful code tbh, but it works and just needs to be refactored to removed duplicate lines of code
var whoEatsWho = function(zoo){
    let order = zoo.split(",");
    
    let actions = [zoo];
    let currentLength = -1;
    while (order.length != currentLength){
      currentLength = order.length;
      let start = 0;
      let notEaten = true;
      while (start < currentLength && notEaten){
        let previous = order[start - 1];
        let next = order[start + 1];
        function eaten(index, which){
          actions.push(`${order[start]} eats ${order[start + which]}`);
          order.splice(start + which, 1);
          notEaten = false;
        }
        switch(order[start]){
            case "antelope":
            case "cow":
            case "sheep":
              if (previous == "grass")
                eaten(start, -1);
              else if (next == "grass")
                eaten(start, 1);
              break;
            case "big-fish":
              if (previous == "little-fish")
                eaten(start, -1);
              else if (next == "little-fish")
                eaten(start, 1);
              break;
            case "bug":
            case "giraffe":
            case "panda":
              if (previous == "leaves")
                eaten(start, -1);
              else if (next == "leaves")
                eaten(start, 1);
              break;
            case "bear":
              if (previous == "big-fish" || previous == "bug" || previous == "chicken" || previous == "cow" || previous == "leaves" || previous == "sheep")
                eaten(start, -1);
              else if (next == "big-fish" || next == "bug" || next == "chicken" || next == "cow" || next == "leaves" || next == "sheep")
                eaten(start, 1);
              break;
            case "chicken":
              if (previous == "bug")
                eaten(start, -1);
              else if (next == "bug")
                eaten(start, 1);
              break;
            case "fox":
              if (previous == "chicken" || previous == "sheep")
                eaten(start, -1);
              else if (next == "chicken" || next == "sheep")
                eaten(start, 1);
              break;
            case "lion":
              if (previous == "antelope" || previous == "cow")
                eaten(start, -1);
              else if (next == "antelope" || next == "cow")
                eaten(start, 1);
              break;
        }
        start++;
      }
    }
    actions.push(order.join(","));
    return actions;
  }