class MyClass {
    constructor() {
      // Private variable
      let secretVariable = 'I am a secret';
  
      // Public method
      this.getSecret = function () {
        return secretVariable;
      };
  
      // Public method
      this.modifySecret = function (newValue) {
        secretVariable = newValue;
      };
    }
  
    // Public method
    publicMethod() {
      return 'I am a public method';
    }
  }
  
  // Creating an instance of the class
  const instance = new MyClass("me");
  
  // Accessing public methods
  console.log(instance); // Output: MyClass { getSecret: [Function (anonymous)], modifySecret: [Function (anonymous)] }
  
//   as we can see we are getting above output so this in encapsulation so if  we want to access that props we have to use the methods we  can't access the props like that and we can't modify either 

  // Accessing the "private" method
  console.log(instance.getSecret()); // Output: I am a secret
  
  // Modifying the "private" method
  instance.modifySecret('New secret');
  console.log(instance.getSecret());