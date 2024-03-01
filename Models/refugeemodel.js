const mongoose= require("mongoose")
const userSchema = new mongoose.Schema({
    name : {
        type : String, 
        required : true
    },
    nationality : {
        type:String,
        required : true
    },
    id: {
        type:String,
        required : true
    },
    contact: {
        type:String,
        required : true
    },
    emergency_contact: {
        type:String,
        required : true
    }
})
//refugee in string is creating a table/collection(mongodb term)
const refugee_users= mongoose.model('Refugee', userSchema)
module.exports= refugee_users;