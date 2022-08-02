class TV {
    brand: string;
    size: number;
    resolution: string;
    connections: string[];

    constructor(brand: string, size: number, resolution: string, connections: string[]) {
        console.log(`Creating TV ${brand}`);
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
    }

    turnOn() {
        console.log(`${this.brand}:
        ${this.size}, ${ this.resolution}, ${this.connections}`);
    }
}

const t1 = new TV('LG', 40, '1080p', ['HDMI']);
const t2 = new TV('Sony', 55, '4K', ['HDMI', 'wifi']);

t1.turnOn();
t2.turnOn();