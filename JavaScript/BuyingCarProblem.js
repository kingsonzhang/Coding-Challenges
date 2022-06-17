//PREP
//Parameters: Starting price of old car, starting price of new car, savings per month
//  percent decrease in both starting prices per month, increasing 0.5 every 2 months
//Return: an array with two numbers, amount of months needed to save and
//  amount of money left after purchasing the new car
//Examples: Check Codewar examples
//Psuedo
function nbMonths(startPriceOld, startPriceNew, savingPerMonth, percentLossByMonth){
    //Keep track of the amount of months saved
    let count = 0;
    
    //While the savingPerMonth + startPriceOld is less than startPriceNew, keep saving
    while (startPriceOld + count * savingPerMonth < startPriceNew){
      //Increase saving month count by 1
      count++;
      //Every two months, increase percentLossByMonth by 0.5%
      if (count % 2 == 0 && count != 0)
        percentLossByMonth += 0.5;
      //Decrease the prices of the cars every month
      startPriceOld *= (100 - percentLossByMonth) / 100;
      startPriceNew *= (100 - percentLossByMonth) / 100;
    }
    return [count, Math.round(startPriceOld + count * savingPerMonth - startPriceNew)];
}