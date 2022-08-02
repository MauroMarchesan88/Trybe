var TV = /** @class */ (function () {
    function TV(brand, size, resolution, connections) {
        console.log("Creating TV ".concat(brand));
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
    }
    TV.prototype.turnOn = function () {
        console.log("".concat(this.brand, ":\n        ").concat(this.size, ", ").concat(this.resolution, ", ").concat(this.connections));
    };
    return TV;
}());
var t1 = new TV('LG', 40, '1080p', ['HDMI']);
var t2 = new TV('Sony', 55, '4K', ['HDMI', 'wifi']);
t1.turnOn();
t2.turnOn();
