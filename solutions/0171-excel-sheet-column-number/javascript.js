function titleToNumber(columnTitle) {
  let answer = 0;
  for (const ch of columnTitle) {
    answer = answer * 26 + ch.charCodeAt(0) - 64;
  }
  return answer;
}
