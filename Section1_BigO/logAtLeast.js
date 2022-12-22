function logAtLeast5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

// 만약 n이 1000만 이라면 이 loop는 1000만번 반복 될 것이다. 그럼 5는 중요하지 않다.
// → 이 함수의 빅오를 O(n)이라고 단순화해서 말할 수 있다. n이 커질수록 연산 갯수가 n에 비례해서 늘어나기 때문
