const express = require("express");
const cors = require("cors");
const router = require("./routes/handler");
const connectDb = require("./db/connectDB");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json())
app.use("/", router)

app.listen(port, async()=>{
    await connectDb()
    console.log(`Success!!`);
    console.log(`Server started successfully on port ${port}...`);
})
