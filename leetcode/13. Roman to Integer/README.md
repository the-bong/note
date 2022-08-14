[13. Roman to Integer](https://leetcode.com/problems/roman-to-integer/)

- Symbol하나만 처리하면 더 쉽겠지만, 조합이 문제
  - try1
    - 생성될 수 있는 모든 조합들을 map에 하드코딩
    - O(n)이겠으나 저 하드코딩을 좀 어찌 하고싶은데...
    - submit후 실패하였는데, romanMap.set('CD', 400); 이 빠져서 발생한 문제
    - 실제로도 이와같이 이슈가 발생하기 쉬운 단점이 있다.
  - try2
    - discuss를 봐도 딱히 다른코드는 안보인다
    - 다만 조합의 키를 저장한게 아니고, 반복문에서 이를 체크하는 코드들이 보이기 때문에 굳이 또 해볼필요는 없어보임.