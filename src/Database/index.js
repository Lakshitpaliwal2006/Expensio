import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import { User } from "../Models/User.models.js"
import Finance from "../Models/Finance.model.js"
const PORT = 4001;

const app = express();

// const MIN_PORT = 3000;
// const MAX_PORT = 9000;

// const PORT = Math.floor(Math.random() * (MAX_PORT - MIN_PORT + 1)) + MIN_PORT;


app.use(cors({
    origin: "*",
    credentials: true
}));

app.use(express.json());

app.get('/test', (req, res) => {
    res.send("This is Testing Page and its Working");
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
app.get('/finance', async (req, res) => {
    try {
        const response = await Finance.find({})
        res.json(response)
    } catch (error) {
        console.log("Error:", error);

        res.status(500).json({
            message: "Some Error in Fetching Data",
            error: error.message
        });
    }
})
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

export default StartServer();