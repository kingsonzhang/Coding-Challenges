//Build an asterisk pyramid given how many floors
function towerBuilder(nFloors){
    let pyramid = [];
    for (let i = 1; i <= nFloors; i++){
      pyramid.push(' '.repeat(nFloors - i) + '*'.repeat(2*i - 1) + ' '.repeat(nFloors - i));
    }
    return pyramid;
}