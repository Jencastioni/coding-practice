// Basic Algorithm Scripting: Reverse a StringPassed:

// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.

function reverseString(string) {
    let newString = string.split('').reverse().join('')
    return newString;
  }
  
  reverseString("hello");
  