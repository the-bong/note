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
  for (let i = 2; i <= Math.sqrt(number); i++) { //여기가 문제, 121은 11때문에 소수인데, 11까지 못감. Math.ceil(Math.sqrt... 로 하면 2가 처리안됨.
    if (number % i === 0) return false;
  }
  return number > 1;
}

