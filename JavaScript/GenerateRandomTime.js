function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

console.log(`${getRandomInt(5) + 18}:${getRandomInt(60)}:${getRandomInt(60)}`);