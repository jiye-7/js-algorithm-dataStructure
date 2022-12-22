/** 연산 시간 */
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();

console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// 연산 시간에 약간의 변동이 있을 순 있다. 하지만 전반적인 주제는 변화가 없기 때문에 O(1) 빅오가 1이라고 표현할 수 있다. -> 상수
// n의 값이 커질수록, 이 경우에는 아무 변화가 없기 때문에 실행시간은 변하지 않는다.
