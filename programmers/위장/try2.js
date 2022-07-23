function solution(clothes) {
  const table = clothes.reduce((accumulator, [_, key]) => {
    accumulator[key] = accumulator[key] ? accumulator[key] + 1 : 1;
    return accumulator;
  }, {});

  return Object.values(table).reduce((accumulator, current) => {
    return accumulator *= (current + 1);
  }, 1) -1;
}

export {solution};
