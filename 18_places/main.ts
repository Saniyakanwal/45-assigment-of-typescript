//making array in countries
let visitPlaces = ["Dubai","Sirilanka","NewYork","Pakistan","England"];

//for original print
console.log(visitPlaces);

//print array in Alphabetical order without modiyfying the actual list
console.log([...visitPlaces].sort());

//show that the array in original order
console.log("still in original order",visitPlaces);

//print array in reverse order without modiyfying the actual list
console.log([...visitPlaces].reverse());

//show that the array in original order
console.log("still in original order",visitPlaces);

//changed original order
console.log("original order reversed",visitPlaces.reverse());

//peint arrai in back to original order
console.log("back to original order",visitPlaces.reverse());

//print array to changed to  alphabetical order
console.log("sort in alphabetical order",visitPlaces.reverse());

//changed original order again
console.log("original order reversed again",visitPlaces.reverse());

