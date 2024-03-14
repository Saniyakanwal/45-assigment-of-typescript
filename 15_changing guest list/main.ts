let Guestlist = ["fatima","aqsa","eshal"];

let dontcome = Guestlist[0];

console.log(dontcome,"nhi aasakhti");

Guestlist.splice(0, 1,"ali");

Guestlist.forEach(guest=> console.log(`salam, ${guest} "would you like to finner with me?`));