import {Bus} from './moduleExampleBus';
export interface Location {
    x: number;
    y: number;
}

export interface Vehicle {
    currentLocation: Location;
    travelTo(location: Location): void;
}



class Car implements Vehicle {
    color:string;

    constructor(location: Location,color?:string){
        this.currentLocation=location;

    }
    currentLocation: Location;
    travelTo(location: Location): void {
        console.log(`The Car is going to ${location.x} and ${location.y}`);
    }
    
}

const car1: Car = new Car({ x: 1, y: 2 } as Location);
car1.travelTo({ x: 3, y: 4 } as Location); 


const bus1: Bus = new Bus({ x: 4, y: 6 } as Location);
bus1.travelTo({ x: 4, y: 6 } as Location); 
console.log(bus1.Location);
bus1.Location={x:1,y:4};
console.log(`new coordinates is ${bus1.Location.x} : ${bus1.Location.y}`);


