[299. Bulls and Cows](https://leetcode.com/problems/bulls-and-cows/)

- HASH? MAP으로 해야하는거 아닌가?
- try1에서는 expect(getHint('1122', '1222')).toBe('3A0B');에서 걸림
  - 2를 먼저 찾아버리니 B가 올라가버림.