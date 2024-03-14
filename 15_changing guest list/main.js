var Guestlist = ["fatima", "aqsa", "eshal"];
var dontcome = Guestlist[0];
console.log(dontcome, "nhi aasakhti");
Guestlist.splice(0, 1, "ali");
Guestlist.forEach(function (guest) { return console.log("salam, ".concat(guest, " \"would you like to finner with me?")); });
