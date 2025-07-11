function solution(n) {
  let answer = 1;
  let acc = 1;
  while (answer <= n) {
    acc += 1;
    answer *= acc;
  }
  return acc - 1;
}
