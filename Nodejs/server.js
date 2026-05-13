const {display,test,name}=require("./model");
console.log("This is server.js file");
display();


const testResult=test()
console.log(testResult);
console.log(name);

console.log("----------------------------")

const {displayUser,postUsers, deleteUser,updateName, displayUserBasedEmail}=require("./store/UserStorage");
console.log("before post user:", displayUser())

postUsers({name:"sugu", email:"sugu@gmail.com"})
postUsers({name:"sai", email:"sai@gmail.com"})
postUsers({name:"raju", email:"raju@gmail.com"})

console.log("after post user details ", displayUser())


deleteUser("sai")
console.log("after deleting user:", displayUser());

console.log("Email:sugu@gmail.com", displayUserBasedEmail('sugu@gmail.com'))

updateName("Sugunamail.com")