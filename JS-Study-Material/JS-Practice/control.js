/* const swap = (n) => {
  let c = n.toString();
  let a = [];
  let b = 0;
  for (let i = 0; i < c.length; i++) {
    a.push(c[c.length - 1 - i]);
    b += a[i];
  }
  let d = parseInt(b);
  if (d > n) {
    return false;
  } else return true;
};
console.log(largestSwap(228)); */

/* function largestSwap(num) {
  let c = num.toString().split('');
  let b = [];
  let a = 0;
  c.forEach(i => {
    b.push(c[c.length - 1 - i]);
    a += b[i];
  });
  let d = parseInt(a);
  return d > num ? false : a;
}
console.log(largestSwap(228)); */

/* drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
  { name: "vodka", price: 15 },
  { name: "wine", price: 25 },
  { name: "sempane", price: 5 },
];

let sortedArray = drinks.sort((a,b) => a.price - b.price);
console.log(sortedArray); */

/* function tuckIn(arr1, arr2) {
  arr1 = [1, 5];
  arr2 = [2, 3, 4];
  
  console.log(arr1);
}
tuckIn();
 */

/* const countTrue = () => {
  var arr = [true, false, false, true, false];
  let changeIntoString = arr.toString();
  let spliitArr = changeIntoString.split(false).length-1;
  console.log(spliitArr);
};
countTrue(); */

/* var array = [true, false, false, true, false];

for (let i = 0; i < array.length; i++) {
  if(typeof array[i] !== true) continue;
  console.log(array[i]);
}
 */



/* // star pattern   

let n = 5;

for (let i = 1; i <= n; i++) {
    let spaces = ' '.repeat(n - i);
    let stars = '*'.repeat(i);
    console.log(spaces + stars);
}

for (let i = n; i >= 1; i--) {
  let spaces = ' '.repeat(n - i);
  let stars = '*'.repeat(i);
  console.log(spaces + stars);
}

// for upsidedown 

for (let i = 1; i <= n; i++) {
  let stars = '*'.repeat(i);
  console.log(stars);
}

for (let i = n; i >= 1; i--) {
  let stars = '*'.repeat(i);
  console.log(stars);
}
 */




/* // number pattern 

for (let i = 1; i <= n; i++) {
  let numbers = '';

  for (let j = 1; j <= i; j++) {
      numbers += j + ' ';
  }

  console.log(numbers);
}

for (let i = n; i >= 1; i--) {
  let numbers = '';

  for (let j = 1; j <= i; j++) {
      numbers += j + ' ';
  }

  console.log(numbers);
}

// for upsidedown

for (let i = 1; i <= n; i++) {
  let spaces = ' '.repeat(n - i);
  let numbers = '';

  for (let j = 1; j <= i; j++) {
      numbers += j + ' ';
  }

  console.log(spaces + numbers);
}
for (let i = n; i >= 1; i--) {
  let spaces = ' '.repeat(n - i);
  let numbers = '';

  for (let j = 1; j <= i; j++) {
      numbers += j + ' ';
  }

  console.log(spaces + numbers);
} */


// how to print Armstrong number  within a given interval 
/* 
function isArmstrongNumber(num) {
  const numStr = num.toString();
  const numDigits = numStr.length;

  let sum = 0;
  for (let i = 0; i < numDigits; i++) {
      sum += Math.pow(parseInt(numStr[i]), numDigits);
  }

  // return sum === num ? true : false; // for checking
  return sum === num;
}

function printArmstrongNumbersInRange(start, end) {
  for (let i = start; i <= end; i++) {
      if (isArmstrongNumber(i)) {
          console.log(i);
      }
  }
}

// Example: Print Armstrong numbers between 100 and 1000

printArmstrongNumbersInRange(100, 1000); */

