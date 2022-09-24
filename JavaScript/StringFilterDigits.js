function FilterString(value) {
    const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    return Number(value.split("").filter(x => NUMBERS.includes(x)).join(""));
}