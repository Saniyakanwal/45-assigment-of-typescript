//creating array
var UserNmaes = ["Ali", "Affan", "Hunain", "Admin", "Zohan"];
//using foreach loop on array
UserNmaes.forEach(function (oneuser) {
    if (oneuser === "Admin") {
        console.log("Hello ".concat(oneuser, ",would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneuser, ", thank you for logging in again."));
    }
});
