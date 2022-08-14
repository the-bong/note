var merge = function(intervals) {
  if (!intervals.length) return [];
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for(const [s, e] of intervals) {
    const prevE = result.at(-1)[1];
    if (prevE >= s) {
      result.at(-1)[1] = Math.max(e, prevE);
    } else {
      result.push([s, e]);
    }
  }
  return result;
};

export {merge};