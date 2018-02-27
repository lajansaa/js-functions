function maxOfThree(num1, num2, num3) {
  var max_num = 0;
  if (num1 > num2) {
    max_num == num1;
  } else {
    max_num == num2;
  }

  if (num3 > max_num) {
    return num3;
  } else {
    return max_num;
  }
}

console.log(maxOfThree(1,2,3));