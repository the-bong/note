var getHint = function(secret, guess) {
  let bulls = 0;
  let cows = 0;

  const map = new Map();
  [...secret].forEach(s => map.set(s, 1 + (map.has(s) ? map.get(s) : 0)));

  [...guess].forEach((s, index) => {
    if (secret[index] === s) {
      bulls++;
    }
    if (map.has(s) && map.get(s) > 0) {
      map.set(s, map.get(s) - 1);
      cows++;
    }
  })
  return `${bulls}A${cows - bulls}B`
};

export {getHint};