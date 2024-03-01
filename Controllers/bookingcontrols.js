const USER= require('../Models/bookingmodel')
const booking= async(req, res)=>{
    //res.send('Hello From create User')

    const book_request= req.body;

    try{
        console.log("==========User Info========", book_request)
        const booked= await USER. create(book_request);
        res.status(200).json({
            "Message": "Successfully Created User",
            booked,
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            "Message": "error from server",           
        })
    }
}

const getAllBookings= async(req, res)=>{
    try{
        const allBookings=await USER.find({});
        res.status(200).json({
            "Message": "List of all Bookings",
            data:allBookings,
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            "Message": "error from server",           
        })
    }
}
///main thing is  i need to use my specific id don't know howwwww.
const get_booking_slot = async(req, res)=>{
    const {GuestId}= req.params.GuestId;
    try{
        const booking_slot=await USER.findOne({guestId : GuestId});
        res.status(200).json({
            "Message": "Successfully Created User",
            data:booking_slot,
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            "Message": "error from server",           
        })
    }
}

//why this thing is not working nowww
const update_booking= async(req,res)=>{
    const GuestId= req.params.GuestId;
    const Checkout= req.body.Checkout;
    console.log(GuestId);
    console.log(Checkout);
    try{
        //findone prevents returning an array
        const userUpdate=await USER.findOneAndUpdate({GuestId : GuestId},{Checkout : Checkout},{new: true});
        if (userUpdate ===null){
            res.status(404).json({
                "Message": "unable to update user",
                //data:userUpdate,
            })
            return ;
        }
        res.status(200).json({
            "Message": "Successfully Created User",
            data :userUpdate,
        })
        return;
    }catch(err){
        console.log(err)
        res.status(500).json({
            "Message": "error from server",           
        })
    }
}


const deleteBooking= async(req,res)=>{
    const Reservationstatus= req.params.Reservationstatus;
    try{
        //findone prevents returning an array
        const deleted=await USER.deleteMany({Reservationstatus : Reservationstatus});
        if (deleted ===null){
            res.status(404).json({
                "Message": "unable to delete User",
                data:deleted,
            })
        }
        res.status(200).json({
            "Message": "Successfully Deleted",
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            "Message": "error from server",           
        })
    }
}

module.exports={
    booking,
    getAllBookings,
    get_booking_slot,
    deleteBooking,
    update_booking
}