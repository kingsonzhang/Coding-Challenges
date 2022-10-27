function minimumBalance(transfers, amount){
    let transferA = 0;
    let transferB = 0;
    let minA = 0;
    let minB = 0;
    for (let i = 0; i < transfers.length; i++){
        if (transfers[i] == 'A'){
            transferB -= amount[i];
            if (transferB < minB)
                minB = transferB;
        }
        else{
            transferA -= amount[i];
            if (transferA < minA)
                minA = transferA;
        }
    }
    return [-minA, -minB];
}