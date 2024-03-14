//creating Guestlist
let Guestlist = ["fatima","Aqsa","eshal"];
let dontcome = Guestlist [0];
console.log(dontcome,"nhi aasakhti");

//add and remove new Guest in array
Guestlist.splice(0,1, "Ali");
console.log("Good News! we found bigger table for Dinner");

//add new Guest at starting index of array 
Guestlist.unshift("abdullah");

//add new Guest at ending index of array
Guestlist.push("tooba");

//making variable for storing our new guest in array
let middleIndex:number= Math.floor(Guestlist. length/2);

//add new guest at middle index of array
Guestlist.splice(middleIndex, 0,"affan");

//print updated list
console.log("updated our guest list");

//send invitation for our guest one by onr
Guestlist.forEach(oneguest => console.log(`salam,${oneguest} would you like to dinner with me?`));