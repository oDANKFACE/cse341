const express = require('express')
const router = express.Router()
const { listContacts, getContact} = require('../controllers/contacts')

router.get('/', listContacts)
router.get('/:id', getContact)
router.post('/', (req,res) => {
    // create a new contact
})
router.patch('/:id', (req,res) => {
    // update a specific contact
})
router.delete('/:id', (req,res) => {
    // delete a specific contact
})

module.exports = router