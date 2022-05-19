const express = require('express')
const router = express.Router()

const sendemail  = require('../controllers/sendemail')


router.post('/', sendemail)


module.exports = router