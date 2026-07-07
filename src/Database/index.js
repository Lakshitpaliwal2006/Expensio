import mongoose from "mongoose";

const ConnectDB = async () => {
    try {
       await mongoose.connect("mongodb://127.0.0.1:27017");
        console.log(`Mongoose Connect Successfully`)
        
    } catch (error) {
        console.log(`MongoDB Connection Error`,error)
    }  
}
export default ConnectDB;