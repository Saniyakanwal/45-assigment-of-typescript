//array of current users
var Current_users = ["kanwal", "noor", "sheikh", "tanoli", "khan"];
//array for new users
var New_Users = ["mughal", "tanoli", "kanwal", "malik", "memon"];
//loop through new_user to check for usersNames avaibility
New_Users.forEach(function (one_new_user) {
    //making a condition for userName already exist and save in our_condition variable    
    var our_condition = Current_users.some(function (one_current_user) { return one_current_user.toLowerCase() === one_new_user.toLowerCase(); });
    //print different messages using if else statement
    if (our_condition) {
        console.log("sorry ".concat(one_new_user, " is Already taken"));
    }
    else {
        console.log("this  userName ".concat(one_new_user, " is available"));
    }
});
