/**
# 문제
수직선 위에 N개의 좌표 X1, X2, ..., XN이 있다. 
이 좌표에 좌표 압축을 적용하려고 한다.
Xi를 좌표 압축한 결과 X'i의 값은 Xi > Xj를 만족하는 서로 다른 좌표의 개수와 같아야 한다.
X1, X2, ..., XN에 좌표 압축을 적용한 결과 X'1, X'2, ..., X'N를 출력해보자

🌟 좌표 압축: 해당 좌표값보다 작은 좌표값들의 개수로 좌표값을 대체한다는 것을 의미

# 입력
첫째 줄에 N이 주어진다.
둘째 줄에는 공백 한 칸으로 구분된 X1, X2, ..., XN이 주어진다.
 */
//답안
const [N, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);
let sortedArr = [...new Set(input)].sort((a, b) => a - b);
const getIndex = (arr, target, left, right) => {
  let mid = 0;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};
console.log(
  input.map((i) => getIndex(sortedArr, i, 0, sortedArr.length - 1)).join(' ')
);
