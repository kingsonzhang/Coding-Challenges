//Reverse binary array every 8 bytes
function dataReverse(data){
    let reverse = [];
    for (let i = 0; i < data.length; i + 8){
      reverse.unshift(...data.splice(i, 8));
    }
    return reverse;
}