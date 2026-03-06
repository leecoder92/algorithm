// https://school.programmers.co.kr/learn/courses/30/lessons/120869

function solution(spell, dic) {
  var answer = 2;
  for (const item of dic) {
    if (spell.length === item.length) {
      let tmp = true;
      for (const apl of spell) {
        if (!item.includes(apl)) {
          tmp = false;
          break;
        }
      }
      if (tmp) {
        answer = 1;
        break;
      }
    }
  }
  return answer;
}
