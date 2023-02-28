/**
# 문제
수를 처리하는 것은 통계학에서 상당히 중요한 일이다. 통계학에서 N개의 수를 대표하는 기본 통계값에는 다음과 같은 것들이 있다. 단, N은 홀수라고 가정하자.

산술평균 : N개의 수들의 합을 N으로 나눈 값
중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
최빈값 : N개의 수들 중 가장 많이 나타나는 값
범위 : N개의 수들 중 최댓값과 최솟값의 차이
N개의 수가 주어졌을 때, 네 가지 기본 통계값을 구하는 프로그램을 작성하시오.

# 입력
첫째 줄에 수의 개수 N(1 ≤ N ≤ 500,000)이 주어진다. 단, N은 홀수이다. 그 다음 N개의 줄에는 정수들이 주어진다. 입력되는 정수의 절댓값은 4,000을 넘지 않는다.
 */

//답안(93524KB/628ms)
const [N, ...arr] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);
const average = Math.round(arr.reduce((sum, curr) => (sum += curr), 0) / N);
const median = arr.sort((a, b) => a - b)[(N - 1) / 2];
const mode = getMode(arr);
const range = Math.max(...arr) - Math.min(...arr);

function getMode(arr) {
  let map = new Map();
  arr.forEach((i) => map.set(i, (map.get(i) || 0) + 1));
  let sortedM = [...map].sort((a, b) => b[1] - a[1]);
  if (sortedM.length === 1) {
    return sortedM[0][0];
  } else {
    const filteredArr = sortedM.filter((i) => i[1] === sortedM[0][1]);
    return filteredArr.length === 1 ? filteredArr[0][0] : filteredArr[1][0];
  }
}
console.log([average, median, mode, range].join('\n'));
