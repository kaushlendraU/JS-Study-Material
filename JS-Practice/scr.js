// console.log("HelloWorld".split("").reverse().join(" "));


/* let str = "Hello , World";

let sliceStr = str.split(" ").map(function(word) {
    return word.split("").reverse().join("");
})

console.log(sliceStr.join(" ")); */

/* const checkArray = (ele) => console.log(Array.isArray(ele));

checkArray([])
checkArray({}) */

//first method for reverse number

/* const doReverse = (n) => {
    var rev = 0
    while (n > 0) {
        var rem = n % 10;
        rev = rev * 10 + rem;
        n = Math.floor(n / 10);
    }
    return rev;
}

console.log(doReverse(455)); */




/* function doCaptalization(str) {
    var allWords = str.split(" ").map(function (word) {
        return word.charAt(0).toUpperCase() + word.substring(1);
    })
    return allWords.join(" ");
}

console.log(doCaptalization("rishu bhai kaise ho")); */



/* function occ(str) {
    var occurences = {};
    str.split("").forEach((e) => {
        if (occurences.hasOwnProperty(e) === false) {
            occurences[e] = 1;
        }
        else {
            occurences[e]++;
        }
    })
    return occurences;
}

console.log(occ("apple")); */




/* let arr = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;

arr.forEach(e => {
    sum = sum + e;
});

console.log(sum); */




/* let arr = ["hhf", "jwiyuw", 134, "hh", 56, "hhwe", 5];
let sum = 0;

arr.forEach(e => {
    if( typeof e === 'number'){
       sum = sum + e;
    }
});

console.log(sum); */







/* var arr = [
    {name: "harsh", gender: "male"},
    {name: "harshita", gender: "female"},
    {name: "abcd", gender: "nonspecified"},
    {name: "harshi", gender: "female"},
    {name: "avinya", gender: "female"},
]*/





// first method

/* var newarr = arr.filter((e) => {
    return e.gender === 'male'
})
console.log(newarr); */




// second method

/* let count = 0;
arr.forEach((e) => {
    if (e.gender !== "male") count++;
})
for (let index = 0; index < count; index++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[j].gender !== "male") {
            arr.splice(j, 1);
        } 
    }
}
console.log(arr);*/

/* function sayHi() {
    console.log(name);
    console.log(age);
    var name = 'Lydia';
    let age = 21;
  }
  
  sayHi(); */




  
/*   function findBiggestString(str) {
    return str.split(" ").sort(function (a, b) {
        return b.length - a.length;
    })[0];
}
console.log(findBiggestString("hello i am Sam sathhii")); */

