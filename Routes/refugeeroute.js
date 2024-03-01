const express= require("express")

const router= express.Router();

const{refugee, getAllRefugees, getSpecificRefugee}= require('../Controllers/routepointer.js')
router.get("/refugeemodel/all", getAllRefugees);
router.get("/refugeemodel/:id", getSpecificRefugee);
router.post("/create", refugee)
module.exports= router