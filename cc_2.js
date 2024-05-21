// Anjali Krishna (U35346496)
// Coding Challenge-3: Car Class Implementation 
//Implement a Car class with a constructor to initialize the make and speed of the car.

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    // Create a method for increasing the speed of the car by 10 km/h and logging the action.
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} accelerated and is now going at ${this.speed} km/h`);
    }
    // Create a method for decreasing the speed of the car by 5 km/h and logging the action.
    brake() {
        this.speed -= 5;
        console.log(`${this.make} braked and is now going at ${this.speed} km/h`);
    }
}
// Create two car objects with the given test data. 
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

// Test the accelerate and brake methods on the cars.
console.log("Initial speed of", car1.make, "is:" , car1.speed, "km/h");
console.log("Initial speed of", car2.make, "is:" , car2.speed, "km/h");

//Test the methods multiple times for both the cars and log the changes. 
car1.accelerate();
car1.accelerate();
car1.brake();
car1.accelerate();
car1.brake();

car2.accelerate();
car2.brake();
car2.brake();
car2.accelerate();
car2.accelerate();
car2.brake();

//Display the latest speed for both the cars. 
console.log(`The latest speed for the ${car1.make} is ${car1.speed} km/h.`);
console.log(`The latest speed for the ${car2.make} is ${car2.speed} km/h.`);
