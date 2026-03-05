function solution(arr, query) {
  let tmp = arr;
  for (let i = 0; i < query.length; i++) {
    if (i % 2) {
      tmp = tmp.slice(query[i]);
    } else {
      tmp = tmp.slice(0, query[i] + 1);
    }
  }
  return tmp;
}
