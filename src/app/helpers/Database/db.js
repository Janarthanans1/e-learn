import mongoose from "mongoose";

export default async function connectDb(){
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("database connected");
        
    } catch (error) {
        console.log("database not connected");
        
    }
}