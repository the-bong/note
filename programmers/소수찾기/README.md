[소수찾기](https://school.programmers.co.kr/learn/courses/30/lessons/42839)

- 완전탐색
- 재귀사용
- try1에서 4개의 테스트 실패. 이는 소수판별함수의 범위설정 문제
```js
  for (let i = 2; i < Math.sqrt(number); i++) {
```
이렇게 하면 121은 11까지 도달하지 못하여 소수로 판별됨.
```js
  for (let i = 2; i < Math.ceil(Math.sqrt(number)); i++) {
```
이렇게 하면 또 2가 정상적이지 않음