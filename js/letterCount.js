function letterCount(word) {
  var hash = {};
  for (var i = 0; i < word.length; i++) {
    var letter = word[i].toLowerCase();
    if (!(letter in hash)) {
      hash[letter] = 1;
    } else {
      hash[letter]++;
    }
  }
  for (var key in hash) {
    console.log(key + ' - ' + hash[key]);
  }
}

console.log(letterCount('apPlE'));