function solution(progresses, speeds) {
  const queue = progresses.map((value, i) => Math.ceil((100 - value) / speeds[i]));

  const answer = {};

  let prev = 0;
  for (const value of queue) {
    if (value <= prev) { //value < prev로 해서 4개의 테스트 실패.
      answer[prev]++;
    } else {
      answer[value] = 1;
      prev = value;
    }
  }

  return [...Object.values(answer)];
}
