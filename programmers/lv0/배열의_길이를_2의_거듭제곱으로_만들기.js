function solution(arr) {
  const answer = [...arr];
  let power = 0;
  while (true) {
    if (arr.length <= 2 ** power) break;
    power++;
  }
  if (arr.length === 2 ** power) {
    return arr;
  } else {
    for (let i = 0; i < 2 ** power - arr.length; i++) {
      answer.push(0);
    }
    return answer;
  }
}
