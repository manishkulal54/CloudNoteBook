const mongoose=require('mongoose');
const dotenv=require('dotenv')
dotenv.config()

const DB="mongodb+srv://manishkulalweb:2lM0G3HUhem0ka1E@cluster0.0gomslv.mongodb.net/?retryWrites=true&w=majority"
const connectToServer=()=>{
    try {
        mongoose.connect(DB)
        console.log("connected to database");
    } catch (error) {
        console.log("error while connecting to database");
    }
}
module.exports=connectToServer()