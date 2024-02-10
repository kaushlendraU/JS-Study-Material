// as we can see in the example below us same method sound have different forms in differet classes.This is polymorphism

class Animal {

    sound(){
        console.log("Animal make diffrent sounds");
    }
}

class Cat {

    sound(){
        console.log("Cat Mews");
    }
}

class Dog {

    sound(){
        console.log("Dog Barks");
    }
}

let anymal = new Animal();

let seru = new Dog();

let pussinboots  = new Cat();


anymal.sound();

seru.sound();

pussinboots.sound();
