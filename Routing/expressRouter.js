const express = require("express");
const app = express();
const PORT = 3000;

const teachingRoutes = require("./teachingRoutes");

app.use('/teaching',teachingRoutes);
app.use('/teaching',teachingRoutes);
// app.use('/library',teachingRoutes);

app.listen(PORT,()=>{
    console.log("server is running on"+PORT)
})