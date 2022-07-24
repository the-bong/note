function solution(clothes) {
  const table = clothes.reduce((accumulator, [_, key]) => {
    accumulator[key] = accumulator[key] ? accumulator[key] + 1 : 1;
    return accumulator;
  }, {});

  let answer = 1;
  for (const key in table) { //여기도 고차함수 써보면 어떨까?
    answer *= (table[key] + 1);
  }
  return answer - 1;
}

export {solution};
