function isPalindrome(word) {
  // Write your algorithm here
  let re = /[^A-Za-z0-9]/g
  str = str.toLowerCase().replace(re, '')
  var varlen = str.length
  for (var x = 0; x < varlen / 2; x++) {
    if (str[x] !== str[varlen - 1 - x]) {
      return false
      
    }
  }
  return true
}


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  iterate from the beginning of the string to the middle of the string
  compare the letter we're iterating over to the corresponding letter at the end of the string
    if the letters don't match, return false

if we reach the middle, and all the letters match, return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
