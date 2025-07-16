function solution(num) {
  let answer = 0;
  let collatz = num;
  while (collatz > 1) {
    if (answer === 500) {
      answer = -1;
      break;
    }
    if (collatz % 2 === 0) {
      collatz = collatz / 2;
    } else if (collatz % 2 === 1) {
      collatz = collatz * 3 + 1;
    }
    answer++;
  }
  return answer;
}
