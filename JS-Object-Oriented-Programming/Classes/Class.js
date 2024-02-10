// note --> JavaScript is not a class-based object-oriented language. But it still has ways of using object oriented programming (OOP)
// As we already used the class in our previous practice constructors.js file so we have the idea 
// let,s take another example
/* 
class Polygon {
    constructor(height, width) {
      this.area = height * width;
    }
  }
  
  let result = new Polygon(4,3)
  console.log(result);  // 12

//   we can also print the result directly somthing like this 

console.log(new Polygon(4, 3).area); // 12

// So basically classes are nothing but a reuseable block of code like object  */

const shape = {
  radius: 10,
  diameter() {
  return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
 };
 
 console.log(shape.diameter());
 console.log(shape.perimeter());