function solution(my_string, queries) {
  let arr = [...my_string];
  for (let query of queries) {
    const s = query[0];
    const e = query[1];
    const part = arr.slice(s, e + 1);
    const reversePart = part.reverse();
    const tmp = [...arr.slice(0, s), ...reversePart, ...arr.slice(e + 1)];
    arr = tmp;
  }
  return arr.join("");
}
