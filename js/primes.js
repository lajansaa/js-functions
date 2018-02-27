function isPrime(num) {
  if (num < 2) {
    //negative numbers, 1 and 0 are not prime
    return false;
  } else if (num == 2) {
    //2 is a prime although it's even
    return true;
  } else if (num % 2 == 0) {
    //all even numbers are not prime
    return false;
  } else {
    for (var i = 3; i * i < num; i += 2) {
      //num must be bigger than i square
      //for num to be divisible by i 
      if (num % i == 0) {
        //if num is divisible by i then it's not prime
        return false;
      }
    }
  return true;
  }
}

function primes(max) {
  var primeArr = [2];
  for (var i = 3; i <= max; i += 2) {
    if (isPrime(i)) {
      primeArr.push(i);
    }
  }
  return primeArr;
}

console.log(primes(11));