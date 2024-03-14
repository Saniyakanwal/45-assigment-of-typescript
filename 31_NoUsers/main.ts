let UserNames = ["Ali","Affan","Hunain","Admin","Zohan"];

UserNames = []

if(UserNames.length===0){
    console.log("your array is empty we need to find some user");
}else{
    //using foreach loop on array
    UserNames.forEach(oneuser=>{
    if(oneuser==="Admin"){
        console.log(`Hello ${oneuser},would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneuser}, thank you for logging in again.`)
  } 
    })
}