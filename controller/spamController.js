const db = require('../models');
const Spam = db.spams;

//ADD CONTACTS
const addSpam = async (req,res) =>{
    if(!req.body.user || !req.body.s_number){
        res.status(400).send({
            message: 'Please required details',
        });
        return
    }

    //create spammer
    const spamInfo = {
        user : req.body.user,
        s_number: req.body.s_number
    };


    //storing user in db
    try {
            const spam = await Spam.create(spamInfo);
            res.status(200).send(spam);
            console.log(spam);
    }catch (err){
        res.status(500).send({
            message: err.message || 'Error occured'
        })
    }
}

//FIND THE SPAM NUMBER
const getNumber = async (req, res) => {
    let s_number = req.params.s_number
    let spam = await Spam.findOne({ where: { s_number: s_number }})
    res.status(200).send(spam)

}

module.exports = {
    addSpam,
    getNumber
}