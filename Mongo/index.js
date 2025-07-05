const mongoose = require('mongoose');

main()
.then(() =>{
    console.log("connection successful");
})
.catch((err) => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);
//const Employee = mongoose.model("Employee", userSchema);

User.findByIdAndUpdate("68596c33cb9260891eef6511").then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    });

// User.find({age: {$gt: 45}})
//     .then((res)=>{
//         console.log(res);
//     }).catch((err)=>{
//         console.log(err);
//     });
// const user1 = new User({
//     name: "Adam",
//     email:"adam@yahoo.in",
//     age: 43,
// });

// user1.
//     save()
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });


// User.insertMany([
//     {name:"Tony", email:"tony@gmail.com", age: 50},
//     {name: "Captain", email: "captain@gmail.com", age: 45},
//     {name: "Peter", email: "peter@email.com", age: 30},
// ]).then((res) =>{
//     console.log(res);
// });