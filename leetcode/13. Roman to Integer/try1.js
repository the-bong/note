/**
 * @param {string} s
 * @return {number}
 */

 const romanMap = new Map();
 romanMap.set('I', 1);
 romanMap.set('V', 5);
 romanMap.set('X', 10);
 romanMap.set('L', 50);
 romanMap.set('C', 100);
 romanMap.set('CD', 400);
 romanMap.set('D', 500);
 romanMap.set('M', 1000);
 romanMap.set('IV', 4);
 romanMap.set('IX', 9);
 romanMap.set('VL', 45);
 romanMap.set('XL', 40);
 romanMap.set('XC', 90);
 romanMap.set('CM', 900);

 var romanToInt = function(s) {
  let result = 0;
  for(let i = 0; i < s.length; i++) {
    if (romanMap.has(s.at(i) + s.at(i+1))) {
      result += romanMap.get(s.at(i) + s.at(i+1));
      i++;
    } else {
      if (romanMap.has(s.at(i))) {
        result += romanMap.get(s.at(i));
      }
    }
  }
  return result;
};

export {romanToInt};