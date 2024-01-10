function isPalindrome(word) {
  // Write your algorithm here
  for(let i=0; i < word.length / 2; i++){
    // check each letter to the corresponding letter from the end 
    const j = word.length-1-i
    const startChar = word[i]
    const endChar = word[j]
    // if any of these letters dont match return false.
    if(startChar !== endChar) return false
  }
  return true;
}

/* 
  Add your pseudocode here
  iterate through the letters of the word 
  Check whether the letters from the start and middle of the word are equal to the letters from the end to the middle
  if they match return true else return false
*/

/*
  Add written explanation of your solution here
  The function iterates through the letters of the words.
  Then checks whether the letters from the start to the middle match the letters from the ende to the middle of the word.
  If the letters correspond to each other return true.
  Otherwise return false.
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
