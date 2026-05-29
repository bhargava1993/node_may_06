let users = [
    { id: 1, name: "avinash" },
    { id: 2, name: "anil" },
    { id: 3, name: "jaswanth" },
    { id: 4, name: "bhargava" }
]

const fetchUsers = async (req, res) => {

    try {
        res.status(200).json({
            message: "users fetched",
            users
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}

const createUsers = async (req, res) => {

    try {
        let user = req.body;

        users.push(user);

        res.status(201).json({
            message: "user added",
            user
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}


module.exports = {
    fetchUsers,
    createUsers
}