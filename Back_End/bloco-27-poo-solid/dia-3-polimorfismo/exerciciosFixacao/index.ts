abstract class Characters {
    abstract talk(): void;
    abstract specialMove(): void;
}

class Meleecharacter extends Characters{
    constructor(private _name: string, private _specialMoveName: string) {
        super();
    }

    talk(): void {
        console.log(this._name);
    }

    specialMove(): void {
        console.log(this._specialMoveName);
    }
}

class LongRangecharacter extends Characters {
    constructor(private _name: string, private _specialMoveName: string) {
        super();
    }
    
    talk(): void {
        console.log(this._name);
    }

    specialMove(): void {
        console.log(this._specialMoveName);
    }
}


function myfuncs(character: Characters) {
    character.talk();
    character.specialMove()
}

const melees = new Meleecharacter('meleito', 'special');
const longRanges = new LongRangecharacter('longrangeito', 'zpezial');

myfuncs(melees);
myfuncs(longRanges);
