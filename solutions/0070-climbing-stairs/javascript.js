var climbStairs = function (n) {
  let previous = 0;
  let current = 1;
  for (let step = 1; step <= n; step += 1) [previous, current] = [current, previous + current];
  return current;
};
