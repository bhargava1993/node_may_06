const express = require("express");

const app = express();


//http:localhost:3000/sample

app.get("/vidya", (req,res)=>{
    res.send("hellow node.js")
})



app.listen(3000,()=>{
    console.log("server is running 3000 port")
});
