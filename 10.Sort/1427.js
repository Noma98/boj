/**
# 문제
배열을 정렬하는 것은 쉽다. 수가 주어지면, 그 수의 각 자리수를 내림차순으로 정렬해보자.
 
# 입력
첫째 줄에 정렬하려고 하는 수 N이 주어진다. N은 1,000,000,000보다 작거나 같은 자연수이다.
 */

//답안1(9324KB/144ms)
console.log(
  require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('')
    .sort((a, b) => b - a)
    .join('')
);

//답안2(9320KB/124ms)
//비교하는 수가 한자리 수일 경우 그냥 sort()를 사용하자.
console.log(
  require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('')
    .sort()
    .reverse()
    .join('')
);
