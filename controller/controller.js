const contactModel = require("../model/contact");

const postContact = async(req, res)=>{
    const {full_name, service, budget, phone_number, whatsapp_number, email, message} = req.body;
    const contactDetails = await contactModel.create({full_name, service, budget, phone_number,whatsapp_number, email, message })
    res.status(200).json(contactDetails)
};

const getContact = async(req, res)=>{
    const userMsg = await contactModel.find();
    res.status(200).json(userMsg)
}

module.exports = {getContact, postContact}