//creating array
var Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//using for.loop
for (var _i = 0, Numbers_1 = Numbers; _i < Numbers_1.length; _i++) {
    var oneNumber = Numbers_1[_i];
    var oridinalEnding = void 0;
    if (oneNumber === 1) {
        oridinalEnding = "st";
    }
    else if (oneNumber === 2) {
        oridinalEnding = "nd";
    }
    else if (oneNumber === 3) {
        oridinalEnding = "rd";
    }
    else {
        oridinalEnding = "th";
    }
    console.log("".concat(oneNumber).concat(oridinalEnding));
}
