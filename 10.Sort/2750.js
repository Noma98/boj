/*
# 문제 
첫째 줄에 수의 개수 N(1 ≤ N ≤ 1, 000)이 주어진다.둘째 줄부터 N개의 줄에는 수가 주어진다. 
이 수는 절댓값이 1, 000보다 작거나 같은 정수이다.수는 중복되지 않는다.
*/

//첫번째 답안 (11260KB/336ms)
const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
arr.sort((a, b) => a - b).forEach((i) => console.log(i));

//두번째 답안 (11208KB/208ms)
require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .sort((a, b) => a - b)
  .forEach((i) => console.log(+i));
