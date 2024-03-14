//creating Guestlist
var Guestlist = ["fatima", "Aqsa", "eshal"];
var dontcome = Guestlist[0];
console.log(dontcome, "nhi aasakhti");
//add and remove new Guest in array
Guestlist.splice(0, 1, "Ali");
console.log("Good News! we found bigger table for Dinner");
//add new Guest at starting index of array 
Guestlist.unshift("abdullah");
//add new Guest at ending index of array
Guestlist.push("tooba");
//making variable for storing our new guest in array
var middleIndex = Math.floor(Guestlist.length / 2);
//add new guest at middle index of array
Guestlist.splice(middleIndex, 0, "affan");
//print updated list
console.log("updated our guest list");
//send invitation for our guest one by onr
Guestlist.forEach(function (oneguest) { return console.log("salam,".concat(oneguest, " would you like to dinner with me?")); });
//question # 17 
//inform only two guests
console.log("unfortunately,the new dinner table won't arrive on time so i can invite only two guests for dinner with me");
//using while loop for remove guest
while (Guestlist.length > 2) {
    var RemoveGuest = Guestlist.pop();
    console.log("sorry,".concat(RemoveGuest, " i cant invite you in dinner"));
}
//invitation last two guest
console.log("inviting last 2 guests");
Guestlist.forEach(function (last2Guest) { return console.log("luckly ".concat(last2Guest, " you are still inviting for my dinner")); });
//remove last two guest
Guestlist.pop();
Guestlist.pop();
console.log("empty list:", Guestlist);
