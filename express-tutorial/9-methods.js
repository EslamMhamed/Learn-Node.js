const express = require("express")
const app = express()

const {people} = require("./data")

app.use(express.static("./express-tutorial/methods-public"))

app.use(express.urlencoded({extended:false}))

app.get("/api/people", (req,res)=>{
    res.status(201).json({success: true, data: people})
})

app.put("/api/people/:id", (req,res)=>{
    const {id} = req.params
    const {name} = req.body
    const person = people.find(person => person.id === Number(id))
    if(!person){
        res.status(404).json({success: false, msg :`no person with id ${id}`})
    }
    const newPeople = people.map(person=> {
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(201).json({success: true, data: newPeople})
})

app.delete("/api/people/:id", (req,res)=>{
    const {id} = req.params
    const person = people.find(person => person.id === Number(id))

    if(!person){
        res.status(404).json({success : false, msg: `no person with id : ${id}`})
    }
    const newPeople = people.filter(person => person.id !== Number(id))

   return res.status(201).json({success: true , data: newPeople})
})

app.post("/login", (req, res)=>{
    const {name} = req.body
    if(name){
        res.status(200).send(`Welcome ${name}`)
    }else{
        res.status(401).send("Please Provide Credentails")
    }
})

app.listen(5000, ()=>{
    console.log("Server listening on port 5000...")
})