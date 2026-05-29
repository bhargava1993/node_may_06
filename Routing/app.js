const express = require("express");
const app = express();
const PORT = 3000;
// const bodyParser = require('body-parser')

app.use(express.json());

app.get("teching/products", (req, res) => {
    res.send("products page")
})

app.post("/orders", (req, res) => {
    res.send("orders page")
})

//dynamic route
app.put("/cart/:id", (req, res) => {
    res.send("cart page")
})

app.delete("/users", (req, res) => {
    res.send("users page")
})

app.listen(PORT, () => {
    console.log("server is running on " + PORT)
})