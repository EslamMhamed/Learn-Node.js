const fs = require("fs")

console.log("start first task")

fs.readFile("./content/first.txt", "utf8", (err,result)=>{
    if(err){
        console.log(err)
    }
    console.log(result)
    console.log("complete first task")
})

    console.log("starting next task task")
