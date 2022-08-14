var merge = function(intervals) {
  const result = [];
  intervals.sort((a, b) => a[0] - b[0]);
  
  for(const interval of intervals) {
    if (result.length === 0) {
      result.push(interval);
    } else {
      const lastArrResult = result[result.length - 1];
      if ((lastArrResult[1] >= interval[0])) {
        result[result.length - 1] = [Math.min(lastArrResult[0], interval[0]), Math.max(lastArrResult[1], interval[1])]
      } else {
        result.push(interval);
      }
    }
  }
  return result;
};

export {merge};