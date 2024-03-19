var Animals = ["Cat", "Rabbit", "Dog"];
//print only Names
for (var _i = 0, Animals_1 = Animals; _i < Animals_1.length; _i++) {
    var Names = Animals_1[_i];
    console.log(Names);
}
//print a statement
for (var _a = 0, Animals_2 = Animals; _a < Animals_2.length; _a++) {
    var Names = Animals_2[_a];
    console.log("".concat(Names, " is a Domestic Animals"));
}
//common 
console.log("All these animals ".concat(Animals[0], ",").concat(Animals[1], ", And ").concat(Animals[2], " have ability to produce heat metabolically"));
