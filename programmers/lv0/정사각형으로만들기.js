function solution(arr) {
  const rowLength = arr.length;
  const colLength = arr[0].length;
  if (rowLength > colLength) {
    for (let i = 0; i < rowLength; i++) {
      for (let j = 0; j < rowLength - colLength; j++) {
        arr[i].push(0);
      }
    }
  } else if (rowLength < colLength) {
    for (let i = 0; i < colLength - rowLength; i++) {
      const tmp = [];
      for (let j = 0; j < colLength; j++) {
        tmp.push(0);
      }
      arr.push(tmp);
    }
  }
  return arr;
}
