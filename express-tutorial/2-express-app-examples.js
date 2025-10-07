
const express = require("express")
const path = require("path")

const app = express()

app.use(express.static("./express-tutorial/navbar-app/public"))

app.get("/", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./express-tutorial/navbar-app/index.html"))
})

app.use( (req, res)=>{
    res.status(404).send("resource not found")
})

app.listen(5000, ()=>{
    console.log("server is listening on port 5000")
})