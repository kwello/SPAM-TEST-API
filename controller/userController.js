const db = require('../models');

const User = db.users;
const Contact = db.contacts;

//ADD USER
const addUser = async (req,res) =>{
    if(!req.body.name || !req.body.phone){
        res.status(400).send({
            message: 'Please required details',
        });
        return
    }

    //create user
    const userInfo = {
        name : req.body.name,
        phone: req.body.phone,
        email: req.body.email
    };


    //storing user in db
    try {
            const user = await User.create(userInfo);
            res.status(200).send(user);
            console.log(user);
    }catch (err){
        res.status(500).send({
            message: err.message || 'Error occured'
        })
    }
}

// get user by number
const getByNumber = async (req, res) => {
    let phone = req.params.phone;
    let user = await User.findOne({ where: { phone: phone } });
    res.status(200).send(user);
  };

//connect one to many relation user and contacts

  const getUserContacts =  async (req, res) => {
  
      const id = req.params.id
  
      const data = await User.findOne({
          include: [{
              model: Contact,
              as: 'done'
          }],
          where: { id: id }
      })
      res.status(200).send(data)
  
  }





module.exports = {
    addUser,
    getByNumber,
    getUserContacts
}