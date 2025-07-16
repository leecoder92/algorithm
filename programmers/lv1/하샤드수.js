function solution(x) {
  const arr = (x + "").split("");
  const sum = arr.reduce((acc, cur) => acc + Number(cur), 0);
  return x % sum === 0;
}
