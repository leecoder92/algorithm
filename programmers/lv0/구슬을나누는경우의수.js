function solution(balls, share) {
  function factorial(i) {
    let a = 1n;
    for (let j = 1; j <= i; j++) {
      a *= BigInt(j);
    }
    return a;
  }
  return factorial(balls) / (factorial(balls - share) * factorial(share));
}
