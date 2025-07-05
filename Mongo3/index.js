const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./chats.js");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public" )));
app.use(express.urlencoded({extended:true}));

main()
    .then(()=>{
        console.log("Connection successful");
    })
    .catch((err) => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chat1 = new Chat({
    from : "Neha",
    to : "Priya",
    msg : "Send me your exam sheets",
    created_at : new Date(),
});

chat1.save().then((res)=>{
    console.log(res);
});

//index route
app.get("/chats", async(req, res)=>{
    let chats = await chat1.find();
    //console.log(chats);
    res.render("index.ejs", {chats});
});

//new route
app.get("/chat/new",(req,res)=>{
    res.render("new.ejs");
});

//create route
app.post("/chats",(req,res)=>{
    let {from, to, msg}= req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    });
    newChat.save().then(res =>{
       console.log("chat was saved"); 
    }).catch(err =>{
        console.log(err);
    });


    res.redirect("/chats");
});

//Edit route
app.get("chats/:id/edit", async(req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
});

//update route
app.put("/chats/:id", async(req,res)=>{
    let {id} = req.params;
    let {msg: newMsg} = req.body;
    let updateChat = await Chat.findByIdAndUpdate(
        id, 
        {msg: newMsg},
        {runValidators : true, new: true}
    );

    console.log(updatedChat);
    res.redirect("/chats");
});

//Detroy Route
app.delete("/chats/:id",(req,res)=>{
    let {id} = req.params;
    let deletedChat = Chat.findByIdAndDelete(id);
    console.log(deleteChat);
    res.redirect("/chats");
});

app.get("/",(req,res)=>{
    res.send("Root is working");
});

app.listen(8080, () =>{
    console.log("Server is listening on port 8080");
});