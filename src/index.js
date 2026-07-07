import app from "./app.js";
import ConnectDB from "./Database/index.js";
const PORT=5001;

ConnectDB().then(() =>{
    app.listen(PORT,() =>{
    console.log(`Server is Listening on Port ${PORT}`);
})
})
.catch((err) =>{
        console.log("Server is not Connected",err)
})