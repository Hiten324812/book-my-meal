
const express = require('express')

const admincontroller = require('../controllers/admin')
const middleware = require('../middleware/isloggedin')

const router = express.Router()

router.get('/', middleware.isloggedin ,admincontroller.getadmin);
router.get('/booking-list', middleware.isloggedin, admincontroller.getbookinglist);


module.exports = router;

