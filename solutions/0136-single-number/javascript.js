var singleNumber = function (nums) {
  return nums.reduce((answer, number) => answer ^ number, 0);
};
