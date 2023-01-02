function multiTable(number) {
    let string = '';
    for (let i = 1; i <= 10; i++){
        string += `${i} * ${number} = ${i * number}\n`
    }
    return string.slice(0, -1)
}