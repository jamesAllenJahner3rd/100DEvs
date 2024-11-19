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
        app.use(express.static('public'))
        app.use(express.json())
        app.get('/',function(req,res){
            db.collection('quotes')
            .find()
            .toArray()
            .then(results =>{
                console.log(results)
                 res.render("index.ejs", {quotes: results})
            })
            .catch(error => console.log(error))
           
           // res.sendFile('/Documents/GitHub/100DEvs/HW/36CLASS/zellwk/index.html')
        })
        app.post('/quotes', (req, res) => {
          quotesCollection.insertOne(req.body)
            .then(result => {
              res.redirect('/')
            })
        .catch(error => console.error(error))
        })
        app.put('/quotes', (req, res) => {
          quotesCollection
            .findOneAndUpdate({
              name:'Yoda'
            },
            {
              $set: {
                name: req.body.name,
                quote: req.body.quote,
              },
            },
            {
              upsert: true,
            })
            //.insertOne(req.body)
            .then(result => {
              console.log(result)
              res.json('Success')
              res.redirect('/')
            })
            .catch(error => console.error(error))
        })
          app.put('/quotes',(req,res) =>{
            quotesCollection.findOneAndUpdate()
            .then(result =>{
              console.log(result)
            })
            .catch(error => console.error(error))
            
          })
          app.delete("/quotes", (req,res) =>{
            quotesCollection
            .deleteOne({name: req.body.name})
            .then(result => {
              if (result.deltedCount ===0){
                return res.json('No quote to delete')
              }
              res.json("Deleted Dearth Vader's quote")
            }) 
            .catch(error => console.error(error))
          })
        app.listen(3000, function(){
            console.log('Listening on 3000');
        })
    })
    .catch(error => console.error(error));
    
// Make sure you place this before your CRUD handlers!



