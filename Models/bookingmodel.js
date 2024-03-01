const mongoose= require("mongoose")
const userSchema = new mongoose.Schema({
    GuestId : {
        type : String, 
        required : true
    },
    Checkin : {
        type : String, 
        required : true
    },
    Checkout : {
        type:String,
        required : true
    },
    Lengthofstay: {
        type:String,
        required : true
    },
    Reservationstatus: {
        type:String,
        required : true
    },
    Specialrequest : {
        type:String,
        required : true
    }
})

const booking_record= mongoose.model('booking_record', userSchema)
module.exports= booking_record;