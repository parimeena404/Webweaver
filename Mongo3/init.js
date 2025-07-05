const mongoose = require("mongoose");
const Chat = require("./chats.js");

main()
    .then(()=>{
        console.log("Connection successful");
    })
    .catch((err) => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

Chat = [
    {
    from : "Neha",
    to : "Priya",
    msg : "Send me your exam sheets",
    created_at : new Date(),
    },
    {
    from : "Sheru",
    to : "Priti",
    msg : "Meet you later",
    created_at : new Date(),
    },
    {
    from : "Tony",
    to : "Peter",
    msg : "Love you 3000",
    created_at : new Date(),
    },
];

Chat.insertMany(allChats);