const express = require("express");
const userController = require("../controllers/user.controller")
const bcrypt = require("bcrypt")
const router = express.Router();

router.get("/", userController.getAllUsers)
router.get("/:id", userController.getUser)
router.get("/:email", userController.getUser)
router.get("/:password", userController.getUser)

const signIn = async (req, res) => { 
    try { 
        const { email, password } = req.body; 
  
        const user = await userService.findUserByEmail(email); 

        const isVerify = await bcrypt.compare(password, user.password); 
        if (!isVerify) { 
            throw { message: "Non autorisé" }; 
             
        } 
        res.status(200).json({ token: "123456" });
        } catch (error) {  
            res.status(401).json({ message: error.message || "Authentification échouée" }); 
        } 
    };

module.exports = router;