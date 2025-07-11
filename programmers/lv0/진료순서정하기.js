function solution(emergency) {
  const answer = Array(emergency.length).fill(1);
  for (let i = 0; i < emergency.length - 1; i++) {
    for (let j = i + 1; j < emergency.length; j++) {
      if (emergency[i] > emergency[j]) {
        answer[j]++;
      } else {
        answer[i]++;
      }
    }
  }
  return answer;
}
