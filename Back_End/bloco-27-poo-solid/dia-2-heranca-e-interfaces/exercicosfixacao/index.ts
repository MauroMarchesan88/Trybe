// class Superclass {
//     constructor(public isSuper: boolean = true) {}

//     public sayhello() {
//         console.log("Ola mundo");
//     };
// }

// class Subclass extends Superclass {
//     constructor( public isSuper: boolean = false) {
//         super(false);
//     }
// };

// function myfunc(object: Superclass) {
//     if (object.isSuper) console.log('Super!');
//     if (!object.isSuper) console.log('Sub!');
// }

// const superObj = new Superclass();
// const subObj = new Subclass(false);

// myfunc(superObj);
// myfunc(subObj);

// interface MyInterface {
//     myNumber: number;

//     myfunc(myParam: number): string;
// }

// class MyClass implements MyInterface {
//     constructor(public myNumber: number = 1) {

//     }

//     myfunc(myParam: number): string {
//         return "xablau";
//     }
// }

interface Logger {
    log(key: string, value: string): void;
};

interface DataBase {
    Logger: Logger

    save(key: string, value: string): void; 
};

class ConsoleLogger implements Logger {
    log(key: string, value: string) {
        console.log(key, value);
    }
};

class ConsoleLogger2 implements Logger {
    log(key: string, value: string) {
        console.log(key, value, 'Logger2');
    }
};

class ExampleDatabase implements DataBase {
    Logger: Logger;

    constructor(Logger: Logger) {
        this.Logger = Logger
    }

    save(key: string, value: string) {
        this.Logger.log(key, value)
    }

}

const DBLogger = new ExampleDatabase(new ConsoleLogger);
const DBLogger2 = new ExampleDatabase(new ConsoleLogger2);

DBLogger.save('xablau', 'vqv');
DBLogger2.save('xablau2', 'vqv2');