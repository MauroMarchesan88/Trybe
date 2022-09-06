"use strict";
class TV {
    constructor(brand, size, resolution, connections) {
        console.log(`Creating TV ${brand}`);
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
    }
    // turnOn() {
    //     console.log(`${this.brand}:
    //     ${this.size}, ${ this.resolution}, ${this.connections}`);
    // }
    get connectedTo() {
        return this._connectedTo;
    }
    set connectedTo(newValue) {
        if (!newValue || this._connections.includes(newValue)) {
            this._connectedTo = newValue;
            console.log(this._connectedTo, `passou ${newValue}`);
        }
        console.log("Sorry, connection unavailable!", `passou ${newValue}`);
    }
}
const t1 = new TV('LG', 40, '1080p', ['HDMI']);
const t2 = new TV('Sony', 55, '4K', ['HDMI', 'wifi']);
// t1.turnOn();
// t2.turnOn();
t1.connectedTo = 'HDMI';
t2.connectedTo = 'Ethernet';
