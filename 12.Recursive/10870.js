/**
# 문제
피보나치 수는 0과 1로 시작한다. 
0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1이다. 
그 다음 2번째 부터는 바로 앞 두 피보나치 수의 합이 된다.
이를 식으로 써보면 Fn = Fn-1 + Fn-2 (n ≥ 2)가 된다.
n=17일때 까지 피보나치 수를 써보면 다음과 같다.

  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597

n이 주어졌을 때, n번째 피보나치 수를 구하는 프로그램을 작성하시오.

# 입력
첫째 줄에 n이 주어진다. n은 20보다 작거나 같은 자연수 또는 0이다.
 */

//답안(9336KB/120ms) -> 재귀함수로 풀이
const input = require('fs').readFileSync('/dev/stdin').toString().trim();
function fibonacci(initArr, target) {
  if (initArr[target] !== undefined) {
    return initArr[target];
  }
  initArr.push(initArr[initArr.length - 1] + initArr[initArr.length - 2]);
  return fibonacci(initArr, target);
}
console.log(fibonacci([0, 1], +input));

//답안(93336KB/120ms) -> 반복문으로 풀이
const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
let arr = [0, 1];
if (n >= 2) {
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
}
console.log(arr[n]);
