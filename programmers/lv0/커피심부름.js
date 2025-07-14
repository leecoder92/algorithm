function solution(order) {
  let answer = 0;
  for (const item of order) {
    if (item.includes("americano") || item === "anything") {
      answer += 4500;
    } else {
      answer += 5000;
    }
  }
  return answer;
}
