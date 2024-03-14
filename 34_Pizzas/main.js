//creating array
var Pizzas = ["Afghani", "Chicken Tikka", "Fajita"];
//using for loop
for (var _i = 0, Pizzas_1 = Pizzas; _i < Pizzas_1.length; _i++) {
    var onepizza = Pizzas_1[_i];
    console.log("I like ".concat(onepizza, " pizza"));
}
//print message outside of for loop
console.log("Pizza is love");
