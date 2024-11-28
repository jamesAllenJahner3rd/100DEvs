const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const querystring = require("querystring");
const express = require("express");
const app = express();


let personList = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
];
let personList2 = [
  { 
    "id": "1",
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": "2",
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": "3",
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": "4",
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
];
app.get("/api/persons",(request,response) => {
    response.json(personList)
})
app.get("/info/",(request,response)=>{ 
    response.send(`<p>Phonebook has info for 2 people<br>${new Date()}</p>`)
});
app.get("/api/persons/:id",(request,response)=>{
  const id =request.params.id;
  const person = personList.find(person => person.id === id);
  
  if (person){
    response.json(person)
  }else{
    response.status(404).end()
  }
})
app.delete("/api/persons/:id",(request,response)=>{
  const id  =request.params.id;
  personList = personList.filter(person => person.id !==id)
  response.status(204).end()
})
app.post("/api/persons",(request,response)=>{
  
    const person = {"id": "4",
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"}
    if (person.name ===''){
      return response.status(400).send("Error: the name is missing.")
    }
    if (person.number ===''){
      return response.status(400).send("Error: the number is missing.")
    }
    if (personList.find((name)=> name.name === person.name)){
      return response.status(409).send("Error: the name already exist.")
    }
    personList.push(person)
    response.json(personList)
})



const PORT = 3001; 
app.listen(PORT);
console.log(`Server is running on port ${PORT}`);

