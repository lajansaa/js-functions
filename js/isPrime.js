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

console.log(isPrime(2));
console.log(isPrime(5));
console.log(isPrime(11));
console.log(isPrime(15));
