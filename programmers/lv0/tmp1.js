function solution(coords, query) {
  let answer = [];
  let minX = 100_000_000;
  let minY = 100_000_000;
  let maxX = -100_000_000;
  let maxY = -100_000_000;

  for (let i = 0; i < coords.length; i++) {
    const [x, y] = coords[i];
    if (x < minX) minX = x;
    if (y < minY) minY = y;
    if (x > maxX) maxX = x;
    if (y > maxY) maxY = y;
  }

  for (let i = 0; i < query.length; i++) {
    const [r, c] = query[i];
    if (r < 0 || c < 0 || r > maxY - minY || c > maxX - minX) {
      answer.push(-1);
    } else {
      let isSame = false;
      for (let j = 0; j < coords.length; j++) {
        const [x, y] = coords[j];
        if (r === -(y - minY) && c === x - minX) {
          isSame = true;
          break;
        }
      }
      if (isSame) {
        answer.push(1);
      } else {
        answer.push(0);
      }
    }
  }
  return answer;
}
