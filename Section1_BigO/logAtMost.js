function logAtMost5(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

// n이 커져도 아무 영향을 주지 않는다. n이 5보다 크면 무조건 n보다 더 작은 5를 선택할 것이기 때문(Math.min())
// n이 100만이라도 loop는 5번만돌고, n이 2라면 loop는 2번만 돌 것이다.
// 그렇기 때문에 n이 커질수록 빅오는 상수라고 단순화 할 수 있다는 것이다.
// O(1)
