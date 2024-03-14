//for string
var mango = "mango";
var upperCaseMango = "Mango";
var five = 5;
var ten = 10;
var colours = ["Black", "Yellow", "Red"];
//Test for equality and inequality with string
console.log("Is mango is equal to mango?");
console.log(mango == "mango");
console.log("\nIs mango is not equal to mango");
console.log(mango !== "mango");
//test using lowercase
console.log("\nIs Mango is equal to mango after converting lowercase?");
console.log(upperCaseMango.toLowerCase() == mango);
console.log("\nIs Mango is notequal to mango after converting lowercase?");
console.log(upperCaseMango.toLowerCase() !== mango);
//Numerical test
//equality and inequality test
console.log("\nIs five is not equal to ten");
console.log(five !== 10);
console.log("\nIs five is equal to ten");
console.log(five == 10);
//greater and less than test
console.log("\nIs ten greater than five");
console.log(ten > 5);
console.log("\nIs five is less than zero?");
console.log(five < 0);
//test for greater than or equal to
console.log("\nIs ten is greater than or equal to 6");
console.log(ten >= 6);
console.log("\nIs ten is less than or equal to four");
console.log(ten <= 4);
//Test for "And" & "Or" operator
//using && "And"
console.log("\nIs five is equal to 5 and ten is not equal to 5");
console.log(five == 5 && ten > 5);
console.log("\nIs five is greater than 7 and five is not  equal to 5");
console.log(five > 7 && five != 5);
//using || "Or"
console.log("\nIs five is greater than 4 or five is not equal to 4");
console.log(five > 4 || five != 4);
console.log("\nIs ten is equal to 5 or ten is less than 5");
console.log(ten == 5 || ten < 5);
//Test for whether an item is in array 
console.log("\nIs Black is in my colour array");
console.log(colours.includes("Black"));
console.log("\nIs Blue is in my array");
console.log(colours.includes("Blue"));
//test for whether an item is not in array
console.log("\nIs red is not in my array");
console.log(colours.includes("Red"));
console.log("\nIs green is in my array");
console.log(colours.includes("green"));
