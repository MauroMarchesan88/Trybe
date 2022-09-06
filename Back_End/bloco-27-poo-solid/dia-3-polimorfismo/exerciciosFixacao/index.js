var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Characters = /** @class */ (function () {
    function Characters() {
    }
    return Characters;
}());
var Meleecharacter = /** @class */ (function (_super) {
    __extends(Meleecharacter, _super);
    function Meleecharacter(_name, _specialMoveName) {
        var _this = _super.call(this) || this;
        _this._name = _name;
        _this._specialMoveName = _specialMoveName;
        return _this;
    }
    Meleecharacter.prototype.talk = function () {
        console.log(this._name);
    };
    Meleecharacter.prototype.specialMove = function () {
        console.log(this._specialMoveName);
    };
    return Meleecharacter;
}(Characters));
var LongRangecharacter = /** @class */ (function (_super) {
    __extends(LongRangecharacter, _super);
    function LongRangecharacter(_name, _specialMoveName) {
        var _this = _super.call(this) || this;
        _this._name = _name;
        _this._specialMoveName = _specialMoveName;
        return _this;
    }
    LongRangecharacter.prototype.talk = function () {
        console.log(this._name);
    };
    LongRangecharacter.prototype.specialMove = function () {
        console.log(this._specialMoveName);
    };
    return LongRangecharacter;
}(Characters));
function myfuncs(character) {
    character.talk();
    character.specialMove();
}
var melees = new Meleecharacter('meleito', 'special');
var longRanges = new LongRangecharacter('longrangeito', 'zpezial');
myfuncs(melees);
myfuncs(longRanges);
