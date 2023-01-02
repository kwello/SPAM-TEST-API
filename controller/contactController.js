const db = require('../models');

const Contact = db.contacts;
const Spam = db.spams;

//ADD CONTACTS
const addContact = async (req,res) =>{
    if(!req.body.user || !req.body.c_name || !req.body.c_number){
        res.status(400).send({
            message: 'Please required details',
        });
        return
    }

    //create user
    const contactInfo = {
        user : req.body.user,
        c_name: req.body.c_name,
        c_number: req.body.c_number
    };


    //storing user in db
    try {
            // console.log(req.body.c_number)
            // if(Spam.findOne({ where: { s_number: s_number}})){
            //      console.log('heyy erererrekejenl')
            // }
            const contact = await Contact.create(contactInfo);
            res.status(200).send(contact);
            console.log(contact);
    }catch (err){
        res.status(500).send({
            message: err.message || 'Error occured'
        })
    }
}

//GET ALL CONTACTS of USER
const getAllContacts = async (req, res) => {

    let user = req.params.user
    let contact = await Contact.findAll({ where: { user: user }})
    res.status(200).send(contact)

}

module.exports = {
    addContact,
    getAllContacts
}