var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  const isAlphanumeric = (character) => /[a-z0-9]/i.test(character);
  while (left < right) {
    while (left < right && !isAlphanumeric(s[left])) left += 1;
    while (left < right && !isAlphanumeric(s[right])) right -= 1;
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    left += 1;
    right -= 1;
  }
  return true;
};
