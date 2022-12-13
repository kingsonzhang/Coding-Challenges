function isSantaClausable(obj) {
    return ["sayHoHoHo", "distributeGifts", "goDownTheChimney"].every(x => typeof obj[x] === "function");
}