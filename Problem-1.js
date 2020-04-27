var maxProfit = function(prices) {
  let buy = 0;
  let sell = 0;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    //Deals with initial values
    if (i == 0) {
      buy = prices[i];
      sell = prices[i];
    }
    // When lower price is found
    else if (prices[i] < buy) {
      //check if our current buy & sell is greater than our previously recorded profit
      if (sell - buy > profit) {
        profit = sell - buy;
      }
      buy = prices[i];
      sell = 0;
    }
    //check if new price is greater than our current sell
    else if (prices[i] > buy && prices[i] > sell) {
      sell = prices[i];
    }
  }

  //final check for our profits
  if (profit < sell - buy) {
    profit = sell - buy;
  }
  return profit > 0 ? profit : 0;
};

console.log(maxProfit(prices));
