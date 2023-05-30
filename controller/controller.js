const contactModel = require("../model/contact");

const postContact = async(req, res)=>{
    const {full_name, service, budget, phone_number, whatsapp_number, email, message} = req.body;
    const contactDetails = await contactModel.create({full_name, service, budget, phone_number,whatsapp_number, email, message, createdAt })
    res.status(200).json(contactDetails)
};

const getContact = async(req, res)=>{
    const userMsg = await contactModel.find();
    res.status(200).json(userMsg)
}

const getSingleContact = async(req, res)=>{
    const id = req.params['id']
    const foundcontact = await contactModel.findOne({_id: id})
    res.status(200).json(foundcontact)
}

module.exports = {getContact, postContact, getSingleContact}