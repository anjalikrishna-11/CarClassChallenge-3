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
