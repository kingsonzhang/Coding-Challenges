//Change seconds into readable format
function formatDuration (time){
    if (time == 0)
      return "now";
    let array = [];
    const years = Math.floor(time / 31536000);
    if (years)
      array.push(`${years} year${years > 1 ? 's' : ""}`);
    const days = Math.floor((time % 31536000) / 86400);
    if (days)
      array.push(`${days} day${days > 1 ? 's' : ""}`);
    const hours = Math.floor((time % 86400) / 3600);
    if (hours)
      array.push(`${hours} hour${hours > 1 ? 's' : ""}`);
    const minutes = Math.floor((time % 3600) / 60);
    if (minutes)
      array.push(`${minutes} minute${minutes > 1 ? 's' : ""}`);
    const seconds = time % 60;
    if (seconds)
      array.push(`${seconds} second${seconds > 1 ? 's' : ""}`);
    
    if (array.length == 1)
      return array[0];
    else if (array.length == 2)
      return array.join(" and ");
    else{
      let noComma = array.pop();
      noComma = array.pop() + " and " + noComma;
      return array.join(", ") + ", " + noComma;
    }
}