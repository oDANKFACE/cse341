const express = require('express')
const router = express.Router()
const { listContacts, getContact} = require('../controllers/contacts')

router.get('/', listContacts)
router.get('/:id', getContact)

module.exports = router