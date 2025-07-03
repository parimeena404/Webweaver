const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlendcoded({extended: true}));
app.use(express.json());

app.get("/register", (req, res)=>{
    let { user, password} = req.query;
    res.send("Standard GET Response. Welcone ${user}!");
});

app.post("/register", (req, res)=>{
    let { user, password} = req.body;
    res.send("Standard POST Response. Welcone ${user}!");
});

app.listen(prompt, ()=>{
    console.log(`listening to port ${port}`);
});