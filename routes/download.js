const express = require('express')
const router = express.Router()


const downloadfilelink = require('../controllers/download')

router.get('/:uuid', downloadfilelink )




module.exports = router;