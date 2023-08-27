/*
Title: Unique Characters

Description:
Write a function named hasUniqueCharacters that takes a string as input and returns true if the string contains all unique characters, and false otherwise. You can assume that the string contains only lowercase alphabets (a-z).

Example:
console.log(hasUniqueCharacters("abcdefg")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false
*/

function hasUniqueCharacters(str) {
  if (typeof str !== 'string') {
    throw new Error('Input harus berupa string');
  }

  let charMap = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (/^[a-z]$/.test(char)) {
      if (charMap[char]) {
        return false;
      }
      charMap[char] = true;
    } else {
      
      return false;
    }
  }
  return true;
}

try {
  console.log(hasUniqueCharacters("abcdefg")); 
  console.log(hasUniqueCharacters("helo"));   
  console.log(hasUniqueCharacters(5));         
} catch (error) {
  console.error(error.message);
}




