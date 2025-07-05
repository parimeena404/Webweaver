const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

const checkToken = (req, res, next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new ExpressError(401,"ACCESS DENIED");
};

app.get("/api", checkToken,(req, res)=>{
    res.send("data");
});

app.get("/",(req, res)=>{
    res.send("Hi, I'm root.");
});

app.get("/random", (req, res)=>{
    res.send("This is a random page");
});

app.get("/err",(req, res)=>{
    abcd = abcd;
});

app.get("/admin",(req, res)=>{
    throw new ExpressError(403, "Access to admin is Forbidden");
});

app.use((err, req, res, next)=>{
    let { status = 500, message = "Some Error Occurred"} = err;
    res.status(status).send(message);
});

//logger - morgan
// app.use((req, res, next)=>{
//     req.time = Date.now();
//     console.log(req.method, req.hostname, req.path, req.time);
// });

//404
app.use((req, res)=>{
    res.status(404).send("Page not found");
});

app.listen(8080, ()=>{
    console.log("server is listening to port 8080");
});