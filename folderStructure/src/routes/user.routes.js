const express = require("express");

// import express from "express";

const router = express.Router();

const userController = require("../controller/user.controller");
const userController17 = require("../controller/user17.controller");

//crud operations
router.route("/v16")
    .get(userController.fetchUsers)
    .post(userController.createUsers);

router.route("/v17")
    .get(userController17.fetchUsers)
    .post(userController17.createUsers);

// router.route("/:id")
//     .get()
//     .post()
//     .put()
//     .delete();

module.exports = router;

// export default router
