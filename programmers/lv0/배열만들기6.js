function solution(arr) {
  const stk = [];
  for (let i = 0; i < arr.length; i++) {
    const lastIndex = stk.length - 1;
    if (stk.length === 0) {
      stk.push(arr[i]);
    } else if (stk[lastIndex] === arr[i]) {
      stk.pop();
    } else {
      stk.push(arr[i]);
    }
  }
  if (stk.length === 0) {
    stk.push(-1);
  }
  return stk;
}
