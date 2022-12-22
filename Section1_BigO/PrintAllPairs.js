function printAllPairs(n) {
  // O(n)
  for (let i = 0; i < n; i++) {
    // O(n)
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

// n이 늘어날 수록 2개의 for문의 연산들이 n의 값만큼 늘어난다.
// O(n)으로 단순화되는 O(2n)이 아니다. -> 중첩이 되어 있기 때문
// => O(n) 연산 안에 O(n) 연산이 있으면 O(n 제곱)이 된다. => n이 커질수록 실행 시간이 n제곱의 값으로 늘어난다.(n * n 만큼 늘어난다.)
