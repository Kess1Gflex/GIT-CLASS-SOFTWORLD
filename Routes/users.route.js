const express= require("express")

const router= express.Router();

const{createUser, getAllUsers, getUser, getbyemail,updateUser,deleteUser }= require('../Controllers/users.controller')
router.get("/user/all", getAllUsers);
router.get("/user/:id", getUser);
router.get("/user", getbyemail);
router.post("/create", createUser)
router.patch("/user/update/:id", updateUser);
router.delete("/user/delete/:id",deleteUser);
module.exports= router