const USER= require('../Models/user')
const createUser= async(req, res)=>{
    //res.send('Hello From create User')
    const userInfo= req.body;

    try{
        console.log("==========User Info========", userInfo)
        const user= await USER. create(userInfo);
        res.status(200).json({
            "Message": "Successfully Created User",
            user,
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            "Message": "error from server",           
        })
    }
}

const getAllUsers = async(req, res)=>{
    try{
        const allUsers=await USER.find({});
        res.status(200).json({
            "Message": "Successfully Created User",
            data:allUsers,
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            "Message": "error from server",           
        })
    }
}
const getUser = async(req, res)=>{
    const {id}= req.params;
    try{
        const allUsers=await USER.findById(id);
        res.status(200).json({
            "Message": "Successfully Created User",
            data:allUsers,
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            "Message": "error from server",           
        })
    }
}
const getbyemail= async(req,res)=>{
    const {email, age} =req.query;
    try{
        //findone prevents returning an array
        const user=await USER.findOne({email : email, age: age});
        res.status(200).json({
            "Message": "Successfully Created User",
            data:user,
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            "Message": "error from server",           
        })
    }
}

const updateUser= async(req,res)=>{
    const {id}= req.params;
    const {name,email}= req.body;
    try{
        //findone prevents returning an array
        const user=await USER.findByIdAndUpdate(id,{name,email},{new: true});
        if (user ===null){
            res.status(404).json({
                "Message": "unable to update user",
                data:user,
            })
        }
        res.status(200).json({
            "Message": "Successfully Created User",
            data:user,
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            "Message": "error from server",           
        })
    }
}
const deleteUser= async(req,res)=>{
    const {id}= req.params;
    try{
        //findone prevents returning an array
        const user=await USER.findByIdAndDelete(id);
        if (user ===null){
            res.status(404).json({
                "Message": "unable to delete User",
                data:user,
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
//way to  export multiple functions
module.exports={
    createUser,
    getAllUsers,
    getUser,
    getbyemail,
    updateUser,
    deleteUser
}