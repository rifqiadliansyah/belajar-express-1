const express = require('express')
const { use } = require('express/lib/router')
const router = express.Router()
const usercontroller = require('../controller/user')


router.route('/users')
    .get(usercontroller.getdata)
    
    .post(usercontroller.store)

router.put('/users/:id', usercontroller.update)

router.delete('/users/:id', usercontroller.delete)

module.exports = router