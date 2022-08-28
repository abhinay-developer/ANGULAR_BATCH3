/**
 *   spread  & rest
 *
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/**
 * rest
 */
var ages = [10, 20, 90, 89, 100];
var colors = ["RED", "GREEN", "ORANGE"];
var newArray = __spreadArray(__spreadArray([], ages, true), colors, true);
console.log(newArray);
/**
 * spread
 */
function displayGadgets(name) {
    var gadgets = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        gadgets[_i - 1] = arguments[_i];
    }
    console.log("Name:" + name);
    console.log("Gadgets:" + gadgets);
}
displayGadgets("Sai", "watch", "band", "earphones", "speakers");
