//array of current users
let Current_users = ["kanwal","noor","sheikh","tanoli","khan"];

//array for new users
let New_Users = ["mughal","tanoli","kanwal","malik","memon"];

//loop through new_user to check for usersNames avaibility
New_Users.forEach(one_new_user =>{

//making a condition for userName already exist and save in our_condition variable    
 let our_condition = Current_users.some(one_current_user => one_current_user.toLowerCase() ===one_new_user.toLowerCase())

 //print different messages using if else statement
    if(our_condition){
        console.log(`sorry ${one_new_user} is Already taken`);
    }else{
        console.log(`this  userName ${one_new_user} is available`);
    }
})
