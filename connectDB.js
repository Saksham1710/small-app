import mongoose from "mongoose";

const connectDB = async() =>{
    try{
        const connectionInstance = await mongoose.connect("mongodb://localhost:27017/testDB");
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`)

    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

export default connectDB;

