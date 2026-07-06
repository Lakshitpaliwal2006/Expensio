import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();


const ConnectDB = async () => {
    try {
       const DatabaseConnection = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Mongoose Connect Successfully`,DatabaseConnection)
        
    } catch (error) {
        console.log(`MongoDB Connection Error`,error)
    }  
}
ConnectDB()