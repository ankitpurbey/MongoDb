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
const user =mongoose.model("user",userSchema);
user.insertMany([
    {name:"Ankit",email:"@Ankit321",age:20},
    {name:"Anil",email:"anil@1234", age: 22},
    {name:"Amit",email:"amit87@gmail",age:28},
])
.then((res)=>{
    console.log(res);
});

