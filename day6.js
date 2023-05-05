
//class Movie


class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}


function getPG(movies) {
  return movies.filter(movie => movie.rating === "PG");
}
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG­13");


console.log(casinoRoyale);


 
 
   
 



//Convert the UML diagram to Typescript class. - use number for double





class Shape {
  constructor(color, filled) {
    this.color = color;
    this.filled = filled;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }

  isFilled() {
    return this.filled;
  }

  setFilled(filled) {
    this.filled = filled;
  }

  toString() {
    return `A shape with color ${this.color} and ${this.filled ? 'filled' : 'not filled'}.`;
  }
}

class Circle extends Shape {
  constructor(color, filled, radius) {
    super(color, filled);
    this.radius = radius;
  }

  getRadius() {
    return this.radius;
  }

  setRadius(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }

  toString() {
    return `A circle with radius ${this.radius}, which is a subclass of ${super.toString()}`;
  }
}

class Rectangle extends Shape {
  constructor(color, filled, width, length) {
    super(color, filled);
    this.width = width;
    this.length = length;
  }

  getWidth() {
    return this.width;
  }

  setWidth(width) {
    this.width = width;
  }

  getLength() {
    return this.length;
  }

  setLength(length) {
    this.length = length;
  }

  getArea() {
    return this.width * this.length;
  }

  getPerimeter() {
    return 2 * (this.width + this.length);
  }

  toString() {
    return `A rectangle with width ${this.width} and length ${this.length}, which is a subclass of ${super.toString()}`;
  }
}


//Write a “person” class to hold all the details



class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getAge() {
    return this.age;
  }

  getGender() {
    return this.gender;
  }

  toString() {
    return `${this.getFullName()}, ${this.getAge()} years old, ${this.getGender()}.`;
  }
}
const ram = new Person("ram", "kk", 25, "Male");

console.log(ram.getFullName()); 
console.log(ram.getAge()); 
console.log(ram.getGender()); 










//write a class to calculate the uber price

class Uber {
  constructor(distance) {
    this.distance = distance;
    this.baseFare = 2.50;
    this.perMileRate = 1.50;
    this.minFare = 5.00;
  }

  calculatePrice() {
    const fare = this.baseFare + (this.distance * this.perMileRate);
    return Math.max(fare, this.minFare);
  }
}
const distance = 7.5; // miles
const uber = new Uber(distance);
const price = uber.calculatePrice();
console.log(`The price of the Uber ride is $${price}.`);

