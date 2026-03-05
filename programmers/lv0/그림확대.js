function solution(picture, k) {
  var answer = [];
  for (let item of picture) {
    let tmp = "";
    for (let i = 0; i < item.length; i++) {
      for (let j = 0; j < k; j++) {
        tmp += item[i];
      }
    }
    for (let l = 0; l < k; l++) {
      answer.push(tmp);
    }
  }
  return answer;
}
