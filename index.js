const mongoose = require('mongoose');
main()
.then(()=>{
    console.log("connection successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
})
const user =mongoose.model("user", userSchema);
// const user1 =new user({
//     name:"Ankit",
//     email:"ankit123@",
//     age:19,
// });
// const user2 = new user({
//     name: "Aman",
//     email:"aman@123",
//     age:21,
// });
// user1.save();
// user2.save();


// now inserting Many data 

user.insertMany([
    {name:"Ankit",email:"@Ankit321",age:20},
    {name:"Anil",email:"anil@1234", age: 22},
    {name:"Amit",email:"amit87@gmail",age:28},

]).then((res)=>{
    console.log(res);
});
/* some key point
  Momgoose lets you start immediately,Without
  Waiting for mongoose to establish a connection MongoDB
  */

