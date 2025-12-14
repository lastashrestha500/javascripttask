class Vehicle {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  drive() {
    console.log(`${this.brand} can start`);
  }
}

class Bike extends Vehicle {
  constructor(brand, model, year, color) {
    super(brand, model, year);
    this.color = color;
  }

  drive() {
    super.drive();
    console.log(`The bike is fast and color is ${this.color}`);
  }
}

class Student {
  drive() {
    console.log("Student is studying");
  }
}

class Programmer extends Student {
  constructor(marks) {
    super();
    this.marks = marks;
  }

  drive() {
    super.drive();
    console.log(`${this.marks} is good`);
  }
}
const bike1 = new Bike("Yamaha", "R15", 2023, "Blue");
bike1.drive();

const programmer1 = new Programmer(90);
programmer1.drive();
