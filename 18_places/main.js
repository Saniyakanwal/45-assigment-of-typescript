var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//making array in countries
var visitPlaces = ["Dubai", "Sirilanka", "NewYork", "Pakistan", "England"];
//for original print
console.log(visitPlaces);
//print array in Alphabetical order without modiyfying the actual list
console.log(__spreadArray([], visitPlaces, true).sort());
//show that the array in original order
console.log("still in original order", visitPlaces);
//print array in reverse order without modiyfying the actual list
console.log(__spreadArray([], visitPlaces, true).reverse());
//show that the array in original order
console.log("still in original order", visitPlaces);
//changed original order
console.log("original order reversed", visitPlaces.reverse());
//peint arrai in back to original order
console.log("back to original order", visitPlaces.reverse());
//print array to changed to  alphabetical order
console.log("sort in alphabetical order", visitPlaces.reverse());
//changed original order again
console.log("original order reversed again", visitPlaces.reverse());
