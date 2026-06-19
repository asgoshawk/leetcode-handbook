function rob(nums) {
  let twoBack = 0;
  let oneBack = 0;

  for (const amount of nums) {
    [twoBack, oneBack] = [oneBack, Math.max(oneBack, twoBack + amount)];
  }

  return oneBack;
}
