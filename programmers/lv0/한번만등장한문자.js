function solution(s) {
  let answer = [];
  const sorted = s.split("").sort();
  let checked = false;
  let checkAlphabet = "";
  for (const str of sorted) {
    if (checkAlphabet !== str) {
      checkAlphabet = str;
      checked = false;
      answer.push(str);
    } else {
      if (!checked) {
        checked = true;
        answer.pop();
      } else {
        continue;
      }
    }
  }
  return answer.join("");
}
