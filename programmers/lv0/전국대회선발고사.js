function solution(rank, attendance) {
  let first = null;
  let second = null;
  let third = null;
  for (let i = 0; i < rank.length; i++) {
    if (!attendance[i]) continue;
    if (first === null) {
      first = i;
    } else if (rank[i] < rank[first]) {
      third = second;
      second = first;
      first = i;
    } else if (second === null) {
      second = i;
    } else if (rank[i] < rank[second]) {
      third = second;
      second = i;
    } else if (third === null) {
      third = i;
    } else if (rank[i] < rank[third]) {
      third = i;
    }
  }

  return first * 10000 + second * 100 + third;
}
