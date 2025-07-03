const express = require("express");
const app = express();

const port = 8080;

app.use(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"))

app.get("/", (req, res) => {
  res.render("home"); // Don't add .ejs
});

app.get("/ig/:username",(req,res)=>{
  //const followers = ["adam", "bob","steve","abc"];
  //let{ username } = req.params;
  //res.render("instagram.ejs",{ username, followers });
  let {username} = req.params; 
  const instaData = require("./data.json");
  const data = instaData[username];
  if(data){
    res.render("instagram.ejs",{ data });
  }else{
    res.render("error.ejs");
  }
  
});

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.get("/rolldice", (req, res) => {
  let diceVal =  Math.floor(Math.random()*6) + 1;
  res.render("rolldice.ejs",{diceVal});
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
