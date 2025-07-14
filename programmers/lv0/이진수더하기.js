function solution(bin1, bin2) {
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}

function solution2(bin1, bin2) {
  return decimalToBinary(binaryToDecimal(bin1) + binaryToDecimal(bin2));
}

function binaryToDecimal(bin) {
  let acc = 0;
  const arr = bin.split("").reverse();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "0") continue;
    acc += 2 ** i;
  }
  return acc;
}

function decimalToBinary(dec) {
  if (dec === 0) return "0";
  let str = "";
  let divider = dec;
  while (divider !== 1) {
    str += divider % 2;
    divider = Math.floor(divider / 2);
  }
  str += 1;
  return str.split("").reverse().join("");
}
