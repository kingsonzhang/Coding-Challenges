function potholes(string){
    let count = 0;
    for (let i = 0; i < string.length; i++){
        if (string[i] == "X"){
            count++;
            i += 2
        }
    }
    return count;
}