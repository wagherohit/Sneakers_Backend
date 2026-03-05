const mongoose =require('mongoose')

const connectDB = async()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URL}/SnekersDB`)
        console.log("MongoDB Conected")

    }
    catch(err){
        console.log('MongoDB Failed')

    }
}



module.exports = connectDB