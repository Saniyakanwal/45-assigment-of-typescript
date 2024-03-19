let Animals = ["Cat","Rabbit","Dog"];

//print only Names
for(let Names of Animals){
    console.log(Names);
}

//print a statement
for(let Names of Animals){
    console.log(`${Names} is a Domestic Animal`);
}

//common 
console.log(`All these animals ${Animals[0]},${Animals[1]}, And ${Animals[2]} have ability to produce heat metabolically`);