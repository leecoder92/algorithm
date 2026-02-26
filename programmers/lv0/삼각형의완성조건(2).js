function solution(sides) {
  let shorter = 0;
  if (sides[0] > sides[1]) {
    shorter = sides[1];
  } else {
    shorter = sides[0];
  }

  return 2 * shorter - 1;
}
