import express from "express"
const app = express()
import cors from "cors";

app.use(cors({
    origin:'*',
    credentials: true
}))

app.get("/",(req,res) =>{
    res.send("Hello world")
})

export default app;