/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let area = 0;

  while(left < right) {
    area = Math.max(area, (right - left) * Math.min(height.at(right), height.at(left)));
    if (height.at(left) > height.at(right)) {
      right--;
    } else {
      left++;
    }
  }
  return area;
};

export {maxArea};