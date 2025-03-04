const express = require("express");
const userController = require("../controllers/user.controller")
const bcrypt = require("bcrypt")
const router = express.Router();

router.get("/", userController.getAllUsers)
router.get("/:id", userController.getUser)
router.get("/:email", userController.getUser)
router.get("/:password", userController.getUser)


module.exports = router;