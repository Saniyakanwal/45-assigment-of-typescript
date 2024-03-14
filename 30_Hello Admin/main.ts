//creating array
let UserNmaes = ["Ali","Affan","Hunain","Admin","Zohan"];

//using foreach loop on array
UserNmaes.forEach(oneuser=>{
     if(oneuser==="Admin"){
        console.log(`Hello ${oneuser},would you like to see a status report?`)
     }else{
        console.log(`Hello ${oneuser}, thank you for logging in again.`)
     }
})