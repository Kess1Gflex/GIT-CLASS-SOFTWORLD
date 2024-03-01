const USER= require('../Models/refugeemodel')

//code to store the users.
const refugee= async(req, res)=>{
    //res.send('Hello From create User')
    const refugeeInfo= req.body;

    try{
        console.log("==========User Info========", refugeeInfo)
        const user= await USER. create(refugeeInfo);
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

const getAllRefugees = async(req, res)=>{
    try{
        const allRefugees=await USER.find({});
        res.status(200).json({
            "Message": "Successfully Created User",
            data:allRefugees,
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            "Message": "error from server",           
        })
    }
}
const getSpecificRefugee = async(req, res)=>{
    const {id}= req.params;
    try{
        const refugeeById=await USER.findById(id);
        res.status(200).json({
            "Message": "Successfully Created User",
            data:refugeeById,
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
    refugee,
    getAllRefugees,
    getSpecificRefugee
}

//i have an issue, it is producing everything that i have written before as thedatabase stuff meanwhile it's only meant to be perculiar to refugeemodel