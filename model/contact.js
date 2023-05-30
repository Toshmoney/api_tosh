const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const contactSchema = new Schema({
    full_name:{
        type: String,
        required: true,
        min: [5, "Full name is required!"],

    },
    email:{
        type: String,
        required:true
    },
    phone_number:{
        type: String,
        required:true
    },
    whatsapp_number:{
        type: String,
        required:true
    },
    budget:{
        type: String,
        required:true
    },
    service:{
        type: String,
        required:true
    },
    message:{
        type: String,
        required:true
    }
});

const contactModel = new model("contact", contactSchema)

module.exports = contactModel;