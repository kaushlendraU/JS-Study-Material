// 1st Exercise => How to get file extention.


// answer

/* const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));
console.log(getFileExtension('index.html')); */



// 2nd Exercise => replace every charecter in the given string with the charecter following it in alphabet.
/* imp key points we have to remember
1. String.fromCharCode
2. charCodeAt */


// answer

/* const moveCharForword = (str) => str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
console.log(moveCharForword('abcd')); */



//3rd Exercise => get the current date and time as a string.


/* const now = new Date();
const currentDateTime = now.toLocaleString();
console.log(currentDateTime); */

//3rd Exercise(part-2) => get the current date.

/* const formatDate = (date = new Date()) => {
     let day = date.getDate();
     let month = date.getMonth() + 1;
     let year = date.getFullYear();
     let hours = date.getHours();
     let minutes = date.getMinutes();
     let seconds = date.getSeconds();
     return `The date is ${day}/${month}/${year} and the time is ${hours}:${minutes}:${seconds}`;
}
console.log(formatDate()); */


//4th Exercise => Add new before string and if there's alrady one leave it be.

// Answer

/* const concatNew = (str) => str.indexOf('New!') === 0 ? str : `New! ${str}`;
console.log(concatNew("Office"));
console.log(concatNew("New! Office")); */


//5th Exercise => Write new string from the first and last 3 letters of the given string.


// Answer

/* const makeNewString = (str) => str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);
console.log(makeNewString("Risabcdabh"));*/


//6th Exercise => Write half  of the given string if str is even.

// Answer

/* const writeNewString = (str) => str.slice(0, str.length/2);
console.log(writeNewString("Rishab")); */


//7th Exercise => Concatenate 2 strings except thier 1st character.

// Answer

/* const Concatenate = (str1, str2) => str1.slice(1) + str2.slice(1);
console.log(Concatenate("YMe ", "ERishabh")); */


//8th Exercise => Find which one is nearest to 100.

// Answer

/* const closeseTo100 = (a, b) => (100 - a) < (100 - b) ? a : b;
console.log(closeseTo100(99, 1));
console.log(closeseTo100(1, 99)); */


//9th Exercise => check a given string contains 2 to 4 occurrences of specified character.

// Answer

/* const countChar = (str, char) => str.split('').filter(ch => ch === char).length;
const contains2To4 = (str, char) => countChar(str, char) >= 2 && countChar(str, char) <= 4;

console.log(contains2To4("ohh", "h")); */


//10th Exercise => Find the number of even digits in an array of integers.

// Answer

/* const countEvenNumbers = (arr) => arr.filter(num => num % 2 === 0).length;
console.log(countEvenNumbers([1,4,5,6,2,9,8])); */
