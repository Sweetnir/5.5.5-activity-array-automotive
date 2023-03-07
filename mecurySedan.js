//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.maxPassengers = 5;
    this.passengers = 0;
    this.numberOfWheels = 4;
    this.maxSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
}

checkService () {
    if (this.mileage > 3000) {
        this.scheduleService = true
        return this.scheduleService;
    }
}

start() {
    if(this.fuel > 0) {
        console.log('Lets ride!')
        return this.started = true;
    } else {
        console.log('No gas!')
        return this.started = false;
    }
}

loadPassenger(num) {
    if (this.passengers < this.maxPassengers) {
        if ((num + this.passenger) <= this.maxPassengers) {
            this.passenger = num;
            return this.passenger;
        } else {
            console.log(this.model + " " + this.make + "not enough space.");
        }
    } else {
        console.log(this.model + " " + this.make + "fill");
    }
}
}
//this shows how to call from this module...
let myCar = new Car('mercury', 'rad_sedan', '2002', 'white', 50000)

myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.checkService()

console.log(myCar)
