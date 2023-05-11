const express = require('express')
const router =  express.Router()
const AdmController = require('../controllers/AdmController')


router.post('/loginn',AdmController.loginn)
router.post('/registerr',AdmController.registerr)

module.exports = router