function solution(arr, k) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (answer.includes(arr[i])) continue;
    if (answer.length >= k) break;
    answer.push(arr[i]);
  }
  const left = k - answer.length;
  if (left > 0) {
    for (let i = 0; i < left; i++) {
      answer.push(-1);
    }
  }
  return answer;
}
