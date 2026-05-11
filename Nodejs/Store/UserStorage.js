let userDetails=[];
const dispalyUser=()=>{
    console.log(userDetails);

}
const postUsers=()=>{
    userDetails.push(user);

}
postUsers({username:"yelija",password:"admin@123"})
dispalyUser