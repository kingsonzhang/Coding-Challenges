function abbrevName(name){
    let words = name.split(' ');
    return `${words[0][0].toUpperCase()}.${words[1][0].toUpperCase()}`;
}