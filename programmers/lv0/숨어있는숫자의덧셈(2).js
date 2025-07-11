function solution(my_string) {
  return my_string
    .split(/[a-zA-Z]/)
    .filter((v) => v)
    .map((item) => Number(item))
    .reduce((acc, cur) => acc + cur, 0);
}
