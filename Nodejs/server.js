
const {display,test,name}=require("./model");
console.log("this is server .js File");

display();
const testResult=test()
console.log(testResult)
console.log(name);
console.log("-------------");
const {displayUser,postUsers}=require("./Store/UserStorage");
console.log("before post users: ",dispalyUser());

postUsers({name:"yelija",email: 'yelija@gmail.com'})
postUsers({name:"rani",email: 'rani@gmail.com'})

