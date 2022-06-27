const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


const router = express.Router();

router.get('/', async(req, res) => {
    const posts = await loadPostsCollection();
    let data = await posts.find({}).toArray();
    res.send(data);
})

router.post('/', async(req, res) => {
    const date = new Date();
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text,
        date: date
    });
    res.status(201).send();
});

router.delete('/:id', async(req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({ "_id": ObjectId(req.params.id) });
    res.status(200).send({});
});

const credentials = '../X501.pem';

const client = new MongoClient('mongodb+srv://cluster0.jsb4w.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {
    sslKey: credentials,
    sslCert: credentials,
    serverApi: ServerApiVersion.v1
});

async function loadPostsCollection() {
    await client.connect();
    const database = client.db('vue-express')
    const collection = database.collection('posts');

    return collection;
}

module.exports = router;