function countUpAndDown(n) {
  console.log('Going up!');

  /** O(n): n이 커질수록 루프가 실행하는 횟수가 늘어나니까. */
  for (let i = 0; i < n; i++) {
    // n이 늘어날수록 루프안에 연산이 있다.
    console.log(i);
  }

  console.log('At the top! \nGoing down...');

  /** O(n): 여기도 똑같이 n이 커질수록 루프가 실행하는 횟수가 늘어난다. */
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }

  console.log('Back down. Bye!');
}

// 빅오가 2n이라고 생각할 수 있는데, 그건 신경쓰지 않는다.  큰 그림만 신경쓰기 → O(n) === 빅오 n
