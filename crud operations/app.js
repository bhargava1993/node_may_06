// MERN - Mongodb Express React Node.js

const express = require("express");
const app = express();  //express object
const PORT = 3000;

app.use(express.json());

let users = [
    { id: 1, name: "avinash" },
    { id: 2, name: "anil" }
]

app.get("/fetchUsers", (req, res) => {

    console.log("fetchusers api")
    res.json(users)

});


app.post("/createUser", (req, res) => {
    // let user = {id:3, name:"prem"};
    console.log("req-------", req)
    console.log("req.body------", req.body)
    let user = req.body;

    users.push(user);

    res.status(201).json({
        message: "user added",
        user
    })

})

app.put("/updateUser", (req, res) => {

    console.log("req.query-----", typeof req.query.id)
    console.log("req.body--------", req.body)
    // console.log("req.params----",req.params)
    let mUser = users.find((u) => {
        console.log("u----", u)
        if (u.id === Number(req.query.id)) {
            u.name = req.body.name;
            console.log("user---------", u)
            return u;
        }
    });
    console.log("mUser------", mUser)
    // user.name = req.body.name;

    res.json({
        message: "User updated",
        mUser,
        users

    })

})

app.delete("/deleteUser",(req,res)=>{
    users = users.filter(u=>u.id != Number(req.query.id));

    res.json({"message":"user deleted"})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

// http://localhost:3000/fetchUsers

// http://127.0.0.1:3000/fetchUsers