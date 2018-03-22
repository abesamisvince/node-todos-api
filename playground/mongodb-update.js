// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5ab3071e4f1b1e25f41f7296')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }
    // ).then((result) => {
    //     console.log(result);
    // });
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5ab25d01e7960e0a50171a05')
    }, {
        $set:{ name: 'Ben'}, $inc:{age: 1}
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
        
        db.close(); 
    });