const express = require("express");
const app = express();
const PORT=3000;

app.use(express.json());

app.use((req,res,next)=>{

    console.log("middleware executed");

    next();

})

function middleware(req,res,next){

    console.log("single route middleware exceuted");
    next()
}

function authentication(req,res,next){
    const password = req.query.password;

    if(password === "12345"){
        console.log("password correct")
        next()
    }else{
        console.log("password incorrect")

        res.status(401).send("Paasword incorrect")
    }
}

app.use(authentication)
//req.params
//req.query
//req.body

// http://localhost:3000/fetchUser?name=prem&id=1
app.get("/fetchUser",middleware, (req,res)=>{
    console.log("query-----", req.query)

    console.log(req.query.name)
    console.log(req.query.id)
    res.send(req.query)

})

app.post("/createUser",(req,res)=>{
    console.log("body-----", req.body)

    console.log(req.body.name)
    console.log(req.body.id)

    res.send(req.body)

})

app.get("/singleUser/:id/:name/:collage",(req,res)=>{
    console.log("req.params====",req.params)

    res.send(req.params)
})

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})