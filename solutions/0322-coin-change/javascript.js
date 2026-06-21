function coinChange(coins, amount) {
  const minimum = new Array(amount + 1).fill(amount + 1);
  minimum[0] = 0;
  for (let subtotal = 1; subtotal <= amount; subtotal += 1) {
    for (const coin of coins) {
      if (coin <= subtotal) minimum[subtotal] = Math.min(minimum[subtotal], minimum[subtotal - coin] + 1);
    }
  }
  return minimum[amount] > amount ? -1 : minimum[amount];
}
