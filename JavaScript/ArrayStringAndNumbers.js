function divCon(x){
    return x.reduce((acc, value) => value === Number(value) ? acc + value : acc - Number(value), 0);
}