class Person {

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
<<<<<<< HEAD
    //@TODO Missing implementation
    console.log("Usao");
=======
    return 'Dog';
>>>>>>> cenkovic/dog-2
  }

}

console.log(new Person('Pera', 'Peric').getFullName());
