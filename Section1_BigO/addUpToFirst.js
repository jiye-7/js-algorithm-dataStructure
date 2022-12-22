/* function addUpTo(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
} */

console.log(addUpTo(3));

/** 연산 시간 */
function addUpTo(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();

console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// n이 커질수록 실행시간이 1:1 비율로 늘어나고, 연산의 갯수는 궁극적으로 N의 곱하기와 연결되어 있다. O(n)
// O(n): n이 커질수록 비례하기 실행 시간이 늘어남
