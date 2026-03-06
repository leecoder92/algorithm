// https://school.programmers.co.kr/learn/courses/30/lessons/120883

function solution(id_pw, db) {
  for (const info of db) {
    if (id_pw[0] === info[0] && id_pw[1] === info[1]) {
      return "login";
    } else if (id_pw[0] === info[0] && id_pw[1] !== info[1]) {
      return "wrong pw";
    }
  }
  return "fail";
}
