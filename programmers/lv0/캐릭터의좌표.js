function solution(keyinput, board) {
  let x = 0;
  let y = 0;
  const minX = -((board[0] - 1) / 2);
  const maxX = (board[0] - 1) / 2;
  const minY = -((board[1] - 1) / 2);
  const maxY = (board[1] - 1) / 2;

  for (const keyItem of keyinput) {
    if (keyItem === "left") {
      if (x > minX) {
        x -= 1;
      }
    } else if (keyItem === "right") {
      if (x < maxX) {
        x += 1;
      }
    } else if (keyItem === "down") {
      if (y > minY) {
        y -= 1;
      }
    } else if (keyItem === "up") {
      if (y < maxY) {
        y += 1;
      }
    }
  }
  return [x, y];
}
