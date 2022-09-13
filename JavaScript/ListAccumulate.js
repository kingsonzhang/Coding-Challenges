function countDevelopers(list) {
    return list.reduce((acc, x) => 
      (x.continent === 'Europe' && x.language === 'JavaScript') ? acc + 1 : acc, 0);
}