const express =require("express");
const app = express();
const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")))

const port = 8080;
app.listen(port,()=>{
    console.log(`listing to the port no. ${port}`)

})
app.get("/",(req,res)=>{
    res.send("Hello EveryOne");
})
// app.get("/home",(req,res)=>{
//     res.render("home.ejs");
//     // res.send("Hello ");
// })

app.get("/home/:id",(req,res)=>{
    let id=req.params.id;
    console.log(id);
    res.render("home.ejs");
    // res.send("home");
})
app.get("/view",(req,res)=>{
    res.render("view.ejs");
})