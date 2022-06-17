function matrixAddition(a, b){
    return a.map(function(row, rowIndex){
      return row.map(function(column, columnIndex){
        return column + b[rowIndex][columnIndex];
      })
    })
}