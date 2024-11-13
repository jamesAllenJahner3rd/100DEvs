console.log('May Node be with you')
const express = require('express')
const app = express()
app.listen(3000, function(){
    console.log("listening on 3000")
})
app.get('/',function(req,res){
    res.sendFile('/Documents/GitHub/100DEvs/HW/36CLASS/zellwk/index.html')
})
app.post('/quotes', (req,res)=>{
    console.log("Hellooooo!")
})