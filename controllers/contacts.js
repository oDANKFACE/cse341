const { ObjectId } = require('mongodb')
const mongo = require('../mongo')

const listContacts = async (req, res) => {
    const contacts = await mongo.getDb().collection('contacts');
    const results = await contacts.find()
        .toArray();
    res.send(results).status(200);
}

const getContact = async (req, res) => {
    const id = new ObjectId(req.params.id);
    const contacts = await mongo.getDb().collection('contacts');
    const results = await contacts.findOne({_id:id})
    res.send(results).status(200);
}

const createContact = () => {

}

module.exports = {
    listContacts,
    getContact,
    createContact
}