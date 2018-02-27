function merge(arr1, arr2) {
  var final_arr = [];
  while (!(arr1.length == 0 && arr2.length == 0)) {
    if (arr1[0] < arr2[0]) {
      final_arr.push(arr1[0]);
      arr1.shift();
    } else {
      final_arr.push(arr2[0]);
      arr2.shift();
    }
  }
  return final_arr;
}

console.log(merge([2,4,5,8,9], [3,6,11]))