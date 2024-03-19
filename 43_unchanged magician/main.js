var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//continue from ex 42
var Magicians = ["Alto", "David", "John"];
function copyarray(Array) {
    return __spreadArray([], Array, true);
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " The Great";
    }
}
function show_magician(Magicians) {
    Magicians.forEach(function (Magician) {
        console.log(Magician);
    });
}
var copyMagicanArray = copyarray(Magicians);
make_great(Magicians);
console.log("\n\nThis is My original Array");
show_magician(Magicians);
console.log("\n\nThis is my modified copy of the Array");
show_magician(copyMagicanArray);
