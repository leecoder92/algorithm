function solution(numbers) {
  let answer = numbers;
  const numArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < 10; i++) {
    const tmp = numArr[i];
    if (answer.includes(tmp)) {
      answer = answer.replaceAll(tmp, String(i));
    }
  }
  return parseInt(answer, 10);
}
