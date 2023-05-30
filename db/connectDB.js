const mongoose  = require("mongoose");

require("dotenv").config();

const password = process.env.pass
const connectionString = `mongodb+srv://Toshbaba:${password}@tosh.e022gw2.mongodb.net/Toshconsult?retryWrites=true&w=majority`;


const connectDb = async()=>{
    await mongoose.connect(connectionString)
}
module.exports = connectDb;