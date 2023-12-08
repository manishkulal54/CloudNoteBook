const mongoose=require('mongoose');
const dotenv=require('dotenv')
dotenv.config()

const DB=process.env.DATABASE
const connectToServer=()=>{
    try {
        mongoose.connect(DB)
        console.log("connected to database");
    } catch (error) {
        console.log("error while connecting to database");
    }
}
module.exports=connectToServer()