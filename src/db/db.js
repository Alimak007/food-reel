import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DB_URI);
        console.log("MongoDB connected");
    }catch(err){
        console.log("Error occured: ",err)
    }
}

export default connectDB;