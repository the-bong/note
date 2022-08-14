[56. Merge Intervals](https://leetcode.com/problems/merge-intervals/)

- try1, 2와 엄청난 차이는 없다.
- 다만 array에 대한 접근을 []가 아닌 at이 가능하다는점을 알 수 있었고, 반복문에 destructuring을 적용하여 좀 더 가독성있게 바꾸었다.
  - [1]을 쓰지 말고, arr[arr.length - 1]을 쓰지 말고, at(1), at(-1)을 쓰자.