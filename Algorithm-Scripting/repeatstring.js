// Basic Algorithm Scripting: Repeat a String Repeat a StringPassed:

// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

// repeatStringNumTimes("*", 3) should return "***".

// repeatStringNumTimes("abc", 3) should return "abcabcabc".

// repeatStringNumTimes("abc", 4) should return "abcabcabcabc".

// repeatStringNumTimes("abc", 1) should return "abc".

// repeatStringNumTimes("*", 4) should return "****".

// repeatStringNumTimes("abc", -2) should return "".

// The built-in repeat() method should not be used.

// repeatStringNumTimes("abc", 0) should return "".

function repeatStringNumTimes(str, num) {
    if (num < 0){
      return ""
    }
    let returnedStr= ""
    while(num > 0) {
      returnedStr += str
      num--
    }
    return returnedStr;
  }
  repeatStringNumTimes("abc", 3);