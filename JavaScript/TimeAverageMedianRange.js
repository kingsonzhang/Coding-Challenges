//PREP
//Parameters: Given a string filled with times in the following format
//  hh|mm||ss seperated by a comma space
//Return the range (biggest difference), the average, and the median time
//Examples: Look at codewar examples
//Psuedo

function stat(strg) {
    //First, I need a function to change seconds into hh|mm|ss
    function convertToTime(seconds){
      //This function will handle any decimal seconds
      seconds = Math.floor(seconds);
      let time = [];
      time.push(Math.floor(seconds / 3600));
      time.push(Math.floor((seconds % 3600) / 60));
      time.push(seconds % 60);
      return time.map(x => x.toString().padStart(2, '0'));
    }
    //Second, I need a function to convert hh|mm|ss into seconds
    function convertToSeconds(timeArray){
      //Given an array [hh, mm, ss]
      let total = timeArray[2];
      total += timeArray[0] * 3600 + timeArray[1] * 60;
      return total;
    }
    
    //Get all the times as seconds
    let times = strg.split(", ").map(x => x.split("|").map(Number)).map(convertToSeconds);
    //Sort the times
    times.sort((a, b) => a - b);
    //Range and max - min
    let range = times[times.length - 1] - times[0];
    //Average is add all times together and divide by how many
    let average = times.reduce((acc, x) => acc + x, 0) / times.length;
    //Median depends on odd or even amount of times
    let median;
    if (times.length % 2){
      median = times[Math.floor(times.length / 2)];
    }
    else{
      median = (times[times.length / 2 - 1] + times[times.length / 2]) / 2;
    }
    return `Range: ${convertToTime(range).join("|")} Average: ${convertToTime(average).join("|")} Median: ${convertToTime(median).join("|")}`;
}