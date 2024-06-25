import {Vehicle,Location} from './interface-class';
export class Bus implements Vehicle {
    constructor(private _location:Location){
        
    }
    currentLocation: Location;
    travelTo(location: Location): void {
        console.log(`The Bus is going to ${this._location.x} and ${this._location.y}`);
    }
    get Location(){
        return this._location;
    }
    set Location(loca){
        if(loca.x<0||loca.y<0){
            throw new Error("coordinate numbers cant be negative");
            
        }
        this._location=loca;
    }
}