/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
function countVowels(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let cnt = 0;
  
  str.toLowerCase().split('').forEach((char) => {
      if(vowels.includes(char)) {
          cnt++;
      }
  });
  return cnt;
}
console.log(countVowels('hiduou'));
module.exports = countVowels;