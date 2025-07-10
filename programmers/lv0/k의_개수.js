function solution(i, j, k) {
  let answer = 0;
  for (let num = i; num <= j; num++) {
    const str = String(num);
    for (const item of str) {
      if (item === String(k)) {
        answer++;
      }
    }
  }
  return answer;
}
