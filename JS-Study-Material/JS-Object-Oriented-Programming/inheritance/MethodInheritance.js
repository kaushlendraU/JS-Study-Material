// we can also inherit methods of base class parent using super keyword just like before 

class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show1() {
      return this.present() + ', it is a ' + this.model;
    }

    // OR

    show2() {
      return super.present() + ', it is a ' + this.model;
    }
  }

//   let's make another class 

  let result = new Model("Mustang", "GT"); // Model { carname: 'Mustang', model: 'GT' }

  console.log(result); 

  let resultTwo = result.show();

  console.log(resultTwo); // I have a Mustang, it is a GT


  // as we can see we are alredy using the present() method in child Model class in line no 18 but if you want to use super keyword you can also use that