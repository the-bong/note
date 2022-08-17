/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let left = 0;
  let right = 0;
  let max = 0;
  const set = new Set();

  while(right < s.length) {
    if (!set.has(s.at(right))) {
      set.add(s.at(right));
      right++;
      max = Math.max(max, set.size);
    } else {
      set.delete(s.at(left));
      left++;
    }
  }
  
  return max;
};

export {lengthOfLongestSubstring}