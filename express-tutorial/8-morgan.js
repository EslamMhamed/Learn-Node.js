const express = require("express")
const morgan= require("morgan")
const app = express()

const logger = require("./logger")
const authoriz = require("./authorize")

// app.use([logger, authoriz])
app.use( morgan("tiny"))
 
app.get("/", (req, res)=>{
    res.send("Home Page")
    
})

app.get("/about", (req,res)=>{
    res.send("About Page")
})

app.get("/api/products", (req,res)=>{
    res.send("Products")
})

app.get("/api/items", (req,res)=>{
    console.log(req.user)
    res.send("Items")
})

app.listen(5000, ()=>{
    console.log("Server listening on port 5000...")
})