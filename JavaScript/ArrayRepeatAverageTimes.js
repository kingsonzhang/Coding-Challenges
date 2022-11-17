function averageLength(array){ 
    return array.map(x => x[0].repeat(Math.round(array.reduce((acc, x) => acc + x.length, 0) / array.length)));
}  