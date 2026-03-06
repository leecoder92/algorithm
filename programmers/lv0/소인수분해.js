function solution(n) {
  var answer = [];
  let i = 2;
  let tmp = n;
  while (i <= n) {
    if (tmp % i === 0) {
      tmp = tmp / i;
      if (!answer.includes(i)) {
        answer.push(i);
      }
    } else {
      i += 1;
    }
  }
  return answer;
}
