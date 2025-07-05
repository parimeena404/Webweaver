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

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    author:{
        type: String,
    },
    price:{
        type: Number,
    },
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    author: "RD Sharma",
    title: "Mathematics XII",
    price: 1200,
});

book1.save().then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    });