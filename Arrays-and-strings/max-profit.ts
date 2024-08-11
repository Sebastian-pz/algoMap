function maxProfit(prices: number[]): number {
  let minPrice = Infinity;

  let bestSell = 0;

  for (let i = 0; i < prices.length; i++) {
    if (minPrice > prices[i]) minPrice = prices[i];
    const actualSell = prices[i] - minPrice;
    if (actualSell > bestSell) bestSell = actualSell;
  }

  return bestSell;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
