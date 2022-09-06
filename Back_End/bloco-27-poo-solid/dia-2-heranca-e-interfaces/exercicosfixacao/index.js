// class Superclass {
//     constructor(public isSuper: boolean = true) {}
;
;
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function (key, value) {
        console.log(key, value);
    };
    return ConsoleLogger;
}());
;
var ConsoleLogger2 = /** @class */ (function () {
    function ConsoleLogger2() {
    }
    ConsoleLogger2.prototype.log = function (key, value) {
        console.log(key, value, 'Logger2');
    };
    return ConsoleLogger2;
}());
;
var ExampleDatabase = /** @class */ (function () {
    function ExampleDatabase(Logger) {
        this.Logger = Logger;
    }
    ExampleDatabase.prototype.save = function (key, value) {
        this.Logger.log(key, value);
    };
    return ExampleDatabase;
}());
var DBLogger = new ExampleDatabase(new ConsoleLogger);
var DBLogger2 = new ExampleDatabase(new ConsoleLogger2);
DBLogger.save('xablau', 'vqv');
DBLogger2.save('xablau2', 'vqv2');
