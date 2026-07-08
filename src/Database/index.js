import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import { User } from "../Models/User.models.js"

const app = express();
const PORT = 4000


app.use(cors({
    origin: "*",
    credentials: true
}));

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Home Page");
})

app.post("/register", async (req, res) => {
    console.log("Registered API called");
    console.log(req.body);

    try {
        const newUser = await User.create(req.body);

        console.log(newUser);

        res.status(201).json({
            message: "Success",
            user: newUser
        });

    } catch (error) {
        console.log("Error:", error);

        res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
});

const StartServer = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/register");
        console.log("Mongoose Connected Successfully");

        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });

    } catch (error) {
        console.log("MongoDB Connection Error:", error.message);
        process.exit(1);
    }
};

StartServer();