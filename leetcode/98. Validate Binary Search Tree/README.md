[98. Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)

- 기본적인 DFS
  - try1 submit실패
  - [5,4,6,null,null,3,7]의 경우 false가 되야함
    - <img width="627" alt="Validate Binary Search Tree" src="https://user-images.githubusercontent.com/48943350/184530618-ae9669a4-18ed-4d56-96d8-183caf55e7c7.png">
    - 그러나 내가 작성한 코드는 5의 left : 4, right : 6. 6의 left : 4, right : 7로 되버려서 true.
  - try1는 재귀만 하지 DFS로 모든것을 비교하지 않음.
    - try2에서 DFS로 처리.
