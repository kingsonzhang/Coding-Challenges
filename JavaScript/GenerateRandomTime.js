function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

console.log(`${getRandomInt(5) + 18}:${String(getRandomInt(60)).padStart(2, '0')}:${String(getRandomInt(60)).padStart(2, '0')}`);