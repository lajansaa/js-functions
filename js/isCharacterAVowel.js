function isCharacterAVowel(char) {
  var vowels = 'aeiouAEIOU';
  if (vowels.includes(char)) {
    return true;
  } else {
    return false;
  }
}

console.log(isCharacterAVowel('a'));
console.log(isCharacterAVowel('b'));