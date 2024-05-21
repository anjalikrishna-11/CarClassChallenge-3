// Anjali Krishna (U35346496)
// Coding Challenge-3: Car Class Implementation 
class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} accelerated and is now going at ${this.speed} km/h`);
    }
    brake() {
        this.speed -= 5;
        console.log(`${this.make} braked and is now going at ${this.speed} km/h`);
    }
}
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

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

console.log(`The latest speed for the ${car1.make} is ${car1.speed} km/h.`);
console.log(`The latest speed for the ${car2.make} is ${car2.speed} km/h.`);
