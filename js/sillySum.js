function sumArray(arr) {
  var total = 0;
  arr.forEach(function(element, index){
    total += (element * index);
  });
  return total;
}

console.log(sumArray([1,2,3]));