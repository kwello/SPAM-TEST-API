const userController = require('../controller/userController');
const contactController = require('../controller/contactController');
const spamController = require('../controller/spamController');

const router = require('express').Router();

router.post('/',userController.addUser);
router.get('/:phone',userController.getByNumber);

// get User Contacts
router.get('/getUserContacts/:id', userController.getUserContacts);

router.post('/addContact',contactController.addContact);
router.get('/Contacts/:user',contactController.getAllContacts);

router.post('/spam',spamController.addSpam);
router.get('/spam/check/:s_number',spamController.getNumber);

module.exports = router;