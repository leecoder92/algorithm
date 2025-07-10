// 초안
function solution(strArr) {
  const arr = Array.from(Array(30), () => new Array());
  for (const str of strArr) {
    arr[str.length - 1].push(str);
  }
  let answer = 0;
  for (const item of arr) {
    if (item.length > answer) {
      answer = item.length;
    }
  }
  return answer;
}
// 개선
function solution2(strArr) {
  const arr = Array(30).fill(0);
  for (const str of strArr) {
    arr[str.length - 1]++;
  }
  return Math.max(...arr);
}
