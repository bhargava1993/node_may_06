function authentication(req, res, next) {
    const password = req.query.password;

    if (password === "12345") {
        console.log("password correct")
        next()
    } else {
        console.log("password incorrect")

        res.status(401).send("Paasword incorrect")
    }
}


module.exports = { authentication }