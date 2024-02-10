// Definition --> Methods & Properties can be passed down into drived class (the class inheriting the parent class props). 
// If we want to have the props of parent class or base class in drived class or child class we can just inherit that props 
// from the parent class we don't have to define separately in clild class again. this is the use of inheritance

// now let's take some example


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
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }

  let result = new Model("Mustang", "GT");

  console.log(result);

  let resultTwo = result.show();

  console.log(resultTwo);

//   as we can see above we are using the name prop of the car class using extends keyword. This is how inheritance are working
