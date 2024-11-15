console.log('May Node be with you')
const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb+srv://jamesallenjahner3rd:R69kik0RlJBjcdcV@cluster0.dd2j2.mongodb.net/?retryWrites=true&w=majority&appName=cluster0')
    .then(client => { 
        console.log('Connected to Database');
        const db = client.db('yoda_quotes');
        const quotesCollection = db.collection('quotes')
        app.set("view engine",'ejs')
        app.use(express.urlencoded({ extended: true }))
        app.get('/',function(req,res){
            db.collection('quotes')
            .find()
            .toArray()
            .then(results =>{
                console.log(results)
            })
            .catch(error => console.log(error))
            res.sendFile('/Documents/GitHub/100DEvs/HW/36CLASS/zellwk/index.html')
        })
        app.post('/quotes', (req, res) => {
            quotesCollection
              .insertOne(req.body)
              .then(result => {
                res.redirect('/')
              })
              .catch(error => console.error(error))
          })
        app.listen(3000, function(){
            console.log('Listening on 3000');
        })
    })
    .catch(error => console.error(error));
    
// Make sure you place this before your CRUD handlers!



