const express =require('express');
const app = express();

const port =8000;
app.listen(port,()=>{
    console.log("the app is listening on "+ port);
})

// app.get('/',(req,res)=>{
//     res.send("home page");
// })
// app.get('/user',(req,res)=>{
//     res.send("user page");
// })
app.use(logger);

function logger(req,res,next){
    console.log('log');
    next();
}
function auth(req,res,next){
    if(req,query.admin === 'true'){
        next()
        return;
    }
    // else{
    //     res.send("No auth")
    // }
    console.log("Not authenticated");
}