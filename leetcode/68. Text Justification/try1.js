/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
 var fullJustify = function(words, maxWidth) {
  const result = [];
  for (const word of words) {
    if (result.at(-1) && result.at(-1).length <= maxWidth && result.at(-1).length + word.length <= maxWidth) {
      result[result.length - 1] = result.at(-1) + word + ' ';
    } else {
      result.push(word + ' ');
    }
  }

  const res = [];
  for (let [index, word] of result.entries()) {
    res.push(pretty(word, maxWidth, index === result.length - 1));
  }
  return res;
};

function pretty(word, maxWidth, isLast) {
  const splited = word.split(' ');
  splited.pop();
  let s = splited.join('');
  let emptyNums = maxWidth - s.length;
  let result = '';
  if (splited.length === 1) {
    result += splited.at(-1) + ' '.repeat(emptyNums);
  } else {
    for(let i = 0; i < splited.length; i++) {
      if (isLast) {
        if (i === splited.length - 1) {
          result += splited[i] + ' '.repeat(emptyNums);
        } else {
          result += splited[i] + ' ';
          emptyNums = emptyNums - 1;
        }
      } else {
        if (i === splited.length - 1) {
          result += splited[i];
        } else {
          const emptyCount = Math.ceil(emptyNums / (splited.length-1-i));
          result += splited[i] + ' '.repeat(emptyCount);
          emptyNums -= emptyCount
        }
      }
    }
  }
  return result;
}

export {fullJustify};