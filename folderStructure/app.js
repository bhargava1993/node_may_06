const express = require("express");
const app = express();

const userRoutes = require("./src/routes/user.routes");
const authentication = require("./src/middleware/auth.middleware")

app.use(express.json());

app.use(authentication.authentication)

app.use("/user",userRoutes);

module.exports = app;


// const user = {
//     name:"bhargava"
// }

// user.id = 1;
// user.location= "hindupur"

// module.exports = user;