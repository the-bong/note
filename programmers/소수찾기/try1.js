function solution(numbers) {
  const set = new Set();
  
  function helper(strings, numbers) {
    if (strings !== '') set.add(+strings);
    for(let i = 0; i < numbers.length; i++) {
      helper(strings + numbers[i], numbers.slice(0, i) + numbers.slice(i + 1))
    }
    return;
  }
  helper('', numbers);

  return [...set].reduce((accumulator, current) => {
    accumulator += (isPrime(current)) ? 1 : 0;
    return accumulator;
  }, 0)
}

function isPrime(number) {
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
}

