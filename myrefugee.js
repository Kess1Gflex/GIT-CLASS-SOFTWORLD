require("dotenv").config();

const express= require("express");
const mongoose= require("mongoose")
const router= require('./Routes/refugeeroute.js')
const app = express();
const PORT= process.env.PORT;
const URL= process.env.MONGODB_URL;
app.use(express.json());

console.log(URL);

app.listen(PORT, ()=>{
    console.log("APP SERVER RUNNING ON PORT 3000");

    mongoose.connect(URL, {

    }).then((value)=>{
        console.log("connected to the database");
    }).catch((error)=>{
        console.log("Error accessing database", error);
    })
    app.use(router);
})

